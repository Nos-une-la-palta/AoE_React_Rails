import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class ClanForm extends Component {
    render() {
        const { handleSubmit, submitting, onBack, pristine, submitSucceeded } = this.props;
        return (
            <div className="news-form">
                <h2 className="new-news-title"> NUEVO CLAN </h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nombre del clan</label>
                        <Field name="name" component="input" type="text"></Field>
                    </div>
                    <div>
                        <label htmlFor="image">Url de la imagen del clan</label>
                        <Field name="image" component="input" type="text"></Field>
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

export default reduxForm({ form: 'ClanForm'})(ClanForm);