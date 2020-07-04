import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../../assets/stylesheets/home.css'
import { Container, Row, Col, Button} from 'react-bootstrap';

class AppHeader extends Component {
    render() {
        return (
            <div className="header">
                <Container fluid>
                    <Row>
                        <Col sm={{span: 1, offset: 11,}} className="mt-3">
                             <Button  variant="warning">Log in</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

AppHeader.propTypes = {

};

export default AppHeader;