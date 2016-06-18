CREATE TYPE genre AS ENUM
('arts','government','science and medicine', 'business', 'health', 'culture', 'comedy', 'family', 'sports', 'education', 'music', 'technology', 'hobbies', 'religion', 'tv');

CREATE TYPE event AS ENUM
('subscribed', 'commented');

CREATE TABLE podcasts
(id SERIAL PRIMARY KEY,
 name VARCHAR(100),
 description TEXT,
 genre genre,
 release_date date,
 feed varchar(2500));

CREATE TABLE followers
(id SERIAL PRIMARY KEY,
 follower integer REFERENCES users,
 followee integer REFERENCES users);

CREATE TABLE comments
(id SERIAL PRIMARY KEY,
 user_id integer REFERENCES users,
 podcast_id integer REFERENCES podcasts,
 comment_blob TEXT);

CREATE TABLE events
(id SERIAL PRIMARY KEY,
 user_id integer REFERENCES users,
 podcast_id integer REFERENCES podcasts,
 comment_id integer REFERENCES comments,
 event event);

CREATE TABLE subscriptions
(id SERIAL PRIMARY KEY,
 user_id integer REFERENCES users,
 podcast_id integer REFERENCES podcasts);

CREATE TABLE threads
(id SERIAL PRIMARY KEY,
 user1 integer REFERENCES users,
 user2 integer REFERENCES users);

CREATE TABLE messages
(id SERIAL primary key,
 recipient integer REFERENCES users,
 sender integer REFERENCES users,
 thread integer REFERENCES threads,
 ts timestamp without time zone default (now() at time zone 'utc'),
 read boolean default false, 
 message TEXT);
