import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card, Row } from "react-bootstrap";

class AppTwitch extends Component {
    render() {
        return (
            <div>
                <Card className="home-cards">
                    <Card.Header className="home-card-headers">
                        <i className="fab fa-twitch"></i> Twitch
                    </Card.Header>
                    <Card className="home-card-bodies">
                        <Row className=" row-image-twitch mb-4 mt-2 mx-auto">
                        <img className="image-twitch-index" src={require('./../../assets/images/TW-Vistima.png')} alt="vistima"/>	        
                        </Row>
                        <div className="twitch-name-profile"> 
                            <h5>Vistima</h5> 
                        </div>
                        
                    </Card>
                </Card>
            </div>
        );
    }
}

AppTwitch.propTypes = {

};

export default AppTwitch;