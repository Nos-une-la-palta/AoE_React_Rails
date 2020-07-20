import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col } from 'react-bootstrap';
import './../../../assets/stylesheets/home.css';

const ClanData = ({ clans }) => {
    return (
        <div className="container-fluid">
                { clans.map( clan =>  
                    <div key={clan.id} >
                            <Row className="mb-3 mt-3">
                                <Col sm={{span:3, offset:1 }} className="my-auto d-flex flex-row-reverse align-middle">
                                    <img className="image-clans-home" src={clan.attributes.image} alt={clan.attributes.slug}/>	
                                </Col>

                                <Col sm={7} className="my-auto no-padding-right-clans-image align-middle">
                                    <span className="name-clans-home">{clan.attributes.name}</span>  
                                </Col>    
                            </Row>
                            <hr className="hr-clans-card-home"/>  
                    </div>    
                )}
        </div>
    )
};

ClanData.propTypes = {

};

export default ClanData;