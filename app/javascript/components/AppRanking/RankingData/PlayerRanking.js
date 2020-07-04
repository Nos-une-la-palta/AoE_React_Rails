import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import './../../../../assets/stylesheets/ranking.css';
import ww from './../../../../assets/images/ww.png';
import mundial from './../../../../assets/images/mundial.svg';


class PlayerRanking extends Component {

    renderWorldRanking = ({rank})  => (
        <div>
            <img src={mundial} className="ww-rank-logo"/> <span>Rank: {rank}  </span>
        </div>
    );
  
    render() {
        const streak = this.props.streak
        return (
            <div>
                <Container fluid>
                    <Row className="align-middle">
                        <Col sm={5} className="streak-padding-off player-ranking-style-data">
                            Racha: 
                            <i className={"arrow " + (streak >= 0 ? "up" : "down")}></i>
                            <span style={{color: streak >= 0 ? "rgb(31, 239, 52)" : "rgb(255, 35, 43)" }} >{Math.abs(streak)}</span>
                        </Col>

                        <Col sm={6} className="player-ranking-style-data">
                            { this.props.country === "CL" ?
                                this.renderWorldRanking(this.props) : "" }
                        </Col>
                    </Row>
                </Container>
            </div>
            );
        }
    }

export default PlayerRanking;
