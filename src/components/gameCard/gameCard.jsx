import {
    CardContainer,
    CardCol,
    GameName,
    GameStatus,
    GameDetail,
    GameRank,
    GameStar,
    CardBody,
    GoToGameButton,
    Like,
    DisLike,
    Favorite,
} from './gameCard.elements';
import {AiOutlineLike,AiOutlineDislike,AiOutlineStar} from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';




const GameCard = ({title,url,rank,star}) => {
    return (
        <IconContext.Provider value={{size : '2.5rem',color : '#ccc'}}>
            <CardCol>
                <CardContainer>
                    <GameName>{title}</GameName>
                    <CardBody>
                        
                        <GameStatus>
                            <Like><AiOutlineLike /></Like>
                            <Favorite><AiOutlineStar /></Favorite>
                            <DisLike><AiOutlineDislike /></DisLike>
                        </GameStatus>
                        <GameDetail>
                            <GameRank>رتبه بازی : {rank}</GameRank>
                            <GameStar>تعداد ستاره : {star}</GameStar>
                        </GameDetail>
                        <GoToGameButton to={url}>بزن بریم!</GoToGameButton>
                    </CardBody>
                </CardContainer>
            </CardCol>
        </IconContext.Provider>

    )
}


export default GameCard;