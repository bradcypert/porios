(ns app.test.db.core
  (:require [app.db.core :as db]
            [app.db.migrations :as migrations]
            [clojure.test :refer :all]
            [clojure.java.jdbc :as jdbc]
            [conman.core :refer [with-transaction]]
            [environ.core :refer [env]]))

(use-fixtures
  :once
  (fn [f]
    (db/connect!)
    (migrations/migrate ["migrate"])
    (f)))

(deftest test-users
  (with-transaction [t-conn db/*conn*]
    (jdbc/db-set-rollback-only! t-conn)
    (is (= 1 (db/create-user!
               {:first_name "Sam"
                :last_name  "Smith"
                :email      "sam.smith@example.com"
                :pass       "pass"})))
    (let [user (first (db/get-user {:id 1}))]
      (is (some? (:email user))))))
