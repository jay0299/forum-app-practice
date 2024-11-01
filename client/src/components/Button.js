import * as S from './styles/Button.styled.js';

export const Button = ({ text }) => {
  const onClick = () => {
    // TODO: 새 글 작성 페이지 전환
  };

  return <S.Button onClick={onClick}>{text}</S.Button>;
};
