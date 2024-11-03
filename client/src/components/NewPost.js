import { Button } from './Button.js';
import * as S from './styles/NewPost.styled.js';

export const NewPost = () => {
  return (
    <S.Container>
      <S.Header>게시판 글쓰기</S.Header>
      <S.FormContainer>
        <S.Form>
          <S.Title placeholder="제목을 입력해주세요" />
          <S.Content rows={20} cols={100}>
            hi
          </S.Content>
        </S.Form>
      </S.FormContainer>
      <Button text={'작성'} />
    </S.Container>
  );
};
