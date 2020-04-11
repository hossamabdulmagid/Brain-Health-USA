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
height:380px;
@media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
      }
    `;
export const LinkOption = styled(Link)`
margin:2px;
padding:1px;
`;
export const DIV = styled.div`
margin:8px;
position: relative;
text-align:center;
`;
export const H1Style = styled.h1`
color: #fff;
padding:32px;
    margin: 0 auto 35px;
    max-width: 800px;
    font-size: 40px;
    font-weight: 400;
    line-height: 50px;
`;
export const BUTTONLINK = styled(Link)`
display: inline-flex;
background-color:#2767A5;
text-align: center;
color:white;
    padding: 0 17px;
    margin-bottom:50px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: 1px solid #dadfe6;
    font-family: "Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 13px;
    transition: opacity .17s ease-in-out;
    &:hover{
        color: blue;
        text-decoration: none;
        background-color:white;
    }

`;
export const DIVV = styled.div`
max-width: 600px;
margin: 0 auto 20px;
background-color: #fff;
border: 1px solid #dadfe6;
border-radius: 4px;
box-shadow: 0 4px 8px 0 rgba(202,217,232,.25);
overflow: hidden;
position: relative;
padding-top:50px
display: grid;
color:black;
grid-template-rows: fit-content(15%) auto fit-content(25%);
padding-bottom:30px;
text-align:left;
`;
export const DIVVW = styled.div`
max-width: 600px;
margin: 0 auto 20px;
background-color: #fff;
border: 1px solid #dadfe6;
border-radius: 4px;
box-shadow: 0 4px 8px 0 rgba(202,217,232,.25);
overflow: hidden;
display: block;
margin-top:350px;
grid-template-rows: fit-content(15%) auto fit-content(25%);
color:black;
padding-bottom:30px;
`;

export const SPAN = styled.span`
text-align:right;
padding:5px;
margin:0auto;
font-size:20px;
padding-top:10px;
color: #4b5459;

`;

export const RapperDiv = styled.div`
text-align:center;
width:200px;
margin:0 auto;
border:1px solid gray;
width:auto;
padding-bottom:30px;


`;

export const Span = styled.span`
pading-top:15px;
color: #4b5459;

`;



export const AnotherDiv = styled.div`
max-width: 600px;
margin: 0 auto 20px;
background-color: #fff;
border: 1px solid #dadfe6;
border-radius: 4px;
box-shadow: 0 4px 8px 0 rgba(202,217,232,.25);
overflow: hidden;
display: block;
margin-top:20px;
grid-template-rows: fit-content(15%) auto fit-content(25%);
color:black;
padding-bottom:30px;
margin-bottom:35px;
`;
