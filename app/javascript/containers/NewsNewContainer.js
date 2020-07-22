import React, { Component } from 'react';
import {Container, Row, Col } from "react-bootstrap";
import AppFrame from '../components/AppFrame';
import AppNewsNew from "../components/AppNews/AppNewsNew"
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { insertNews } from './../actions/insertNews'

class NewsNewContainer extends Component {

    handleSubmit = (values) => {
        this.props.insertNews(values)
    }

    handleOnSubmitSuccess = () => {
        this.props.history.goBack()
    }

    handleOnBack = () => {
        this.props.history.goBack()
    }


    renderBody = () => {
        return (
            <AppNewsNew
                onSubmit={this.hadleSubmit}
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


export default withRouter(connect(null, { insertNews })(NewsNewContainer));