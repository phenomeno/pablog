CREATE TABLE posts (id int primary key auto_increment, title varchar(256), body text, written_date datetime default now(), updated_date datetime default now());

