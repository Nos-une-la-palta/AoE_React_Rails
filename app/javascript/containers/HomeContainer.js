import React, { Component } from 'react';
import AppFrame from '../components/AppFrame';
import { Container, Row, Col } from 'react-bootstrap';
import AppClans from '../components/AppClans';
import AppNews from '../components/AppNews';
import AppRanking from '../components/AppRanking';
import './../../assets/stylesheets/home.css';
import AppTwitchUsersList from '../components/AppTwitchUsersList';
import AppTwitch from '../components/AppTwitch'

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <AppFrame body={
          <Container fluid>
            <Row className="mt-5">
              <Col lg={3} >
                <AppRanking/>
                <AppClans/>
              </Col>
              <Col lg={6}>
                <AppNews/>
              </Col>
              <Col lg={3}>
                <AppTwitch/>
              </Col>
            </Row>
          </Container>
        }/>
      </div>
    );
  }
}

export default HomeContainer
