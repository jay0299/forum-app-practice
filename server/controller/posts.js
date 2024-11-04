import { create, getAll } from '../data/posts.js';

export const getAllPosts = async (req, res, next) => {
  const result = await getAll();
  res.status(200).json(result);
};

export const uploadPost = async (req, res, next) => {
  const { title, content } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'Title is missing!' });
  }
  if (!content) {
    return res.status(400).json({ message: 'Content is missing!' });
  }

  const result = await create(title, content);
  res.status(201).json(result);
};
