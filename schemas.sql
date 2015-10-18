CREATE TABLE users (
  id INT PRIMARY KEY auto_increment,
  username VARCHAR(32),
  password VARCHAR(32),
  bio TEXT,
  firstname VARCHAR(32),
  lastname VARCHAR(32),
  avatar_url VARCHAR(512),
  last_access DATETIME,
  written_date DATETIME DEFAULT NOW(),
  updated_date DATETIME DEFAULT NOW()
);

CREATE TABLE posts (
  id INT PRIMARY KEY auto_increment,
  title VARCHAR(256),
  body TEXT,
  author_id INT,
  written_date DATETIME DEFAULT NOW(),
  updated_date DATETIME DEFAULT NOW(),
  FOREIGN KEY (author_id) REFERENCES users(id)
);
