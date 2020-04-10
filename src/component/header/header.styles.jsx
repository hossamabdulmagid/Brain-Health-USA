import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const HeaderContainerPage = styled.div`
background-color: #2767a5;
background-image: url(https://widget-cdn.simplepractice.com/assets/images/site-header-429abb4628bfbbbd6073a1476b7c1cf3.png);
background-size: cover;
background-position: center bottom;
padding: 22px 0;
transition: padding .17s ease-in-out;
color: #fff;
justify-content: space-between;
display: block;
text-align: center;
@media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
      }
    `;
export const OptionsContainer = styled.div`
width: 36%;
height: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
@media screen and (max-width: 800px) {
    width: 80%;
  }
`;
export const OptionLink = styled(Link)`
padding: 14px 14px;
cursor: pointer;
display: flex;
color: #fff;
background-color: transparent;
cursor: pointer;
margin:0px auto;
font-size:24px;
&:hover{
      color:white;
      text-decoration:none;
  }
`;
export const LinkOption = styled(Link)`
font-size:13px;
display: flex;
justify-content: flex-end;   
color:white;
position: absolute;
right: 25%;
padding: 20px;
float: right;
margin:2px;
&:hover{
    color:white;
    text-decoration:none;
    }
`;