CREATE TABLE favorites
(id SERIAL PRIMARY KEY,
 user_id integer REFERENCES users,
 podcast_id integer REFERENCES podcasts);
