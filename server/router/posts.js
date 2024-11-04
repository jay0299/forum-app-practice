import express from 'express';
import * as postsRepository from '../controller/posts.js';
const router = express.Router();

// GET /posts
router.get('/', postsRepository.getAllPosts);
// POST /posts
router.post('/', postsRepository.uploadPost);

export default router;
