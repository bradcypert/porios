(ns app.middleware
  (:require [app.layout :refer [*app-context* error-page]]
            [taoensso.timbre :as timbre]
            [environ.core :refer [env]]
            [selmer.middleware :refer [wrap-error-page]]
            [prone.middleware :refer [wrap-exceptions]]
            [ring.middleware.flash :refer [wrap-flash]]
            [immutant.web.middleware :refer [wrap-session]]
            [ring.middleware.reload :as reload]
            [ring.middleware.webjars :refer [wrap-webjars]]
            [ring.middleware.defaults :refer [site-defaults wrap-defaults]]
            [ring.middleware.anti-forgery :refer [wrap-anti-forgery]]
            [ring.middleware.format :refer [wrap-restful-format]]
            [ring.middleware.cors :refer [wrap-cors]]
            [buddy.auth.middleware :refer [wrap-authentication]]
            [buddy.auth.backends.session :refer [session-backend]]
            [buddy.auth.accessrules :refer [restrict]]
            [buddy.auth :refer [authenticated?]]
            [app.modules.auth :refer [unsign-token]]
            [app.layout :refer [*identity*]]
            [clojure.string :refer [split]])
  (:import [javax.servlet ServletContext]))

; CHECK WITH BRAD BEFORE MODIFYING THIS FILE.
; Because it probably isn't the file you're looking for.

(def token-request-types [:put :post :patch :delete])

(defn wrap-context [handler]
  (fn [request]
    (binding [*app-context*
              (if-let [context (:servlet-context request)]
                (try (.getContextPath ^ServletContext context)
                     (catch IllegalArgumentException _ context))
                (:app-context env))]
      (handler request))))

(defn wrap-internal-error [handler]
  (fn [req]
    (try
      (handler req)
      (catch Throwable t
        (timbre/error t)
        (error-page {:status 500
                     :title "Something very bad has happened!"
                     :message "We've dispatched a team of highly trained gnomes to take care of the problem."})))))

(defn wrap-dev [handler]
  (if (env :dev)
    (-> handler
        reload/wrap-reload
        wrap-error-page
        wrap-exceptions)
    handler))

;; disabled in dev to allow testing using API clients
(defn wrap-csrf [handler]
  (if true
    handler
    (wrap-anti-forgery
      handler
      {:error-response (error-page
        {:status 403
         :title "Invalid anti-forgery token"})})))

(defn wrap-formats [handler]
  (wrap-restful-format handler {:formats [:json-kw :transit-json :transit-msgpack]}))

(defn on-error [request response]
  (error-page
    {:status 403
     :title (str "Access to " (:uri request) " is not authorized")}))

(defn wrap-restricted [handler]
  (restrict handler {:handler authenticated?
                     :on-error on-error}))

(defn wrap-identity [handler]
  (fn [request]
    (binding [*identity* (get-in request [:session :identity])]
      (handler request))))

(defn map-auth-token-to-user [handler]
  (fn [request]
    (try
      (let [token (get (:headers request) "authorization")
            token (last (split token #" "))
            token (unsign-token token)]
        (if-let [user-id (:user token)]
          (let [params (:params request)
                params (assoc params :auth-user user-id)
                request (assoc request :params params)]
            (handler request)
          (handler request))))
    (catch Throwable t
      (handler request)))))

(defn ensure-json-token [handler]
  (fn [request]
    (let [method (:request-method request)
          json-token (:jwt (:params request))]
      (if (contains? token-request-types method)
        (if (some? json-token)
          (handler request) ;TODO: Change me once we figure out a way to validate the token is real.
          (throw (Exception. "No JSON Web Token provided")))
        (handler request)))))

(defn wrap-auth [handler]
  (-> handler
      wrap-identity
      map-auth-token-to-user
      (wrap-authentication (session-backend))))

(defn wrap-base [handler]
  (-> handler
      wrap-dev
      wrap-auth
      wrap-formats
      wrap-webjars
      wrap-flash
      (wrap-cors :access-control-allow-origin [#".+"]
                 :access-control-allow-methods [:get :put :post :delete :patch])
      (wrap-session {:cookie-attrs {:http-only true}})
      (wrap-defaults
        (-> site-defaults
            (assoc-in [:security :anti-forgery] false)
            (dissoc :session)))
      wrap-context
      wrap-internal-error))
