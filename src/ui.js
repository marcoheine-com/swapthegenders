import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 640px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff0f0;
  margin-top: 20px;
  gap: 10px;
`;

export const Label = styled.label`
  margin-bottom: 6px;
`;

export const Textarea = styled.textarea`
  align-self: flex-start;
  width: 100%;
  padding: 4px;
  height: 100px;
`;

export const Button = styled.button`
  align-self: center;
  margin: 30px;
  padding: 10px 30px;
  border: none;
  background-color: ${({ disabled }) => (disabled ? 'lightgrey' : '#ead2ff')};
  color: ${({ disabled }) => (disabled ? 'grey' : 'black')};
  font-size: 20px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

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
