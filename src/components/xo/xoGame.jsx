import { GameWrapper } from "../../globalStyle";
import {
    TicTacGridContainer,
} from './xoGame.elements';
import XOGridItem from './xoGridItem';

const XOGame = () => {
 
    const drawGirdItem = () => {
        let keyID = 0;
        let hasBorderRadius = ["j"];
        let gridItemsArray = [];
        for(let r=1;r<=3;r++){
            for(let c=1;c<=3;c++){
                
                gridItemsArray.push(<XOGridItem 
                                        key={keyID} 
                                        rowNum={r} 
                                        colNum={c} 
                                        id={keyID} 
                                        />);
                keyID++;
            }
        }
        return gridItemsArray;
    }
    return (
        <GameWrapper> 
            <TicTacGridContainer>
                {drawGirdItem()}
            </TicTacGridContainer>
        </GameWrapper>
    )
}


export default XOGame;