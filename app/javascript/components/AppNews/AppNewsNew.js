import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

class AppNewsNew extends Component {
    render() {
        const { handleSubmit, submitting, onBack, pristine, submitSucceeded } = this.props;
        return (
            <div>
                <h2> NUEVA NOTICIA </h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title">Titulo</label>
                        <Field name="title" component="input" type="text"></Field>
                    </div>
                    <div>
                        <label htmlFor="description">Descricion</label>
                        <Field name="description" component="input" type="text"></Field>
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

export default reduxForm({ form: 'AppNewsNew'})(AppNewsNew);