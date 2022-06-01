import styled from 'styled-components';


export const XOGridItemWrapper = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;   

    // ==== Glassmorphism Effect =====
    background: rgba(255, 255, 255, 0.23);
    border-radius : ${({theme : {xoGameStyles : {properties}}}) => properties.borderRadius};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(13px);
    -webkit-backdrop-filter: blur(5.1px);
    border: 1px solid rgba(255, 255, 255, 0.44);




`;