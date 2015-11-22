(ns app.routes.users
  (:require [compojure.core :refer [defroutes GET POST PATCH]]
            [app.db.core :as db]
            [app.modules.auth :as auth]
            [ring.util.http-response :refer [ok bad-request]]))

(defn- get-user [id]
  (let [id (Integer/parseInt id)]
    (db/get-user {:id id})))

(defn- get-user-subscriptions [id]
  (let [id (Integer/parseInt id)]
    (db/get-subscriptions-for-user {:id id})))

(defn- get-user-followers [id]
  (let [id (Integer/parseInt id)]
    (db/get-followers-for-user {:user_id id})))

(defn- get-user-followings [id]
  (let [id (Integer/parseInt id)]
    (db/get-following-for-user {:user_id id})))

(defn- get-user-comments [id]
  (let [id (Integer/parseInt id)]
    (db/get-all-comments-for-user {:user_id id})))

(defn- get-user-events [id]
  (let [id (Integer/parseInt id)]
    (db/get-all-events-for-user {:user_id id})))

(defn- get-user-following-events [id]
  (let [id (Integer/parseInt id)]
    (db/get-events-for-followees-of-user {:user_id id})))

(defn- create-user [params]
  (let [first_name (:first_name params)
        last_name (:last_name params)
        email (:email params)
        password (:password params)]
    (db/create-user! {:first_name first_name :last_name last_name :email email :password password}))
  (ok))

;Dangerous (or at least sloppy)?
(defn- update-user [params]
 (try
   (do
    (db/update-user! params)
    (ok))
   (catch Exception e (bad-request))))

(defroutes user-routes
  (GET "/users/:id" [id] (-> id get-user))
  (GET "/users/:id/subscriptions" [id] (-> id get-user-subscriptions))
  (GET "/users/:id/followers" [id] (-> id get-user-followers))
  (GET "/users/:id/following" [id] (-> id get-user-followings))
  (GET "/users/:id/comments" [id] (-> id get-user-comments))
  (GET "/users/:id/events" [id] (-> id get-user-events))
  (GET "/users/:id/events/following" [id] (-> get-user-following-events))
  (POST "/users/" {params :params} (-> params create-user))
  (PATCH "/users/:id" {params :params} (-> params update-user)))
