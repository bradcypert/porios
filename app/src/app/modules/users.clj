(ns app.modules.users
  (:require [app.db.core :as db]
            [app.modules.auth :as auth]
            [app.sanitizers.users :as sanitizer]))

(defn get-user
  "Fetches a user by ID"
  [^:Integer id]
  (-> (db/get-user {:id id})
      (sanitizer/sanitize)))

(defn get-user-subscriptions
  "Fetches the subscriptions for a user by their ID"
  [^:Integer id]
  (db/get-subscriptions-for-user {:user_id id}))

(defn get-user-followers
  "Fetches the followers for a user by the user's ID"
  [^:Integer id]
  (db/get-followers-for-user {:user_id id}))

(defn get-user-followings
  "Fetches the followees for a user by the user's ID"
  [^:Integer id]
  (db/get-following-for-user {:user_id id}))

(defn get-user-comments
  "Fetches the comments for a user by the user's ID"
  [^:Integer id]
  (db/get-all-comments-for-user {:user_id id}))

(defn get-user-events
  "Fetches the events for a user by the user's ID"
  [^:Integer id]
  (db/get-all-events-for-user {:user_id id}))

(defn get-user-following-events
  "Fetches the events for the followees by the given user's ID"
  [^:Integer id]
  (db/get-events-for-followees-of-user {:user_id id}))

(defn create-user
  "Creates a new user"
  [first-name last-name email password]
  (try
    (db/create-user! {:first_name first-name
                      :last_name last-name
                      :email email
                      :password (auth/encrypt password)})
    (catch Exception e false)))

(defn update-user
  "Updates a user"
  [id first-name last-name password age pic]
  (try
    (do
      (db/update-user<! {:id id
                        :first_name first-name
                        :last_name last-name
                        :password (auth/encrypt password)
                        :age age
                        :pic_url pic}))
    (catch Exception e (println e))))

(defn get-user-avatar-for-email
  "Returns a URL pointing the users avatar"
  [email]
  (db/get-user-avatar-for-email {:email email}))

(defn get-favorites-for-user
  "Gets a list of favorited podcasts for a user-id"
  [^:Integer id]
  (db/get-user-favorites {:user_id id}))

(defn add-favorite-for-user
  "Adds a favorited podcast for a user-id"
  [^:Integer id
   ^:Integer pid]
  (db/add-user-favorite {:user_id id
                         :podcast_id pid}))

(defn remove-favorite-for-user
  "Removes a favorited podcast for a user-id"
  [^:Integer id
   ^:Integer pid]
  (db/delete-user-favorite {:user_id id
                            :podcast_id pid}))
