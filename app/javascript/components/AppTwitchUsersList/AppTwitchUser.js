import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {Row, Col, Container } from 'react-bootstrap';
import './../../../assets/stylesheets/home.css';
import { createGlobalState } from 'react-hooks-global-state';
import OnlineStreamers from './OnlineStreamers';
import OfflineStreamers from './OfflineStreamers';

export const { useGlobalState } = createGlobalState({
    video: []
  });
  
const AppTwitchUser = ({ twitches }) => {
    const [streamers, setStreamers] = useState([])
    const [video, setVideo] = useGlobalState('video')
    // const [loaded, setLoaded] = useState(false)
    
    useEffect(() => {
        const strinfigy_streamers = twitches.map( twitch =>
            twitch.attributes.streamer
        ).join('&user_login=')
        
        const url = `https://api.twitch.tv/helix/streams?user_login=${strinfigy_streamers}`
        console.log(url)

        axios.get(url, {
            headers: {
                'Client-ID': '31fd0rot71kt0kndadcpfhpmxbfvqv',
                'Accept': 'application/vnd.twitchtv.v5+json',
                'Authorization': 'Bearer aunv5llxebdg11tkininwi19o0gdhn'
            }
        })
        .then(function(resp){
            setStreamers(resp.data.data)
            //, setLoaded(true)
            return resp
        })
        .then(function(resp){
            setVideo(resp.data.data[0].user_name)
        })
        .catch( resp => console.log(resp) )
        
    }, [])
    
    return(
        <div>
            <OnlineStreamers
                streamers = {streamers}
                twitches = {twitches} />
            <OfflineStreamers
                twitches = {twitches}
                streamers = {streamers} />
        </div>
    )
}

AppTwitchUser.propTypes = {

};

export default AppTwitchUser;