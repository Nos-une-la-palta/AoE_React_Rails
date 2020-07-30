import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class TwitchForm extends Component {
    render() {
        const { handleSubmit, submitting, onBack, pristine, submitSucceeded } = this.props;
        return (
            <div className="news-form">
                <h2 className="new-news-title"> NUEVO STREAMER </h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="streamer">Streamer name</label>
                        <Field name="streamer" component="input" type="text"></Field>
                    </div>
                    <div>
                        <label htmlFor="url">Url twitch</label>
                        <Field name="url" component="input" type="text"></Field>
                    </div>
                    <div>
                        <label htmlFor="twitch_img">twitch_img</label>
                        <Field name="twitch_img" component="input" type="text"></Field>
                    </div>
                    <div>
                        <button type="submit">botton</button>
                        <button type="button" onClick={onBack}>Cancelar</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({ form: 'TwitchForm'})(TwitchForm);