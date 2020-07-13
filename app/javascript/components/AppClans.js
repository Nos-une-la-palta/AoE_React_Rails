import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, Row } from "react-bootstrap";

class AppClans extends Component {
    render() {
        return (
            <div className="d-flex flex-row-reverse">
                 <Card className="home-cards">
                    <Card.Header className="home-card-headers">
                    <i className="fas fa-fist-raised"></i> Clanes Asociados
                    </Card.Header>
                    <Card className="home-card-clans-body">
                        <Row className="mb-4 mt-2">
                            <a href="www.google.cl"> 
                                <img className="image-clans-home " src={require('./../../assets/images/losmejores.jpeg')} alt="vistima"/> 
                                <span className="name-clans-home">Destructors</span>
                            </a>
                        </Row>
                    </Card>
                </Card>
            </div>
        );
    }
}

AppClans.propTypes = {

};

export default AppClans;