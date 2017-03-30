(ns app.services.podcast
  (:require [clj-http.client :as httpclient]
            [feedparser-clj.core :as feed-parser]))

(defn- get-title
  [f]
  (:title f))

(defn- get-entries
  [f]
  (:entries f))

(defn- get-description
  [f]
  (:description f))

(defn- get-logo
  [f]
  (:image f))

(defn- build-item
  [e]
  {
    :title          (:title e)
    :description    (:value (:description e))
    :url            (:url (first (:enclosures e)))
    :publishedDate  (:published-date e)
    :duration       (:length (first (:enclosures e)))
    })

(defn- get-items
  [f]
  (map build-item (get-entries f)))

(defn- get-copyright
  [f]
  (:copyright f))

(defn parse-feed
  [feed-url]
  (let [feed (feed-parser/parse-feed feed-url)]
    {
      :title        (get-title feed)
      :logo         (get-logo feed)
      :description  (get-description feed)
      :copyright    (get-copyright feed)
      :items        (get-items feed)
    }))
