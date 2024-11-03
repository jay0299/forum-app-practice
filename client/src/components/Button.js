import * as S from './styles/Button.styled.js';

export const Button = ({ text, onClick }) => {
  return <S.Button onClick={onClick}>{text}</S.Button>;
};
