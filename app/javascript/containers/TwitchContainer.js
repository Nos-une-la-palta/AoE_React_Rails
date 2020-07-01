import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { Container, Row, Col } from 'react-bootstrap';
import AppTwitchVideo from '../components/AppTwitchVideo';
import AppTwitchUsersList from '../components/AppTwitchUsersList';

class TwitchContainer extends Component {
    render() {
        return (
            <div>
                <AppFrame body={
                    <Container fluid>
                        <Row className="mt-5">
                            <Col sm={{span:7, offset:2}}>
                                <AppTwitchVideo/>
                            </Col>
                            <Col sm={{span:3}}>
                                <AppTwitchUsersList/>
                            </Col>
                        </Row>
                    </Container>
                }/>
            </div>
        );
    }
}

TwitchContainer.propTypes = {

};

export default TwitchContainer;