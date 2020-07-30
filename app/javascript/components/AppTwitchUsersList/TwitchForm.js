import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Button, Row, Col} from 'react-bootstrap';

class TwitchForm extends Component {
    render() {
        const { handleSubmit, submitting, onBack, pristine, submitSucceeded } = this.props;
        return (
            <div className="form">
                <h2 className="new-news-title"> NUEVO STREAMER </h2>
                <form onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-center">
                        <Field name="streamer" component="input" type="text" placeholder="Nombre del Streamer"></Field>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Field name="url" component="input" type="text" placeholder="Url Twitch"></Field>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Field name="twitch_img" component="input" type="text" placeholder="Imagen del Twitch"></Field>
                    </div>
                    <div>
                        <Row className="mt-3 mb-4">
                            <Col xs={{span: 2, offset:7}} className="text-right no-padding-bottons-form">
                                <Button type="submit" variant="warning" size="lg">Crear</Button>
                            </Col>
                            <Col xs={{span: 2,}}className="text-right no-padding-bottons-form">
                                <Button type="button" variant="dark" size="lg" onClick={onBack}>Cancelar</Button>
                            </Col>
                        </Row>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({ form: 'TwitchForm'})(TwitchForm);