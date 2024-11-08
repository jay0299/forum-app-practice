import axios from 'axios';
import { Button } from './Button.js';
import { PageHeader } from './PageHeader.js';
import * as S from './styles/NewPost.styled.js';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const NewPost = () => {
  const location = useLocation();
  const [updated, setUpdated] = useState(false);
  const [postDetails, setPostDetails] = useState({
    id: '',
    title: '',
    content: '',
    // author: '', FIXME: auth 기능 구현 후 주석 해제
  });
  const navigate = useNavigate();

  const onChange = (event) => {
    const { value, name } = event.target;
    setPostDetails({
      ...postDetails,
      [name]: value,
    });
  };

  const handleButtonClick = () => {
    if (updated) {
      axios
        .put(`http://localhost:5000/posts/${postDetails.id}`, {
          title: postDetails.title,
          content: postDetails.content,
        })
        .then(() => {
          alert('게시글을 수정했습니다.');
          navigate('/');
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post(
          'http://localhost:5000/posts',
          {
            title: postDetails.title,
            content: postDetails.content,
            // FIXME: auth 기능 구현 후 author 정보 추가
          },
          {
            headers: {
              'Content-type': 'application/json',
              Accept: 'application/json',
            },
          }
        )
        .then(() => {
          alert('게시글을 작성했습니다.');
          navigate('/');
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    if (location.state) {
      setPostDetails({
        id: location.state.id,
        title: location.state.title,
        content: location.state.content,
      });
      setUpdated(true);
    }
  }, [location.state]);

  return (
    <S.Container>
      <PageHeader text={'게시판 글쓰기'}></PageHeader>
      <S.FormContainer>
        <S.Form>
          <S.Title
            type="text"
            name="title"
            value={postDetails.title}
            onChange={onChange}
            placeholder="제목을 입력해주세요"
          />
          <S.Content
            rows={20}
            cols={100}
            name="content"
            value={postDetails.content}
            onChange={onChange}
            placeholder="내용을 입력해주세요"
          ></S.Content>
        </S.Form>
      </S.FormContainer>
      {updated ? (
        <Button text={'수정'} onClick={handleButtonClick} />
      ) : (
        <Button text={'작성'} onClick={handleButtonClick} />
      )}
    </S.Container>
  );
};
