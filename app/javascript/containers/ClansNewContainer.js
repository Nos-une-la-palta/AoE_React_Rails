import React, { Component } from 'react';
import {Container, Row, Col } from "react-bootstrap";
import AppFrame from '../components/AppFrame';
import ClanForm from "../components/AppClans/ClanForm"
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { insertClans } from './../actions/insertClans'

class ClansNewContainer extends Component {

    handleSubmit = (values) => {
        this.props.insertClans(values)
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack()
    }

    handleOnBack = () => {
        this.props.history.goBack()
    }


    renderBody = () => {
        return (
            <ClanForm
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
                            <Col xs={{span: 6, offset: 3,}}>
                                {this.renderBody()}
                            </Col>
                        </Row>
                    </Container>
                }/>
            </div>
        )
    }
}


export default withRouter(connect(null, { insertClans })(ClansNewContainer));