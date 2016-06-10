(ns app.modules.auth
 (:require [buddy.sign.jwt :as jwt]
           [app.db.core :as db]))

(defonce secret "9!h:L<o81R,oB(tX2uY0L_joNeK'Rr")

(def encryption {:alg :a256kw :enc :a128gcm})

(defn generate-signature [email password]
  (let [user (db/get-user-by-email-and-password {:email email :password password})]
    (jwt/sign {:user (:id user)} secret)))

(defn is-authorized-signature? [signature]
  (let [user (db/get-user-by-email-and-password (jwt/unsign signature secret))]
    (if (contains? user :user)
      true
      false)))
