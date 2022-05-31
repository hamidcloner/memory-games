import {
    XOGridItemWrapper,
} from './xoGridItem.elements';

const XOGridItem = ({rowNum,colNum,id}) => {
    return (
        <XOGridItemWrapper id={id}>
            {rowNum+''+colNum}
            
        </XOGridItemWrapper>
    )
}

export default XOGridItem;