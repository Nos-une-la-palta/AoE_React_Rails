import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import './../../assets/stylesheets/home.css';
import { newsHeaderImage } from './../images/images'

class AppNews extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center">
                <Card className="news-card">
                    <Card.Img variant="top" className="header-news" />
                    <Card.Body className="news-card-body">
                        <Card.Title className="news-title">Torneo Galáctico</Card.Title>
                        <hr className="hr-news-cards"/>
                        <Card.Img className="news-card-img" variant="top" src={require('./../../assets/images/torneto.jpg')} />
                        {newsHeaderImage}
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                        </Card.Text>
                        <hr className="hr-news-cards"/>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

AppNews.propTypes = {

};

export default AppNews;