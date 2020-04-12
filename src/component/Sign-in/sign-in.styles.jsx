import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  height:600px;
  flex-direction: column;
  text-align:center;
  align-item:center;
`;
export const SignInTitle = styled.h4`
  margin: 10px 0;
`;
export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  `;
export const LinkOption = styled(Link)`
margin:15px;
padding-bottom:30px;
padding:50px;
`;
export const ContainerPageColor = styled.div`
margin-top:20px;
margin-bottom:20px;
display: flex;
min-height: 50vh;
flex-direction: column;
overflow-x: visible;
font-size: 14px;
line-height: 22px;
background: #FFFFFF;
width: 1100px;
padding:10px;
`;