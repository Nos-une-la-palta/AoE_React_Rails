
import React, {useState, useEffect}  from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {Row, Col } from 'react-bootstrap';
import { useGlobalState } from './AppTwitchUser'
import './../../../assets/stylesheets/home.css';

const OnlineStreamers = ({ streamers, twitches }) => {
    const [video, setVideo] = useGlobalState('video')

    // const firstStreamer = streamers.map( s => s).shift()

    // console.log(firstStreamer)

    useEffect(() => {
        setVideo()
    }, [])

    return (
        <div className="container-fluid">
            { streamers.map( streamer => {
                let tw = twitches.find( twitch => twitch.attributes.streamer === streamer.user_name.toLowerCase() ) 
                return(
                <div key={streamer.id}>
                    <Row className=" row-image-twitch pb-2 pt-2"
                         onClick={() => setVideo(streamer.user_name.toLowerCase()) } >
                        <Col sm={{span:7}}>
                            <img className="image-twitch-user " 
                                src={ twitches.find( twitch => twitch.attributes.streamer === streamer.user_name.toLowerCase() ) ?
                                    tw.attributes.twitch_img : ""}/> 
                            <span className="name-clans-home">{ streamer.user_name }</span>
                        </Col>
                        <Col sm={4} className="my-auto">
                            <span className="green-dot"></span> 
                            <span className="list">
                                { streamer.viewer_count }
                            </span> 
                        </Col>
                    </Row>
                </div> 

                )
            }
            
            )}         
        </div>
    )
};


OnlineStreamers.propTypes = {

};

export default OnlineStreamers;