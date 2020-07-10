import React, {useState, useEffect} from 'react';
import { useGlobalState } from './AppTwitchUser'
import PropTypes from 'prop-types';
import {Row, Col } from 'react-bootstrap';
import './../../../assets/stylesheets/home.css';

const OfflineStreamers = ({ twitches, streamers }) => {
    const [video, setVideo] = useGlobalState('video')

    const filterOffline = twitches.map( t => 
           streamers.find( s => s.user_name.toLowerCase() === t.attributes.streamer) ? undefined : t 
        )
    const streamersOffline = filterOffline.filter( el =>
        el != undefined
      );

    return (
        <div className="container-fluid">
            { streamersOffline.map( streamer_offline => 
                <div key={streamer_offline .id}>
                    <Row className=" row-image-twitch pb-2 pt-2" onClick={() => setVideo(streamer_offline.attributes.streamer)}>
                        <Col sm={{span:7}}>
                            <img className="image-twitch-user " src={streamer_offline .attributes.twitch_img} /> 
                            <span className="name-clans-home">{ streamer_offline.attributes.streamer }</span>
                        </Col>
                        <Col sm={4} className="my-auto">

                        </Col>
                    </Row>
                </div> 
            )}         
        </div>
    )
};


OfflineStreamers.propTypes = {

};

export default OfflineStreamers;