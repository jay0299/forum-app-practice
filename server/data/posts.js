import { Post } from '../db/database.js';

export const getAll = async () => {
  const posts = await Post.findAll({ order: [['createdAt', 'desc']] }); // createdAt 열을 기준으로 내림차순 정렬하여 모든 게시글 가져오기
  return posts.map((post) => post.dataValues);
};

export const create = async (title, content) => {
  const result = await Post.create({ title, content, author: 'TESTER' }); // FIXME: auth 기능 구현 후 author 관련 부분 수정
  return result.dataValues;
};
