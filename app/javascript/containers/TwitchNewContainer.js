import React, { Component } from 'react';
import {Container, Row, Col } from "react-bootstrap";
import AppFrame from '../components/AppFrame';
import TwitchForm from "../components/AppTwitchUsersList/TwitchForm"
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { insertTwitch } from './../actions/insertTwitch'

class TwitchNewContainer extends Component {

    handleSubmit = (values) => {
        this.props.insertTwitch(values)
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack()
    }

    handleOnBack = () => {
        this.props.history.goBack()
    }


    renderBody = () => {
        return (
            <TwitchForm
                onSubmit={this.handleSubmit}
                onSubmitSuccess={this.handleOnSubmitSuccess}
                onBack={this.handleOnBack}
            />
        )
    }

    render() {
        return(
            <div>
                <AppFrame body={
                    <Container fluid>
                        <Row className="mt-5">
                            <Col 
                                xs={{span: 6, offset: 3,}}
                                className="d-flex justify-content-center"
                            >
                                {this.renderBody()}
                            </Col>
                        </Row>
                    </Container>
                }/>
            </div>
        )
    }
}


export default withRouter(connect(null, { insertTwitch })(TwitchNewContainer));