-- name: create-user!
-- creates a new user record
INSERT INTO users
(first_name, last_name, email, pass)
VALUES (:first_name, :last_name, :email, :pass)

-- name: update-user!
-- update an existing user record
UPDATE users
SET first_name = :first_name, last_name = :last_name, email = :email
WHERE id = :id

-- name: get-user
-- retrieve a user given the id.
SELECT * FROM users
WHERE id = :id

-- name: get-user-by-email-and-password
-- retrieve a user by email and password hash
SELECT * FROM users
WHERE email = :email AND password = :password

-- name: delete-user!
-- delete a user given the id
DELETE FROM users
WHERE id = :id



-- name: create-podcast!
-- creates a new podcast. Shouldn't be user facing.
INSERT INTO podcasts
(name, description, genre, release_date)
VALUES (:name, :description, :genre, :release_date)

-- name: update-podcast!
-- updates an existing podcast.
UPDATE podcasts
SET name = :name, description = :description, genre = :genre, release_date = :release_date

--name: get-podcasts
-- gets paginated list of podcasts. Provide limit and offset.
SELECT * FROM podcasts
LIMIT cast(:limit as bigint) OFFSET cast(:offset as bigint)

--name: get-podcast
-- gets a podcast by ID.
SELECT * FROM podcasts
WHERE id = :id

--name: get-podcasts-by-genre
-- gets paginated list of podcasts by genere, provide genre, limit, then offset.
SELECT * FROM podcasts
WHERE genre = :genre
LIMIT cast(:limit as bigint) OFFSET cast(:offset as bigint)

--name: get-new-podcasts
-- gets all podcasts that have been released within the past month, limit 10.
SELECT * FROM podcasts
WHERE release_date > current_date - interval '30 days'
ORDER BY release_date DESC
LIMIT cast(10 as bigint)




--name: create-follower!
-- creates a follower relationship between a follower and a followee.
INSERT INTO followers
(follower, followee)
VALUES (:follower_id, :followee_id)

--name: delete-follower!
-- deletes a follower relationship by id
DELETE FROM followers
WHERE id = :id

--name: delete-follow-by-relationship!
-- deletes a follower by follower and followe IDs
DELETE FROM followers
WHERE follower = :follower_id AND followee = :followee_id

--name: get-follower
-- returns a follower relationship by id
SELECT * FROM followers
WHERE id = :id

--name: get-follower-by-relationship
-- returns a follower relationship by follower and followee IDs
SELECT * FROM followers
WHERE follower = :follower_id AND followee = :followee_id

--name: get-followers-for-user
-- returns all the followers for a given user.
SELECT * FROM followers
WHERE followee = :user_id

--name: get-following-for-user
-- returns all the users that a given user is following
SELECT * FROM followers
WHERE follower = :user_id



--name: create-comment!
-- creates a new comment given a userID, podcastID, and blob
INSERT INTO comments
(user_id, podcast_id, comment_blob)
VALUES (:user_id, :podcast_id, :comment_blob)

--name: create-comment<!
-- creates a new comment given a userID, podcastID, and blob - returns the inserted row.
INSERT INTO comments
(user_id, podcast_id, comment_blob)
VALUES (:user_id, :podcast_id, :comment_blob)

--name: delete-comment!
-- deletes a comment by ID
DELETE FROM comments
WHERE id = :id

--name: get-comment
-- gets a comment by id
SELECT * FROM comments
WHERE id = id

--name: get-comments-for-podcast
-- gets all comments for a podcast
SELECT * FROM comments
WHERE podcast_id = :podcast_id

--name: get-comments-for-podcast-paginate
-- gets all comments for a podcast for pagination. Provide limit and offset.
SELECT * FROM comments
WHERE podcast_id = :podcast_id
LIMIT cast(:limit as bigint) OFFSET cast(:offset as bigint)

--name: get-all-comments-for-user
-- gets all comments for a given user
SELECT * FROM comments
WHERE user_id = :user_id

--name: get-all-comments-for-user-paginate
-- gets all comments for a given user for pagination. Provide limit and offset.
SELECT * FROM comments
WHERE user_id = :user_id
LIMIT cast(:limit as bigint) OFFSET cast(:offset as bigint)

--name: update-comment!
-- updates a comment's blob by it's ID
UPDATE comments
SET comment_blob = :comment_blob
WHERE id = :id




--name: create-event!
-- creates a new event, event must be "comment" or "subscribe"
INSERT INTO events
(user_id, podcast_id, event, comment_id)
VALUES (:user_id, :podcast_id, :event, :comment_id)

--name: delete-event!
-- deletes an event. Im not sure if we'll ever need this, but just in case.
DELETE FROM events
WHERE id = :id

--name: get-all-events-for-user
-- gets all events for a given user.
SELECT * FROM events
WHERE user_id = :user_id

--name: get-events-for-user-paginate
-- gets all events for a given user for pagination. Provide limit and offset.
SELECT * FROM events
WHERE user_id = :user_id
LIMIT cast(:limit as bigint) OFFSET cast(:offset as bigint)

--name: get-events-for-podcast-paginate
-- gets all events for a given podcast for pagination. Provide limit and offset.
SELECT * FROM events
WHERE podcast_id = :podcast_id
LIMIT cast(:limit as bigint) OFFSET cast(:offset as bigint)

--name: get-events-for-followees-of-user
-- gets all events of followees of a given user.
SELECT * FROM events e
WHERE e.user_id IN
  (SELECT f.followee
   FROM followers f
   WHERE f.follower = :user_id)




--name: create-subscription!
-- creates a new subscription
INSERT INTO subscriptions
(user_id, podcast_id)
VALUES (:user_id, :podcast_id)

--name: delete-subscription!
-- deletes an existing subscription
DELETE FROM subscriptions
WHERE id = :id

--name: delete-subscription-by-user-and-podcast-id!
-- deletes an existing subscription by user and podcast id
DELETE FROM subscriptions
WHERE user_id = :user_id AND podcast_id = :podcast_id

--name: get-subscriptions-for-user
-- gets all subscriptions for a given user id
SELECT * FROM subscriptions
WHERE user_id = :user_id

--name: get-subscriptions-for-user-paginate
-- gets all subscriptions for a given user with a limit and offset
SELECT * FROM subscriptions
WHERE (user_id = :user_id)
LIMIT cast(:limit as bigint) OFFSET cast(:offset as bigint)

--name: get-subscribers-for-podcast
-- gets all subscribers for a given podcast
SELECT * FROM users u
WHERE u.id IN
  (SELECT s.user_id
   FROM subscriptions s
   where podcast_id = :podcast_id)

--name: get-subscriber-count-for-podcast
-- gets subscriber count for a given podcast id
SELECT COUNT(*) FROM subscriptions
WHERE podcast_id = :podcast_id
