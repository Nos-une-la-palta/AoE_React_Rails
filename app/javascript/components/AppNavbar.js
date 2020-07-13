import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, } from 'react-bootstrap';
import { NavLink, BrowserRouter as Router, withRouter } from 'react-router-dom';
import './../../assets/stylesheets/home.css';

class AppNavbar extends Component {

    handleOnClickHome = () => {
        this.props.history.push('/');
    }    

    handleOnClickNews = () => {
        this.props.history.push('/news');
    }   
    
    handleOnClickTwitch = () => {
        this.props.history.push('/twitch');
    }

    render() {
        return (
            <Router>
            <div>
                <Navbar className="navfull" data-toggle="collapse" sticky="top" >
                    <Nav className="mx-auto">
                        <NavLink to="/" onClick={this.handleOnClickHome} className="link-navbar" >Home</NavLink>
                        <NavLink to="/news" onClick={this.handleOnClickNews} className="link-navbar" >Noticias</NavLink>
                        <NavLink to="/path" className="link-navbar">Torneo</NavLink>
                        <NavLink to="/path" className="link-navbar">Foro</NavLink>
                        <NavLink to="/twitch" onClick={this.handleOnClickTwitch} className="link-navbar">Twitch</NavLink>
                    </Nav>
                </Navbar>
            </div>
            </Router>
        );
    }
}

AppNavbar.propTypes = {

};

export default withRouter(AppNavbar);