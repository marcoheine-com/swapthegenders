import styled from 'styled-components';

export const Main = styled.main`
  background-color: #f6f0ff;

  a {
    color: black;
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Header = styled.header`
  align-self: center;
  margin-bottom: 30px;
`;

export const Headline = styled.h1`
  font-size: 36px;
  text-align: center;
`;

export const Form = styled.form`
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
  width: 100%;
  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Fieldset = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 20px;
  margin-bottom: 6px;
`;

export const Textarea = styled.textarea`
  align-self: flex-start;
  border: 2px solid white;
  border-radius: 10px;
  box-shadow: rgb(217, 217, 217) 2px 2px 12px;
  height: 100px;
  padding: 4px;
  width: 100%;

  &:focus {
    outline: none;
    border: 2px solid hotpink;
  }

  @media (min-width: 1200px) {
    width: 400px;
    height: 200px;
  }
`;

export const Button = styled.button`
  align-self: center;
  background-color: ${({ disabled }) => (disabled ? 'lightgrey' : 'hotpink')};
  border: none;
  color: ${({ disabled }) => (disabled ? 'grey' : 'black')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-size: 20px;
  margin: 30px;
  padding: 10px 30px;

  &:hover {
    ${({ disabled }) =>
      !disabled &&
      `
    background-image: linear-gradient(
      to right,
      #e7484f,
      #e7484f 16.65%,
      #f68b1d 16.65%,
      #f68b1d 33.3%,
      #fced00 33.3%,
      #fced00 49.95%,
      #009e4f 49.95%,
      #009e4f 66.6%,
      #00aac3 66.6%,
      #00aac3 83.25%,
      #732982 83.25%,
      #732982 100%,
      #e7484f 100%
    );
    animation: slidebg 2s linear infinite;
    
    `}
  }

  @keyframes slidebg {
    to {
      background-position: 20vw;
    }
  }
`;

export const Paragraph = styled.p`
  align-self: center;
  margin-bottom: 100px;
  max-width: 400px;
  text-align: center;
`;

export const Link = styled.a`
  align-items: center;
  background-color: #fff0f0;
  border: 4px dashed #92b1cc;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  padding: 20px;
`;

export const Footer = styled.footer`
  background-image: linear-gradient(to bottom, #f6f0ff, #fff);
  display: flex;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style-type: none;
  margin: 20px;
  padding: 0;
`;
