import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {Row, Col } from 'react-bootstrap';
import './../../../assets/stylesheets/home.css';
import { createGlobalState } from 'react-hooks-global-state';

export const { useGlobalState } = createGlobalState({
    video: 'nurok'
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
        .then( resp => 
            setStreamers(resp.data.data),
            //, setLoaded(true)
             )
        .catch( resp => console.log(resp) )
        console.log(streamers)

    }, [])     

    
    return (
        <div className="container-fluid">
            {twitches.map( t => {
                let st = streamers.find( s => s.user_name.toLowerCase() === t.attributes.streamer)
                return (
                    streamers.find( s => s.user_name.toLowerCase() === t.attributes.streamer) ?
                        <div key={t.id}>
                            <Row className=" row-image-twitch mb-4 mt-2" onClick={() => setVideo(t.attributes.streamer)}>
                                <Col sm={{span:7}}>
                                    
                                        <img className="image-twitch-user " src={t.attributes.twitch_img} /> 
                                        <span className="name-clans-home">{ st.user_name }</span>
                                   
                                </Col>
                                <Col sm={4} className="my-auto">
                                    <span className="green-dot"></span> 
                                    { st.user_name.toLowerCase() === t.attributes.streamer ? st.viewer_count: "0"}
                                </Col>
                            </Row>
                        </div> 
                    :
                        <div key={t.id}>
                            <Row className=" row-image-twitch mb-4 mt-2" onClick={() => setVideo(t.attributes.streamer)}>
                                <Col sm={{span:7}}>
                                        <img className="image-twitch-user " src={t.attributes.twitch_img} /> 
                                        <span className="name-clans-home">{ t.attributes.streamer }</span>
                                </Col>
                                <Col sm={4} className="my-auto">
                                    <span className="red-dot"></span> 
                                    0
                                </Col>
                            </Row>
                        </div>
                )     
                })
            }
        </div>
    ) 
};

AppTwitchUser.propTypes = {

};

export default AppTwitchUser;


// {twitches.map( t => {
//     streamers.map( st => {
//      streamers.find( s => s.user_name === t.attributes.streamer) ?
//        console.log('streamer:' , t.attributes.streamer, 'viewrs:', st.viewer_count) : 
//        console.log('streamer:' , t.attributes.streamer, 'viewrs:', 0 )
//     }) 
//   })}