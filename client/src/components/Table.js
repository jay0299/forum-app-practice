import { useEffect, useState } from 'react';
import * as S from './styles/Table.styled.js';

export const Table = () => {
  const [details, setDetails] = useState([
    // FIXME: 빈 배열로 수정
    {
      postId: 1,
      title: '테스트 포스트1',
      author: '개발자1',
      date: '2024.11.01.',
    },
    {
      postId: 2,
      title: '테스트 포스트22',
      author: '개발자2',
      date: '2024.11.01.',
    },
    {
      postId: 3,
      title: '테스트 포스트333',
      author: '개발자3',
      date: '2024.11.01.',
    },
  ]);

  useEffect(() => {
    // TODO: API Request (GET /api/posts)
    // fetch('API url').then((res)=> setDetails((current) => res.data)).catch(error=> console.log(error));
  }, []);

  return (
    <S.Table>
      <S.TableHeader>
        <th>번호</th>
        <th>제목</th>
        <th>작성자</th>
        <th>작성일</th>
      </S.TableHeader>
      {details.map((detail) => (
        <tr>
          <S.TableData>{detail.postId}</S.TableData>
          <S.TableData>{detail.title}</S.TableData>
          <S.TableData>{detail.author}</S.TableData>
          <S.TableData>{detail.date}</S.TableData>
        </tr>
      ))}
    </S.Table>
  );
};
