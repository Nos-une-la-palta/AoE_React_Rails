import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTwitches } from './../../actions/fetchTwitches';
import { getTwitches } from './../../selectors/twitches';
import { Card, Row, Container } from "react-bootstrap";
import AppTwitchVideo from '../AppTwitchVideo';
import AppTwitchUser from '../AppTwitchUsersList/AppTwitchUser';
import './../../../assets/stylesheets/home.css';


class AppTwitch extends Component {

    componentDidMount() {
        this.props.fetchTwitches();
    }

    renderBody = (twitches) => {
        return (
            <div>
                <Card className="home-cards">
                    <Card.Header className="home-card-headers">
                        <i className="fab fa-twitch icon-twitch-header-home"></i> Twitch
                    </Card.Header>
                </Card>
                <Container fluid className="twitch-home-video-container mt-3 mb-2">
                    <AppTwitchVideo height="220" width="340" className="video"/>  
                </Container>
                <Card className="home-cards border-twitch-card-home">
                    <Card className="home-card-twitch twitch-home-scroll-box">
                        <Container fluid className="mt-1 mb-1 no-padding-right">
                            <AppTwitchUser twitches={twitches}/>
                        </Container>
                    </Card>
                </Card>
            </div>
        )
    };
  
    render() {
        return (
            <div>
                {this.renderBody(this.props.twitches)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    twitches: getTwitches(state)
  });

export default withRouter(connect(mapStateToProps, { fetchTwitches })(AppTwitch))