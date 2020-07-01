import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Card } from "react-bootstrap";
import AppTwitchUser from './AppTwitchUser';

class AppTwitchUsersList extends Component {
    render() {
        return (
            <div>
                 <Card className="home-cards">
                    <Card.Header className="home-card-headers">
                    <i className="fas fa-headset"></i> Streamers
                    </Card.Header>
                    <Card className="twitch-card-body">
                      <AppTwitchUser/>
                      <AppTwitchUser/>
                      <AppTwitchUser/>
                    </Card>
                </Card>
                
            </div>
        );
    }
}

AppTwitchUsersList.propTypes = {

};

export default AppTwitchUsersList;