(ns app.routes.podcasts
  (:require [compojure.core :refer [defroutes GET POST PATCH DELETE]]
            [app.db.core :as db]
            [app.modules.podcasts :as podcasts]
            [ring.util.http-response :refer [ok bad-request]]))

(defn- get-podcasts [params]
  (let [limit (:limit params 50)
        offset (:offset params 0)]
    (if-let [genre (:genre params)]
      (podcasts/get-podcasts-by-genre genre limit offset)
      (podcasts/get-podcasts limit offset))))

(defn- get-podcast [^:Integer id]
  (let [id (Integer/parseInt id)]
    (podcasts/get-podcast id)))

(defn- get-new-podcasts []
  (podcasts/get-new-podcasts))

(defn- get-podcast-comments [params]
  (let [limit (:limit params 50)
        offset (:offset params 0)
        id (Integer/parseInt (:id params))]
    (podcasts/get-podcast-comments id limit offset)))

(defn- get-podcast-events [params]
  (let [limit (:limit params 50)
        offset (:offset params 0)
        id (Integer/parseInt (:id params))]
    (podcasts/get-podcast-events id limit offset)))

(defn- create-podcast-comment [params]
  (let [user_id (Integer/parseInt (:user_id params))
           podcast_id (Integer/parseInt (:id params))
           comment_blob (:comment_blob params)]
   (if (some nil? (list user_id podcast_id comment_blob))
     (bad-request)
     (do
       (podcasts/create-podcast-comment user_id podcast_id comment_blob)
       (ok)))))

(defn- delete-podcast-comment [comment-id]
  (let [id (Integer/parseInt comment-id)]
    (podcasts/delete-podcast-comment id)))

(defn- update-podcast-comment [params]
  (if-let [id (Integer/parseInt (:comment_id params))]
    (do
      (podcasts/update-podcast-comment id (:comment_blob params))
      (ok))
    (bad-request)))

(defn- subscribe-to-podcast [params]
  (let [id (Integer/parseInt (:id params))
        user (Integer/parseInt (:user_id params))]
    (if (nil? user)
      (bad-request)
      (do
        (podcasts/subscribe-to-podcast user id)
        (ok)))))

(defn- unsubscribe-to-podcast [params]
  (let [id (Integer/parseInt (:id params))
           user (Integer/parseInt (:user_id params))]
    (if (nil? user)
      (bad-request)
      (do
        (podcasts/unsubscribe-to-podcast id user)
        (ok)))))

(defn- get-subscriber-count-for-podcast [id]
  (if-let [id (Integer/parseInt id)]
    (podcasts/get-subscriber-count-for-podcast id)
    (bad-request)))


(defroutes podcast-routes
  (GET "/podcasts" {params :params} (-> params get-podcasts))
  (GET "/podcasts/new" [] (get-new-podcasts))
  (GET "/podcasts/:id" [id] (-> id get-podcast))
  (GET "/podcasts/:id/comments" {params :params} (-> params get-podcast-comments))
  (GET "/podcasts/:id/events" {params :params} (-> params get-podcast-events))
  (GET "/podcasts/:id/subscriber/count" [id] (-> id get-subscriber-count-for-podcast))
  (POST "/podcasts/:id/comments" {params :params} (-> params create-podcast-comment))
  (POST "/podcasts/:id/subscribe" {params :params} (-> params subscribe-to-podcast))
  (POST "/podcasts/:id/unsubscribe"{params :params} (-> params unsubscribe-to-podcast))
  (DELETE "/podcasts/:id/comments/:cid" [cid] (-> cid delete-podcast-comment))
  (PATCH "/podcasts/:id/comments/:comment_id" {params :params} (-> params update-podcast-comment)))
