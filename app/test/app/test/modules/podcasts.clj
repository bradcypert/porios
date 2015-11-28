(ns app.test.modules.podcasts
  (:require [clojure.test :refer :all]
            [app.modules.podcasts :refer :all]))

(deftest podcast-tests
  (testing "Fetching podcast"
    (let [podcast (get-podcast 1)]
      (is (= "Sample Podcast" (:name (first podcast))))))

  (testing "Fetch by genre"
    (let [podcast (get-podcasts-by-genre "arts" 1 0)]
      (is (= "Sample Podcast" (:name (first podcast)))))))
