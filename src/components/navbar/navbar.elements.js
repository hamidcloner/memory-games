import styled from 'styled-components';
import { Container,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export const NavbarWrapper = styled(Container)`
    // border : ${({theme : {defaultStyles}}) => defaultStyles.border};
    position : fixed;
    top : .5rem;
    height : 5rem;
    direction : rtl;
`;

export const GoToHomePage = styled(Link)`
    width : 12rem;
    display : block !important;
    font-size : 1.5rem;
    margin-right : auto;
    margin-top : .7rem;
`;
export const GoToGameSettings = styled(Button)`
    width : 12rem;
    font-size : 1.5rem;
    margin-left : auto;
    margin-top : .7rem;
`;

