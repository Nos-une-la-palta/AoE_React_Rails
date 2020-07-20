import React, { Component } from 'react';
import {Container, Row, Col } from "react-bootstrap";
import AppFrame from '../components/AppFrame';
import AppNewsNew from "../components/AppNews/AppNewsNew"

class NewsNewContainer extends Component {
    render() {
        return(
            <div>
                <AppFrame body={
                <Container fluid>
                    <Row className="mt-5">
                        <Col xs={{span: 6, offset: 3,}}>
                            <AppNewsNew />
                        </Col>
                    </Row>
                </Container>
                }/>
            </div>
        )
    }
}


export default NewsNewContainer;
