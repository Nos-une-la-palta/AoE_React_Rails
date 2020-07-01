import React from 'react';
import PropTypes from 'prop-types';
import {Row, Card } from 'react-bootstrap';
import './../../../assets/stylesheets/home.css';


const TwitchAppData = ({ twitches }) => {
    return (
        <div className="container-fluid">
                { twitches.map( twitch =>  
                    <div key={twitch.id} >
                        <Card className="home-card-bodies">
                            <Row className=" row-image-twitch mb-4 mt-2 mx-auto">
                            <img className="image-twitch-index" src={twitch.attributes.twitch_img} alt={twitch.attributes.slug}/>	        
                            </Row>
                            <div className="twitch-name-profile"> 
                                <h5>{twitch.attributes.streamer}</h5> 
                            </div>
                        </Card>
                        <hr className="ranking-hr mx-auto" />
                    </div>    
                )}
        </div>
    )
};

TwitchAppData.propTypes = {

};

export default TwitchAppData;