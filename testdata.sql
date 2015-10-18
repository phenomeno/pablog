INSERT INTO
  users (username, password, bio, firstname, lastname, avatar_url)
VALUES
  ("pheno", md5("1234"), "There's a fly in my apartment and it won't leave.", "Grace", "Lee", "https://avatars1.githubusercontent.com/u/6502118?v=3&s=460"),
  ("jyp", md5("1234"), "A fulltime baeksu at my jib.", "Stewart", "Park", "https://avatars1.githubusercontent.com/u/388348?v=3&s=400");

INSERT INTO
  posts (title, body, author_id)
VALUES
  ("Test article", "Jypno <3 Phpno",
    (
      SELECT id FROM users WHERE username="pheno"
    )
  ),
  (
    "I love pizza", "Phpno 짱!!",
    (
      SELECT id FROM users WHERE username="jyp"
    )
  );

SELECT *
FROM posts
LEFT JOIN users
ON posts.author_id = users.id;
