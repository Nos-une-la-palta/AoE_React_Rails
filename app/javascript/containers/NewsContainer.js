import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppFrame from '../components/AppFrame';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import AppNews from '../components/AppNews';

class NewsContainer extends Component {
    render() {
        return (
            <div>
            <AppFrame body={
              <Container fluid>
                <Row className="mt-5">
                  <Col xs={{span: 6, offset: 3,}}>
                  <AppNews/>
                  </Col>
                </Row>
              </Container>
            }/>
          </div>
        );
    }
}

NewsContainer.propTypes = {

};

export default withRouter(NewsContainer);