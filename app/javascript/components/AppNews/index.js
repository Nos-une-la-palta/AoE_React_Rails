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
                    <div className="d-flex justify-content-center" key={news.id}>
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
