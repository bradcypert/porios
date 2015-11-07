(ns app.routes.podcasts
  (:require [compojure.core :refer [defroutes GET POST PATCH]]
            [app.db.core :as db]
            [ring.util.http-response :refer [ok bad-request]]))

(defn- get-podcasts [params]
  (let [limit (:limit params 50) offset (:offset params 0)]
    (if-let [genre (:genre params)]
      (db/get-podcasts-by-genre {:genre genre :limit limit :offset limit})
      (db/get-podcasts {:limit limit :offset offset}))))

(defn- get-podcast [^:Integer id]
  (let [id (Integer/parseInt id)]
    (db/get-podcast {:id id})))

(defn- get-podcasts-by-genre [genre limit offset]
  (db/get-podcasts-by-genre {:genre genre :limit limit :offset offset}))

(defn- get-new-podcasts []
  (db/get-new-podcasts))

(defn- get-podcast-comments [params]
  (let [limit (:limit params 50) 
        offset (:offset params 0)
        id (Integer/parseInt (:id params))]
    (db/get-comments-for-podcast-paginate {:podcast_id id :limit limit :offset offset})))

(defn- create-podcast-comment [params]
  (let [user_id (:user_id params)
           podcast_id (:id params)
           comment_blob (:comment_blob params)]
   (if (some nil? (list user_id podcast_id comment_blob))
     (bad-request)
     (do (db/create-comment! {:user_id (Integer/parseInt user_id)
                                   :podcast_id (Integer/parseInt podcast_id)
                                   :comment_blob comment_blob})
         (ok)))))

(defn- update-podcast [params]
  (if-let [id (:comment_id params)]
    (do
      (db/update-comment! {:id (Integer/parseInt id) :comment_blob (:comment_blob params)})
      (ok))
    (bad-request)))

(defroutes podcast-routes
  (GET "/podcasts" {params :params} (-> params get-podcasts))
  (GET "/podcasts/new" [] (get-new-podcasts))
  (GET "/podcasts/:id" [id] (-> id get-podcast))
  (GET "/podcasts/:id/comments" {params :params} (-> params get-podcast-comments))
  (POST "/podcasts/:id/comments" {params :params} (-> params create-podcast-comment))
  (PATCH "/podcasts/:id/comments/:comment_id" {params :params} (-> params update-podcast)))
