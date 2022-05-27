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
                    <GameCard key={game.id} img={game.gameImg} title={game.gameName} desc={game.gameDesc} /> 
                ))}
                </Row>
             
            </Container>
        </HomePageWrapper>
        
    )
}

export default HomePage;




