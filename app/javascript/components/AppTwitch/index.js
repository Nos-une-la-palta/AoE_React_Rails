import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTwitches } from './../../actions/fetchTwitches';
import { getTwitches } from './../../selectors/twitches';
import { Card, Row } from "react-bootstrap";
import TwitchAppData from './TwitchAppData';
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
                        <i className="fab fa-twitch"></i> Twitch
                    </Card.Header>
                    <Card className="home-card-ranking">
                        <Row className=" mt-2 mb-3">
                            <TwitchAppData twitches={twitches}/>
                        </Row>
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