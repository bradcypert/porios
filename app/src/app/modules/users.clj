(ns app.modules.users
  (:require [app.db.core :as db]
            [app.modules.auth :as auth]))

(defn get-user
  "Fetches a user by ID"
  [^:Integer id]
  (db/get-user {:id id}))

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

(defn message-user
  "Creates a new message record for two users with a given message"
  [^:Integer to
   ^:Integer from
   ^:String message]
   (db/create-message! {:to to
                        :from from
                        :message message}))

(defn create-user
  "Creates a new user"
  [first-name last-name email password]
  (db/create-user! {:first_name first-name
                    :last_name last-name
                    :email email
                    :password (auth/encrypt password)}))

;Dangerous? Or at least sloppy?
(defn update-user
  "Updates a user"
  [request_params]
  (try
    (do
      (db/update-user! request_params)
      (true))
    (catch Exception e (false))))

(defn get-user-avatar-for-email
  "Returns a URL pointing the users avatar"
  [email]
  (db/get-user-avatar-for-email {:email email}))
