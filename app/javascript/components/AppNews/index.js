// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { Card } from 'react-bootstrap';
// import './../../../assets/stylesheets/home.css';

// class AppNews extends Component {
//     render() {
//         return (
            // <div className="d-flex justify-content-center">
            //     <Card className="news-card">
            //         <Card.Img variant="top" className="header-news" />
            //         <Card.Body className="news-card-body">
            //             <Card.Title className="news-title">Torneo Galáctico</Card.Title>
            //             <hr className="hr-news-cards"/>
            //             <Card.Img className="news-card-img" variant="top" src={require('./../../../assets/images/torneto.jpg')} />
            //             <Card.Text>
            //             Some quick example text to build on the card title and make up the bulk of the card's content.
            //             </Card.Text>
            //             <hr className="hr-news-cards"/>
            //         </Card.Body>
            //     </Card>
            // </div>
//         );
//     }
// }

// AppNews.propTypes = {

// };

// export default AppNews;
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchNews } from './../../actions/fetchNews';
import { getNews } from './../../selectors/news';
import {Card, Row, Col } from "react-bootstrap";

class AppNews extends Component {

    componentDidMount() {
        this.props.fetchNews();
      }

    renderBody = news => {
        return (
            <div>
                { news.map( news => 
                    <div className="d-flex justify-content-center">
                        <Card className="news-card">
                            <Card.Img variant="top" className="header-news" />
                            <Card.Body className="news-card-body">
                                <Card.Img className="news-card-img" variant="top" src={news.attributes.content} />
                                <hr className="hr-news-cards"/>
                                <Card.Title className="news-title">{news.attributes.title}</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                <hr className="hr-news-cards"/>
                            </Card.Body>
                        </Card>
                    </div>
                    )
                
            }
            </div>
        )
    }
    
  
    render() {
        return(
            <div>
                {this.renderBody(this.props.news)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    news: getNews(state)
  });

export default withRouter(connect(mapStateToProps, { fetchNews })(AppNews));
