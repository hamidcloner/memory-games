import styled from 'styled-components';


export const TicTacGridContainer = styled.div`
    display : grid;
    border-radius : 1rem;
    grid-template-rows : repeat(3,minmax(10rem,15rem));
    grid-template-columns : repeat(3,minmax(10rem,15rem));
    border : .1rem solid gray;
`;