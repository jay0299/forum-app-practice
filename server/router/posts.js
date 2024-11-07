import express from 'express';
import * as postsRepository from '../controller/posts.js';
const router = express.Router();

// GET /posts
router.get('/', postsRepository.getAllPosts);
// POST /posts
router.post('/', postsRepository.uploadPost);
// GET /posts/:id
router.get('/:id', postsRepository.getPostDetail);

export default router;
