(ns app.services.podcast
  (:require [clj-http.client :as httpclient]
            [clojure.xml :as xml]))

(defn parse-feed
  [feed-url]
  (if (nil? feed-url)
    feed-url
    (-> feed-url
        (httpclient/get)
        (:body))))
