(ns app.modules.auth
 (:require [buddy.sign.jwt :as jwt]
           [buddy.hashers :as hashers]
           [app.db.core :as db]))

(defonce secret "9!h:L<o81R,oB(tX2uY0L_joNeK'Rr")

(def encryption {:alg :a256kw :enc :a128gcm})

(defn encrypt [item]
  (hashers/derive item))

;; TODO: Better try-catch support
(defn check-match [item source]
  (if (not (some nil? [item source]))
    (hashers/check item source)
    false))

(defn unsign-token [token]
  (jwt/unsign token secret))

(defn generate-signature [email password]
  (let [user (first (db/get-user-by-email {:email email}))]
    (if (check-match password (:pass user)) 
      (jwt/sign {:user (:id user)} secret)
      nil)))

(defn is-authorized-signature? [signature]
  (let [user (db/get-user-by-email-and-password (jwt/unsign signature secret))]
    (if (contains? user :user)
      true
      false)))
