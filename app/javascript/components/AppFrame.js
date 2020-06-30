import React from 'react';
import PropTypes from 'prop-types';
import AppHeader from './AppHeader';
import AppNavbar from './AppNavbar';
import AppFooter from './AppFooter';

const AppFrame = props => {
    return (
        <div>
            <div>
                <AppHeader/>
                <AppNavbar/>
                <div className="frame-body">{props.body}</div>
                <AppFooter/>
            </div>
        </div>
    );
    
}

AppFrame.propTypes = {
    body: PropTypes.element.isRequired,
};

export default AppFrame;