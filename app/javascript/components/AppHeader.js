import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './../../assets/stylesheets/header.css'
import { Container, Row, Col, Dropdown, DropdownButton} from 'react-bootstrap';

class AppHeader extends Component {
    render() {
        return (
            <div className="header">
                <Container fluid>
                    <Row>
                        <Col sm={{span: 1, offset: 11,}} className="mt-3">
                            <DropdownButton
                              variant="warning"
                              title="Acceso"
                              id="input-group-dropdown-2"
                            >
                              <Dropdown.Item href="#">Ingreso</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item href="#">Registro</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                    <Row className="mt-2">
                        <Col sm={{span: 3, offset: 8}} className="mt-5">
                            <span className="header-claim"><b>Chile AOE</b> es una comunidad formada por jugadores de Age of Empire con más de 15 años de experiencia, siendo uno de los más antiguos en Chile.</span>
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