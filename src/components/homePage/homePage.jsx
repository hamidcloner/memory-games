import { Container,Row } from '../../globalStyle';
import { HomePageWrapper } from './homePage.elements';
import GameCard from '../gameCard/gameCard';
import GameCardDetail from '../gameCard/GameCardDetail';






const HomePage = () => {
    return (
        <HomePageWrapper>
            <Container>
                <Row>
                {GameCardDetail && GameCardDetail.map((game) => (
                    <GameCard key={game.id} 

                              title={game.gameName} 
                              
                              url={game.url} 
                              rank={game.gameRank} 
                              star={game.gameStar}/> 
                ))}
                </Row>
             
            </Container>
        </HomePageWrapper>
        
    )
}

export default HomePage;




