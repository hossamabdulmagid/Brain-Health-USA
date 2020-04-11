import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: #295c73;
  border-color: #295c73;
  color:white;
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;
const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
padding: 1px;
height:35px;
font-size: 14px;
letter-spacing: 0.5px;
font-size: 15px;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: 400;
cursor: pointer;
display: flex;
justify-content: center;
margin: 0 auto;
border-radius: 4px;
display: inline-block;
width: 120px;
margin-bottom: 40px;
  ${getButtonStyles}
`;