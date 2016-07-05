(ns app.routes.inbox
  (:require [compojure.core :refer [defroutes GET POST]]
            [app.modules.inbox :as inbox]
            [app.helpers.helpers :as helpers]
            [ring.util.http-response :refer [ok bad-request unauthorized]]))

(defn- build-inbox-for-user
  [^:Integer id]
  (if (not (nil? id))
    (condp instance? id
      Number (inbox/build-inbox id)
      (bad-request))
    (unauthorized)))

(defn- get-message-for-thread
  [params]
  (let [id        (Integer/parseInt (:id params))
        auth-user (:auth-user params)]
    (condp instance? id
      Number (inbox/get-messages-for-thread id auth-user)
      (bad-request))))

(defn- create-new-message-and-thread
  [params]
  (let [users   (helpers/string->vec (:recipients params))
        message (:message params)
        sender  (:auth-user params)]
    (if-not (some nil? [users message sender])
      (inbox/create-message-for-users sender users message)
      (bad-request))))

(defn- create-new-message-for-thread
  [params]
  (let [thread  (:id params)
        message (:message params)
        sender  (:auth-user params)]
    (if-not (some nil? [thread message sender])
      (inbox/create-message-for-thread message sender thread)
      (bad-request))))

;TODO: Make sure the user is authorized to see these messages. Specifically inbox/:id
(defroutes inbox-routes
  (GET "/inbox" {params :params} (-> (:auth-user params) build-inbox-for-user))
  (GET "/inbox/:id" {params :params} (-> params get-message-for-thread))
  (POST "/inbox" {params :params} (-> params create-new-message-and-thread))
  (POST "/inbox/:id" {params :params} (-> params create-new-message-for-thread))
  )
