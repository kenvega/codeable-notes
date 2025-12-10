import express from "express";
import {
  createPost,
  getPostById,
  updatePost,
  likePost,
  unlikePost,
  getLikeByPostAndUser,
} from "./post-queries.ts";
import { getUserById } from "./user-queries.ts";

const router = express.Router();

// =================================
// POST /posts - crear nuevo post
// =================================
router.post("/", async (req, res) => {
  const userId = req.session.userId;

  if (!userId) {
    res.status(401).send("No estás autenticado para crear un post");
    return;
  }

  const user = await getUserById(Number(userId));

  if (!user) {
    res.status(404).send("Usuario no existe");
    return;
  }

  const { content } = req.body;

  if (!content) {
    res.status(400).send("El campo 'content' es requerido");
    return;
  }

  const newPost = await createPost(userId, content);

  // el API pide que este campo esté presente en la respuesta
  newPost.username = user.username;
  // al igual que pide el likes_count
  // pero siempre se tiene likes_count en 0 al crear un post nuevo
  newPost.likes_count = 0;

  res.status(201).json({ ok: true, data: newPost });
});

// ===============================================
// PATCH /posts/:postId - editar un post existente
// ===============================================
router.patch("/:postId", async (req, res) => {
  const { postId } = req.params;
  const { content } = req.body;

  if (!content) {
    res.status(400).send("El campo 'content' es requerido");
    return;
  }

  const postToUpdate = await getPostById(postId);

  if (!postToUpdate) {
    res.status(404).send(`Post con ID ${postId} no encontrado`);
    return;
  }

  const updatedPost = await updatePost(postId, content);

  if (!updatedPost) {
    res.status(404).send(`Post con ID ${postId} no encontrado`);
    return;
  }

  res.status(200).json({ ok: true, data: updatedPost });
});

// =============================================
// POST /posts/:postId/like - dar like a un post
// =============================================
router.post("/:postId/like", async (req, res) => {
  const { postId } = req.params;
  const userId = req.session.userId;

  if (!userId) {
    res.status(401).send("No estás autenticado para dar like a un post");
    return;
  }

  const post = await getPostById(postId);

  if (!post) {
    res.status(404).send(`Post con ID ${postId} no encontrado`);
    return;
  }

  await likePost(postId, userId);

  // obtener el post actualizado con el nuevo conteo de likes
  const likedPost = await getPostById(postId);

  res.status(200).json({ ok: true, data: likedPost });
});

// =====================================================
// DELETE /posts/:postId/like - eliminar like de un post
// =====================================================
router.delete("/:postId/like", async (req, res) => {
  const { postId } = req.params;
  const userId = req.session.userId;

  if (!userId) {
    res.status(401).send("No estás autenticado para eliminar like de un post");
    return;
  }

  const post = await getPostById(postId);

  if (!post) {
    res.status(404).send(`Post con ID ${postId} no encontrado`);
    return;
  }

  // si el post no tenia like previamente del usuario autenticado retornar 404
  const like = await getLikeByPostAndUser(postId, userId);
  if (!like) {
    res
      .status(404)
      .send(
        `Like de usuario con ID ${userId} en post con ID ${postId} no encontrado`
      );
    return;
  }

  await unlikePost(postId, userId);

  // obtener el post actualizado con el nuevo conteo de likes
  const unlikedPost = await getPostById(postId);

  res.status(200).json({ ok: true, data: unlikedPost });
});

export default router;
