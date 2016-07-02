(ns app.helpers.helpers
  (:require [clojure.string :refer [split]]))

(defn string->vec
  [s]
  (split s #","))
