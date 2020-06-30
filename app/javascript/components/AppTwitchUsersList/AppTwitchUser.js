import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';

class AppTwitchUser extends Component {
    render() {
        return (
            <div>
                <Row className=" row-image-twitch mb-4 mt-2">
                    <Col sm={{span:6, offset:1}}>
                        <a href="www.google.cl"> 
                            <img class="image-clans-home " src='./images/assets/TW-Vistima.png' alt="vistima"/> 
                            <span class="name-clans-home">Vistima</span>
                        </a>
                    </Col>
                    <Col sm={4} className="my-auto">
                        <span class="dot"></span> 100
                    </Col>
                </Row>
            </div>
        );
    }
}

AppTwitchUser.propTypes = {

};

export default AppTwitchUser;