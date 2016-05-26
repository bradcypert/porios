(ns app.routes.users
  (:require [compojure.core :refer [defroutes GET POST PATCH]]
            [app.modules.users :as users]
            [app.modules.auth :as auth]
            [ring.util.http-response :refer [ok bad-request]]))

(defn- get-user
  [^:Integer id]
  (let [id (Integer/parseInt id)]
    (users/get-user id)))

(defn- get-user-subscriptions
  [^:Integer id]
  (let [id (Integer/parseInt id)]
    (users/get-user-subscriptions id)))

(defn- get-user-followers
  [^:Integer id]
  (let [id (Integer/parseInt id)]
    (users/get-user-followers id)))

(defn- get-user-followings
  [^:Integer id]
  (let [id (Integer/parseInt id)]
    (users/get-user-followings id)))

(defn- get-user-comments
  [^:Integer id]
  (let [id (Integer/parseInt id)]
    (users/get-user-comments id)))

(defn- get-user-events
  [^:Integer id]
  (let [id (Integer/parseInt id)]
    (users/get-user-events id)))

(defn- get-user-following-events
  [^:Integer id]
  (let [id (Integer/parseInt id)]
    (users/get-user-following-events id)))

(defn- create-user
  [params] ;;TODO: Clojure TypeHint for map?
  (let [first     (:first_name params)
        last      (:last_name params)
        email     (:email params)
        password  (:password params)]
    (users/create-user first last email password))
  (ok))

;Dangerous (or at least sloppy)?
(defn- update-user
  [params]
  (try
    (do
      (users/update-user params)
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
