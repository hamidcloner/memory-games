import styled from 'styled-components';




export const XOBeadContainer = styled.div`
    width : 10rem;
    height : 10rem;
    border : 2rem solid ${({theme : {xoGameStyles : {xoGridItem : {oColor}}}}) => oColor}; 
    box-shadow : 1px 1px 20px 1px ${({theme : {xoGameStyles : {xoGridItem : {oColor}}}}) => oColor}; 
    border-radius : 50%;
`;