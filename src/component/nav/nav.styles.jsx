import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const NavContainer = styled.nav`
justify-content: block;   
display: block;
background-color:white;
padding: 1px 0;
transition: padding .17s ease-in-out;
justify-content: space-between;
text-align: center;
`;
export const ULlist = styled.ul`
list-style: none;
margin: 2px;
display:flex;
padding-top: 3px;
border-bottom: none;
text-lign: center;
`;
export const LISTYLE = styled.li`
align-items: center;
cursor: pointer;
justify-content:space-between;
margin-right: 20px;
`;
export const ALIGNLIST = styled.div`
width: 43%;
height: 60%;
display: flex;
align-items: center;
justify-content: flex-end;
`;
export const LinkOption = styled(Link)`
display: block;
padding: 0 7px 5px;
margin-bottom: -1px;
font-size: 14px;
text-decoration: none;
border-bottom: 2px solid transparent;
transition: border-color .25s ease-in-out;
`;