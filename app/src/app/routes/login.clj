(ns app.routes.login
  (:require [compojure.core :refer [defroutes GET POST PATCH]]
            [app.db.core :as db]
            [app.modules.auth :as auth]
            [ring.util.http-response :refer [ok bad-request]]))

(defn- login
  [params]
  (let [email (:email params)
        password (:password params)]
    (auth/generate-signature email password)))

(defroutes login-routes
  (POST "/login" {params :params} (-> params login)))
