(ns app.routes.users
  (:require [compojure.core :refer [defroutes GET POST PATCH DELETE]]
            [app.modules.users :as users]
            [app.modules.auth :as auth]
            [ring.util.http-response :refer [ok bad-request]]))

(defn- get-user
  [^:Integer id]
  (if (some? id)
    (let [id (Integer/parseInt (str id))]
      (users/get-user id))
    '()))

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
  [params]
  (let [first     (:first_name params)
        last      (:last_name params)
        email     (:email params)
        password  (:password params)]
    (if (users/create-user first last email password)
      (ok)
      (bad-request {:error "Unable to create new user. Email already exists."}))))

;;TODO: Should only have to pass an id and a map with config options.
(defn- update-user
  [params]
  (let [f     (:first_name params)
        l     (:last_name params)
        id    (:id params)
        pass  (:pass params)
        pic   (:pic_url params)
        age   (:age params)]
    (try
      (do
        (users/update-user id f l pass age pic)
        (ok))
      (catch Exception e (bad-request)))))

(defn- get-user-photo
  [params]
  (let [email (:email params)]
    (users/get-user-avatar-for-email email)))

(defn- get-user-favorites
  [^:Integer id]
  (let [id (Integer/parseInt id)]
    (users/get-favorites-for-user id)))

(defn- add-user-favorites
  [params]
  (let [id (Integer/parseInt (:id params))
        pid (Integer/parseInt (:podcast_id params))]
    (try
      (do
        (users/add-favorite-for-user id pid)
        (ok))
      (catch Exception e (bad-request)))))

(defn- remove-user-favorite
  [params]
  (let [id (Integer/parseInt (:id params))
        pid (Integer/parseInt (:pid params))]
    users/remove-favorite-for-user id pid))

(defroutes user-routes
  (GET "/users/me" {params :params} (-> (:auth-user params) get-user))
  (GET "/users/:id" [id] (-> id get-user))
  (GET "/users/:id/subscriptions" [id] (-> id get-user-subscriptions))
  (GET "/users/:id/followers" [id] (-> id get-user-followers))
  (GET "/users/:id/following" [id] (-> id get-user-followings))
  (GET "/users/:id/favorites" [id] (-> id get-user-favorites))
  (GET "/users/:id/comments" [id] (-> id get-user-comments))
  (GET "/users/:id/events" [id] (-> id get-user-events))
  (GET "/users/:id/events/following" [id] (-> get-user-following-events))
  (GET "/userPhoto" {params :params} (-> params get-user-photo))
  (POST "/users" {params :params} (-> params create-user))
  (POST "/users/:id/favorites" {params :params} (-> params add-user-favorites))
  (DELETE "/users/:id/favorites/:pid" {params :params} (-> params remove-user-favorite))
  (PATCH "/users/:id" {params :params} (-> params update-user)))
