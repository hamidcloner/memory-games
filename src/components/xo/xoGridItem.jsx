import {
    XOGridItemWrapper,
} from './xoGridItem.elements';
import XOBead from './bead';

const XOGridItem = ({rowNum,colNum,id}) => {
    return (
        <XOGridItemWrapper id={id}>
            <XOBead whichBead="o" />
            
        </XOGridItemWrapper>
    )
}

export default XOGridItem;