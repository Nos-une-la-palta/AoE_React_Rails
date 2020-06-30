import React, { Component } from 'react';
import ReactCountryFlag from "react-country-flag"
import { Row, Container, Col } from 'react-bootstrap';
import './../../../../assets/stylesheets/ranking.css';


class PlayerName extends Component {

    renderCountry = ({country}) => (
        <span className="player-ranking-style" >
            <ReactCountryFlag svg
                countryCode={country}
                className="country-flag"  
            />
        </span>
    );
  
    render() {
        const name = this.props.name
        return (
            <div>
                <Container fluid>
                    <Row clasnName="align-middle">
                        <Col sm={12} className="streak-padding-off">
                            { this.props.country === "CL" ? "" :
                                <span className="mr-1">
                                    {this.renderCountry(this.props) }
                                </span> }
                            <span className="player-name-style">{name}</span>
                        </Col>
                    </Row>
                </Container>
            </div>
            );
        }
    }

export default PlayerName;