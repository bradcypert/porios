CREATE TABLE users
(id SERIAL PRIMARY KEY,
 first_name VARCHAR(30),
 last_name VARCHAR(30),
 email VARCHAR(30),
 admin BOOLEAN,
 last_login TIME,
 is_active BOOLEAN,
 age SMALLINT,
 pass VARCHAR(100));

CREATE UNIQUE INDEX lower_email ON users ((lower(email)));
