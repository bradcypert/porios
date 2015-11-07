INSERT INTO users
(first_name, last_name, email, admin, age, pass)
VALUES ('Admin', 'Last', 'Brad.Cypert@gmail.com', True, 22, 'test');

INSERT INTO podcasts
(name, description, genre, release_date, feed)
VALUES ('Sample Podcast', 'Sample Description', 'arts', CURRENT_TIMESTAMP, 'http://atp.fm/episodes?format=rss');

