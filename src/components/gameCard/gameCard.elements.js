import styled from "styled-components";
import { Link } from 'react-router-dom';


export const CardCol = styled.div`
    flex-basis : 20rem;
    flex-grow : 0;
    flex-shrink : 0; 
    padding-right : 1rem;
    padding-left : 1rem;
    padding-top : 1rem;
    padding-bottom : 1rem;
`;
export const CardContainer = styled.div`
    border : 1px solid gray;
    border-radius : .5rem;
    height : 30rem; 
    background-color : #ccc;
`;

export const CardImage = styled.div`
    height : 15rem;
 
`;


export const CardBody = styled.div`
    padding : 2rem 1rem;
    border : ${({theme : {defaultStyles}}) => defaultStyles.border}
    

`;
export const GameName = styled.p`
    text-align : center;
    font-size : 3rem;
    padding : 1rem 0;
        border : ${({theme : {defaultStyles}}) => defaultStyles.border}
`;


export const GameStatus = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-around;
    border : ${({theme : {defaultStyles}}) => defaultStyles.border}
`;
export const Like = styled.div`
    width : 4rem;
    height : 4rem;
    border-radius : 50%;
    text-align : center;
    line-height : 5.8rem;
    background-color : ${({theme : {gameStatusPalette}}) => gameStatusPalette.like};
`;
export const Favorite = styled.div`
    width : 4rem;
    height : 4rem;
    border-radius : 50%;
    text-align : center;
    line-height : 5.8rem;
    background-color : ${({theme : {gameStatusPalette}}) => gameStatusPalette.favorite};
`;
export const DisLike = styled.div`
    width : 4rem;
    height : 4rem;
    border-radius : 50%;
    text-align : center;
    line-height : 5.8rem;
    background-color : ${({theme : {gameStatusPalette}}) => gameStatusPalette.disLike};
`;

export const GameDetail = styled.div`
    border : ${({theme : {defaultStyles}}) => defaultStyles.border};
    padding : 0 .9rem;
    margin : 1rem 0;
`;

export const GameRank = styled.span`
`;

export const GameStar = styled.span`
`;

export const GoToGameButton = styled(Link)`
    border : ${({theme : {defaultStyles}}) => defaultStyles.border}
`;

