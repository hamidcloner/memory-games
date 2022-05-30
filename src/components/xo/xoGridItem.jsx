import {
    XOGridItemWrapper,
} from './xoGridItem.elements';

const XOGridItem = ({rowNum,colNum}) => {
    return (
        <XOGridItemWrapper>
            {rowNum+''+colNum}
            
        </XOGridItemWrapper>
    )
}

export default XOGridItem;