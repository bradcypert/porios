(ns app.modules.podcasts
  (:require [app.db.core :as db]))

(defn get-podcasts
  "Fetches from all podcasts given a limit and an offset."
  [limit offset]
  (db/get-podcasts {:limit limit :offset offset}))

(defn get-podcast
  "Fetches a single podcast by id."
  [^:Integer id]
  (db/get-podcast {:id id}))

(defn get-podcasts-by-genre
  "Fetches from podcasts in a specific genre given a limit and an offset."
  [genre limit offset]
  (db/get-podcasts-by-genre {:genre genre
                             :limit limit
                             :offset offset}))

(defn get-new-podcasts
  "Fetches new additions to the podcast library."
  []
  (db/get-new-podcasts))

(defn get-podcast-comments
  "Fetches comments for a given podcast id. Provide limit and offset."
  [id limit offset]
  (db/get-comments-for-podcast-paginate {:podcast_id id
                                         :limit limit
                                         :offset offset}))

(defn get-podcast-events
  "Fetches all events for a given podcast. Provide limit and offset."
  [id limit offset]
  (db/get-events-for-podcast-paginate {:podcast_id id
                                       :limit limit
                                       :offset offset}))

(defn create-podcast-comment
  "Creates a new comment on a given podcast"
  [user_id podcast_id comment_blob]
  (let [comment_item (db/create-comment<! {:user_id user_id
                                           :podcast_id podcast_id
                                           :comment_blob comment_blob})]
     (db/create-event! {:user_id user_id
                        :podcast_id podcast_id
                        :event "commented"
                        :comment_id (:id comment_item)})))

(defn delete-podcast-comment
  "Deletes a comment by it's ID."
  [id]
  (db/delete-comment! {:id id}))

(defn update-podcast-comment
  "Updates the text of an existing comment by ID."
  [id blob]
  (db/update-comment! {:id id
                       :comment_blob blob}))

(defn subscribe-to-podcast
  "Subscribes the user to a podcast by its ID."
  [id user_id]
  (db/create-subscription! {:podcast_id id
                            :user_id user_id}))

(defn unsubscribe-to-podcast
  "Delete's a subscription to a podcast by ID and user_id."
  [id user_id]
  (db/delete-subscription-by-user-and-podcast-id! {:user_id user_id
                                                   :podcast_id id}))

(defn get-subscriber-count-for-podcast
  "Fetches the count (Int) of subscribers for a given podcast"
  [id]
  (db/get-subscriber-count-for-podcast {:podcast_id id}))
