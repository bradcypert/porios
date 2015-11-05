CREATE TABLE users
(id SERIAL,
 first_name VARCHAR(30),
 last_name VARCHAR(30),
 email VARCHAR(30),
 admin BOOLEAN,
 last_login TIME,
 is_active BOOLEAN,
 age TINYINT,
 pass VARCHAR(100));
