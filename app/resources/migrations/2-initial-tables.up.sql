CREATE TYPE genre AS ENUM 
('arts','government','science and medicine', 'business', 'health', 'culture', 'comedy', 'family', 'sports', 'education', 'music', 'technology', 'hobbies', 'religion', 'tv');

CREATE TYPE event AS ENUM
('subscribed', 'commented');

CREATE TABLE podcasts
(id VARCHAR(20) PRIMARY KEY,
 name VARCHAR(100),
 description TEXT,
 genre genre,
 release_date date);

CREATE TABLE followers
(id VARCHAR(20) PRIMARY KEY,
 follower VARCHAR(20) references users(id),
 followee VARCHAR(20) references users(id));

CREATE TABLE comments
(id VARCHAR(20) PRIMARY KEY,
 user_id VARCHAR(20) references users(id),
 podcast_id VARCHAR(20) references podcasts(id),
 comment_blob TEXT);

CREATE TABLE events
(id VARCHAR(20) PRIMARY KEY,
 user_id VARCHAR(20) references users(id),
 podcast_id VARCHAR(20) references podcasts(id),
 event event);

CREATE TABLE subscriptions
(id VARCHAR(20) PRIMARY KEY,
 user_id VARCHAR(20) references users(id),
 podcast_id VARCHAR(20) references podcasts(id));


