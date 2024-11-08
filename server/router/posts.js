import express from 'express';
import * as postsRepository from '../controller/posts.js';
const router = express.Router();

// GET /posts
router.get('/', postsRepository.getAllPosts);
// POST /posts
router.post('/', postsRepository.uploadPost);
// GET /posts/:id
router.get('/:id', postsRepository.getPostDetail);
// UPDATE /posts/:id
router.put('/:id', postsRepository.editPost);
// DELETE /posts/:id
router.delete('/:id', postsRepository.removePost);

export default router;
