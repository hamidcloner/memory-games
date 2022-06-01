import { 
    NavbarWrapper,
    GoToHomePage,
    GoToGameSettings,
} from './navbar.elements';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import {Row,Col,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navbar(){
    return (
        <NavbarWrapper>
            <Row className="h-100">
                <Col xs={6} md={{span : 4,offset : 1}}>
                    <GoToGameSettings className="btn btn-success">تنظیمات</GoToGameSettings>
                    
                </Col>
                <Col xs={6} md={{span : 4,offset : 2}}>
                    <GoToHomePage to='/' className='btn btn-danger'>منوی بازی ها</GoToHomePage>
                </Col>
            </Row>

        </NavbarWrapper>
    )
}


export default Navbar;