(ns app.test.modules.podcasts
  (:require [clojure.test :refer :all]
            [app.modules.podcasts :refer :all]))

(deftest podcast-tests
  (testing "Fetching podcast"
    (let [podcast (get-podcast 1)]
      (is (= "Sample Podcast" (:name (first podcast))))))

  (testing "Fetch by genre"
    (let [podcast (get-podcasts-by-genre "arts" 1 0)]
      (is (= "Sample Podcast" (:name (first podcast))))))

  ;Uses some? because the data in this table will be the latest inserted podcast.
  (testing "Fetching new podcasts"
    (let [podcast (get-new-podcasts)]
      (is (some? (:name (first podcast)))))))
