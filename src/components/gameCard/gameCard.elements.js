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
    border-radius : .5rem;
    background-color : #ccc;
    transition : transform .5s ease;
    

    &:hover {
        transform : translateY(-1rem);
        transition : transform .5s ease;    
    }
`;



export const CardBody = styled.div`
    padding : 2rem 1rem;
`;
export const GameName = styled.p`
    text-align : center;
    font-size : 3rem;
    padding : 1rem 0;
`;


export const GameStatus = styled.div`
    display : flex;
    align-items : center;
    justify-content : space-around;
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
    display : flex;
    align-items : center;
    justify-content : space-between;
    margin : 1rem 0;
    font-size : 1.2rem;
`;

export const GameRank = styled.span`
`;

export const GameStar = styled.span`
`;

export const GoToGameButton = styled(Link)`
    display : block;
    margin : 2rem;
    text-align : center;
    padding : .5rem 1rem;
    font-size : 1.5rem;
    border-radius : .5rem;
    background-color : ${({theme : {mainPalette : {bgColor : {bluePalette}}}}) => bluePalette.c};
    cursor : pointer;

`;

