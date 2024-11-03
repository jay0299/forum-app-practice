import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 300px;
`;

export const Header = styled.h1`
  text-align: left;
  border-bottom: 2px solid black;
  padding-bottom: 12px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
`;

export const Title = styled.input`
  width: 100%;
  margin-bottom: 30px;
  font-size: 18px;
`;

export const Content = styled.textarea`
  width: 100%;
  font-size: 18px;
`;
