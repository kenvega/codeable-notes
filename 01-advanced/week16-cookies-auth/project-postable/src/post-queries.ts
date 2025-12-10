import { query } from "./index.ts";

export const getAllPosts = async () => {
  const result = await query(
    `SELECT posts.id, posts.content, posts.created_at, posts.updated_at, users.username, COUNT(likes.id) AS likes_count
     FROM posts
     LEFT JOIN likes ON posts.id = likes.post_id
     LEFT JOIN users ON posts.user_id = users.id
     GROUP BY posts.id, users.id
     ORDER BY posts.id`
  );

  return result.rows;
};

export const getPaginatedPosts = async (page: number, limit: number) => {
  const offset = (page - 1) * limit;
  const result = await query(
    `SELECT posts.id, posts.content, posts.created_at, posts.updated_at, users.username, COUNT(likes.id) AS likes_count
     FROM posts
     LEFT JOIN likes ON posts.id = likes.post_id
     LEFT JOIN users ON posts.user_id = users.id
     GROUP BY posts.id, users.id
     ORDER BY posts.id
     LIMIT $1 OFFSET $2`,
    [limit, offset]
  );

  return result.rows;
};

export const getUserPosts = async (userId: string) => {
  const result = await query(
    `SELECT posts.id, posts.content, posts.created_at, posts.updated_at, COUNT(likes.id) AS likes_count
     FROM posts
     LEFT JOIN likes ON posts.id = likes.post_id
     WHERE posts.user_id = $1
     GROUP BY posts.id
     ORDER BY posts.id`,
    [userId]
  );

  return result.rows;
};

export const createPost = async (userId: string, content: string) => {
  const result = await query(
    "INSERT INTO posts (user_id, content) VALUES ($1, $2) RETURNING *",
    [userId, content]
  );

  return result.rows[0];
};

export const getPostById = async (postId: string) => {
  const result = await query(
    `SELECT posts.id, posts.content, posts.created_at, posts.updated_at, users.username, COUNT(likes.id) AS likes_count
     FROM posts
     LEFT JOIN likes ON posts.id = likes.post_id
     LEFT JOIN users ON posts.user_id = users.id
     WHERE posts.id = $1
     GROUP BY posts.id, users.id`,
    [postId]
  );

  return result.rows[0];
};

export const updatePost = async (postId: string, content: string) => {
  const result = await query(
    "UPDATE posts SET content = $1 WHERE id = $2 RETURNING *",
    [content, postId]
  );

  return result.rows[0];
};

export const likePost = async (postId: string, userId: string) => {
  const result = await query(
    "INSERT INTO likes (post_id, user_id) VALUES ($1, $2) RETURNING *",
    [postId, userId]
  );

  return result.rows[0];
};

export const unlikePost = async (postId: string, userId: string) => {
  const result = await query(
    "DELETE FROM likes WHERE post_id = $1 AND user_id = $2 RETURNING *",
    [postId, userId]
  );

  return result.rows[0];
};

export const getLikeByPostAndUser = async (postId: string, userId: string) => {
  const result = await query(
    "SELECT * FROM likes WHERE post_id = $1 AND user_id = $2",
    [postId, userId]
  );

  return result.rows[0];
};
