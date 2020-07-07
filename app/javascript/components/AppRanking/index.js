import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlayers } from './../../actions/fetchPlayers';
import { getPlayers, getChileanPlayers } from './../../selectors/players';
import PropTypes from 'prop-types';
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import {Card, Row, Col } from "react-bootstrap";
import RankingData from "./RankingData";
import './../../../assets/stylesheets/home.css';

class AppRanking extends Component {
    constructor() {
      super();
      this.state = { checked: true };
      this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchPlayers();
      }
  
    handleChange(checked) {
      this.setState({ checked });   
    }

    renderBody = players => (
        <div className="d-flex flex-row-reverse mb-5">
            <Card className="home-cards">
                <Card.Header className="home-card-headers ">
                   
                    <i className="fas fa-trophy align-middle"></i>
                    <span className="ranking-header-title pr-5 align-middle">Ranking</span>  
    
                    <BootstrapSwitchButton
                        checked={this.state.checked}
                        onChange={this.handleChange}
                        onlabel='Chile'
                        offlabel='Mundial'
                        size="sm"
                        width={78}
                        height={23}
                        onstyle="outline-warning"
                        offstyle="outline-primary"
                        className="align-middle"
                    /> 

                </Card.Header>
                <Card className="home-card-ranking">
                    <Row className=" mt-2 mb-3">
                        <RankingData 
                            players= {players}
                        />
                    </Row>
                </Card>
            </Card>
        </div>
    );
  
    render() {
        return (
            <div>
                { this.state.checked ?
                     this.renderBody(this.props.chileanPlayers) : this.renderBody(this.props.players) }
            </div>
            );
        }
    }


AppRanking.propTypes = {
    fetchPlayers: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    players: getPlayers(state),
    chileanPlayers: getChileanPlayers(state)
  });

export default withRouter(connect(mapStateToProps, { fetchPlayers })(AppRanking));
