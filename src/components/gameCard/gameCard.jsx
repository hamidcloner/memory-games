import {
    CardContainer,
    CardCol,
    CardImage,
    GameName,
    GameDesc,
    GameDetail,
    GameRank,
    GameStar,
    CardBody,
} from './gameCard.elements';

import GoToGameButton from ''



const GameCard = () => {
    return (
        <CardCol>
            <CardContainer>
                <CardImage></CardImage>
                <CardBody>
                    <GameName></GameName>
                    <GameDesc></GameDesc>
                    <GameDetail>
                        <GameRank></GameRank>
                        <GameStar></GameStar>
                    </GameDetail>
                    <GoToGameButton />
                </CardBody>
            </CardContainer>
        </CardCol>

    )
}


export default GameCard;