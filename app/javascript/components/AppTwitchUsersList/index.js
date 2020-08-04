import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTwitches } from './../../actions/fetchTwitches';
import { getTwitches } from './../../selectors/twitches';
import { Card, Container } from "react-bootstrap";
import AppTwitchUser from './AppTwitchUser';
import './../../../assets/stylesheets/home.css';

class AppTwitchUsersList extends Component {

    componentDidMount() {
        this.props.fetchTwitches();
    }

    renderBody = (twitches) => {
        return (
            <div>
                 <Card className="home-cards">
                    <Card.Header className="home-card-headers">
                    <i className="fas fa-headset"></i> Streamers
                    </Card.Header>
                </Card>
                <Card className="home-cards border-card-home mt-3">
                    <Card className="home-card-twitch scroll-box">
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

export default withRouter(connect(mapStateToProps, { fetchTwitches })(AppTwitchUsersList))

