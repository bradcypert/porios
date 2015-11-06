(ns app.routes.podcasts
  (:require [compojure.core :refer [defroutes GET]]
            [app.db.core :as db]))

(defn- get-podcasts [params]
  (let [limit (:limit params 50) offset (:offset params 0)]
    (println (type limit))
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

(defroutes podcast-routes
  (GET "/podcasts" {params :params} (get-podcasts params))
  (GET "/podcasts/new" [] (get-new-podcasts))
  (GET "/podcasts/:id" [id] (-> id get-podcast)))
