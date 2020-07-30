import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import { Button, Row, Col} from 'react-bootstrap';

class AppNewsNew extends Component {
    render() {
        const { handleSubmit, submitting, onBack, pristine, submitSucceeded } = this.props;
        return (
            <div className="news-form">
                <h2 className="new-news-title"> NUEVA NOTICIA </h2>
                <form onSubmit={handleSubmit}>

                    <div className="d-flex justify-content-center">
                        <Field name="title" component="input" type="text" placeholder="Título"></Field>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Field name="description" component="textarea" type="text" placeholder="Descripción"></Field>
                    </div>

                    <div>
                        <Row className="mt-3 mb-4">
                            <Col xs={{span: 3, offset:1}}>
                                <Button type="submit" variant="warning" size="lg">Crear</Button>
                            </Col>
                            <Col xs={{span: 3, offset:4}} className="text-right">
                                <Button type="button" variant="dark" size="lg" onClick={onBack}>Cancelar</Button>
                            </Col>
                        </Row>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({ form: 'AppNewsNew'})(AppNewsNew);