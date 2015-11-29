(ns app.test.modules.users
  (:require [clojure.test :refer :all]
            [app.modules.users :refer :all]))

(deftest user-tests
  (testing "Fetching a user"
    (let [user (get-user 1)]
      (is (some? (:email (first user)))))))
