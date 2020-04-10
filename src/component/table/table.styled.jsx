import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Table = styled.table`
text-align:;
font-family: arial, sans-serif;
border-collapse: collapse;
width: 95%;
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