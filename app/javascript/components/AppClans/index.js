import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchClans } from './../../actions/fetchClans';
import { getClans } from './../../selectors/clans';
import ClanData from './ClanData';
import {Card, Row } from "react-bootstrap";
import './../../../assets/stylesheets/home.css';

class AppClans extends Component {

    componentDidMount() {
        this.props.fetchClans();
    } 

    renderBody = clans => {
        return (
            <div className="d-flex align-items-end flex-column">
                 <Card className="home-cards">
                    <Card.Header className="home-card-headers">
                    <i className="fas fa-fist-raised"></i> Clanes Asociados
                    </Card.Header>
                </Card>
                <Card className="home-cards mt-3 border-card-home">
                    <Card className="home-card-clans-body">
                        <Row>
                            <ClanData clans={clans}/>
                        </Row>
                    </Card>
                </Card>
            </div>
        );
    }

    render() {
        return(
            <div>
                {this.renderBody(this.props.clans)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    clans: getClans(state)
  });

export default withRouter(connect(mapStateToProps, { fetchClans })(AppClans));