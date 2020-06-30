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
                    <Container>
                        <Row className="mt-5">
                            <Col sm={8}>
                                <AppTwitchVideo/>
                            </Col>
                            <Col sm={4}>
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