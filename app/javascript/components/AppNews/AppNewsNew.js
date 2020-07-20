import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';

const AppNewsNew = () => {
        return (
            <div>
                <h2> edicion </h2>
                <form action="">
                    <div>
                        <label htmlFor="title">Titulo</label>
                        <Field name="title" component="input" type="text"></Field>
                    </div>
                    <div>
                        <label htmlFor="description">Descricion</label>
                        <Field name="description" component="input" type="text"></Field>
                    </div>
                    <div>
                        <button type="submit"></button>
                    </div>

                </form>
            </div>
        );
}

AppNewsNew.propTypes = {

};

export default reduxForm({ form: 'AppNewsNew'})(AppNewsNew);