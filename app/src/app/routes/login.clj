(ns app.routes.login
  (:require [compojure.core :refer [defroutes GET POST PATCH]]
            [app.db.core :as db]
            [app.modules.auth :as auth]
            [ring.util.http-response :refer [ok bad-request unauthorized]]))

(defn- login
  [params]
  (let [email (:email params)
        password (:password params)]
    (if-let [res (auth/generate-signature email password)]
      res
      (unauthorized {:error "Bad Credentials"}))))

(defroutes login-routes
  (POST "/login" {params :params} (-> params login)))
