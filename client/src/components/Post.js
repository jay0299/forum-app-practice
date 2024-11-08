import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from './Button.js';
import * as S from './styles/Post.styled.js';

export const Post = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({
    title: '',
    author: '',
    createdAt: '',
    content: '',
  });
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/');
  };

  const handleUpdateButtonClick = () => {
    navigate('/posts', {
      state: { id: id, title: detail.title, content: detail.content },
    });
  };

  const handleDeleteButtonClick = () => {
    axios
      .delete(`http://localhost:5000/posts/${id}`)
      .then(() => {
        alert('게시글을 삭제했습니다.');
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/posts/${id}`)
      .then((res) => {
        const detailData = res.data;
        setDetail({
          title: detailData.title,
          author: detailData.author,
          createdAt: detailData.createdAt.slice(0, 10),
          content: detailData.content,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <S.PostContainer>
      <header>
        <S.Title>{detail.title}</S.Title>
        <S.PostDetail>
          <span>{detail.author}</span>
          <span> | </span>
          <span>{detail.createdAt}</span>
        </S.PostDetail>
      </header>
      <section>
        <p>{detail.content}</p>
      </section>
      <S.ButtonContainer>
        <Button text={'수정'} onClick={handleUpdateButtonClick} />
        <Button text={'삭제'} onClick={handleDeleteButtonClick} />
      </S.ButtonContainer>
      <Button text={'목록으로'} onClick={handleButtonClick} />

      {/* 
      FIXME: 추후에 댓글 기능 구현 후 댓글 섹션 추가
      <section>
        <h2>댓글</h2>
        <p>댓글 내용</p>
      </section> */}
    </S.PostContainer>
  );
};
