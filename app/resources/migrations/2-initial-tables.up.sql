CREATE TYPE genre AS ENUM 
('arts','government','science and medicine', 'business', 'health', 'culture', 'comedy', 'family', 'sports', 'education', 'music', 'technology', 'hobbies', 'religion', 'tv');

CREATE TYPE event AS ENUM
('subscribed', 'commented');

CREATE TABLE podcasts
(id SERIAL,
 name VARCHAR(100),
 description TEXT,
 genre genre,
 release_date date);

CREATE TABLE followers
(id SERIAL,
 follower VARCHAR(20) references users(id),
 followee VARCHAR(20) references users(id));

CREATE TABLE comments
(id SERIAL,
 user_id VARCHAR(20) references users(id),
 podcast_id VARCHAR(20) references podcasts(id),
 comment_blob TEXT);

CREATE TABLE events
(id SERIAL,
 user_id VARCHAR(20) references users(id),
 podcast_id VARCHAR(20) references podcasts(id),
 event event);

CREATE TABLE subscriptions
(id SERIAL,
 user_id VARCHAR(20) references users(id),
 podcast_id VARCHAR(20) references podcasts(id));


