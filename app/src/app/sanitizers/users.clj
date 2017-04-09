(ns app.sanitizers.users)

(defn- remove-password
  "Removes the password key from a map"
  [m]
  (dissoc m :pass))

(defn sanitize
  "Pipeline of sanitiation steps to santiize a user/collection of users"
  [users]
  (->> users
    (map (comp
          remove-password))))
