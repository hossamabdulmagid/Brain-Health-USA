import styled from 'styled-components';
import { Link } from 'react-router-dom'
export const H3Syled = styled.h3`
    position: relative;
    color: #13191c;
    text-align: center;
    margin: 15px 0 40px;
    font-size: 24px;
    font-weight: 600;
`;
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

export const ContainerContentPage = styled.div`
    width: 1000px;
    background: #FFFFFF;
    box-shadow: 0 4px 8px 0 rgba(202,217,232,.25);
    border-radius: 4px;
    margin: 56px auto;
    height: 500px;
    padding-top:10px;
    
`;
export const ALIGNLIST = styled.div`
    width: 70%;
    height: 36px;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
    text-align: center;
    align-items:center bottom; 
`;
export const ULlist = styled.ul`
list-style: none;
margin: 0px;
display:flex;
padding-top: 3px;
border-bottom: none;
text-align: center;


`;
export const LISTYLE = styled.li`
align-items: center;
cursor: pointer;
justify-content:space-between;
margin-right: 23px;

`;

export const LinkOption = styled(Link)`
display: block;
padding: 0 7px 5px;
font-size: 14px;
text-decoration: none;
border-bottom: 2px solid transparent;
transition: border-color .25s ease-in-out;
&:hover{
    color:black;
}
margin:0px;
`;
export const Phargraph = styled.p`
margin: 10px;
text-align: center;

`;