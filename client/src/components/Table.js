import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from './styles/Table.styled.js';
import { Button } from './Button.js';
import { PageHeader } from './PageHeader.js';

export const Table = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/posts')
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => console.log(err));

    // FIXME: details의 createdAt 포맷을 연월일만 포함되도록 수정
  }, []);

  const handleButtonClick = () => {
    navigate('/posts');
  };

  const handlePostClick = (event) => {
    const targetPostId = event.target.parentElement.firstChild.innerHTML;
    navigate(`/posts/${targetPostId}`);
  };

  return (
    <S.Container>
      <PageHeader text={'게시글 목록'}></PageHeader>
      <S.Table>
        <S.TableHeader>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </S.TableHeader>
        {details.map((detail) => (
          <tr>
            <S.TableData>{detail.id}</S.TableData>
            <S.TableData
              onClick={handlePostClick}
              style={{ cursor: 'pointer' }}
            >
              {detail.title}
            </S.TableData>
            <S.TableData>{detail.author}</S.TableData>
            <S.TableData>{detail.createdAt.slice(0, 10)}</S.TableData>
          </tr>
        ))}
      </S.Table>
      <Button text="글쓰기" onClick={handleButtonClick} />
    </S.Container>
  );
};
