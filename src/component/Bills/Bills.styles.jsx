import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerPageColor = styled.div`
display: flex;
min-height: 50vh;
flex-direction: column;
overflow-x: visible;
font-size: 14px;
line-height: 22px;
color: #4b5459;
background: #f7f9fa;
`;
export const H3Syled = styled.h3`
    position: relative;

    color: #13191c;
    text-align: center;
    margin: 15px 0 40px;
    font-size: 24px;
    font-weight: 600;

`;


export const ContainerContentPage = styled.div`
    width: 1000px;
    background: #FFFFFF;
    box-shadow: 0 4px 8px 0 rgba(202,217,232,.25);
    border-radius: 4px;
    margin: 56px auto;
    height: 650px;
    padding-top:10px;

`;
export const Phargraph = styled.p`
margin: 1px;
text-align: center;
background-color:#F7F9FA;
width:100%;
font-size: 17px;
    color: #4b5459;

`;
export const H4Style = styled.h4`
padding-top: 5px;
padding-bottom: 6px;
font-weight: 400;
line-height: 23px;
margin-bottom: 15px;
margin:5px;
margin-left:4%;
`;



export const DivStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fbfbfc;
    padding: 15px;
    text-align: center;
    margin: 0 -55px 35px;



`;
export const Table = styled.table`
text-align:;
font-family: arial, sans-serif;
border-collapse: collapse;
width: 90%;
margin:20px;
`;
export const TH = styled.td`
font-family: arial, sans-serif;
padding:2px;
text-align: right;
`;


export const TR = styled.tr`
border-bottom: 1px solid darkgrey;
padding:2px;
`;
export const TD = styled.td`
font-family: arial, sans-serif;
padding:2%;
text-align: right;
`;
export const LinkOption = styled(Link)`
margin:15px;
`;
export const Container = styled.div`
text-align:center;
width:100%;
color:black;
background-color:#F7F7F9;
height:50px;
padding:12px;
`;


export const DivRapperTable = styled.div`
margin:8px;
text-align:left;
border: 1px solid #dadfe6;
    border-radius: 4px;
    margin-bottom: 25px;
    height:60px;
    width:100%;
    padding:5px;
`;
export const HStyle = styled.h4`
margin:9px;

`;