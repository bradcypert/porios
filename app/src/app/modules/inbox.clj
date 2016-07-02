(ns app.modules.inbox
  (:require [app.db.core :as db]))

(defn build-inbox [user]
  (db/get-inbox-overview-for-user {:user user}))

;; TODO: Error checking needed? Simplify?
(defn create-message-for-thread [message, sender, thread]
  (db/create-message<! {:from sender
                        :thread thread
                        :message message}))

;; TODO: Tests please.
(defn create-message-for-users [sender recipients message]
  (let [thread (:id (db/create-thread<!))
        users (conj recipients sender)]
    (dorun 
      (map #(db/create-thread-for-users<! {:user %
                                           :thread thread})
         users))
    (db/create-message<! {:from sender
                          :message message
                          :thread thread})))

(defn get-messages-for-thread [thread]
  (db/get-messages-for-thread {:thread thread}))
