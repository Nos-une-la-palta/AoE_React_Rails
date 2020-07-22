import React, {useState, useEffect} from 'react';
import { useGlobalState } from './AppTwitchUsersList/AppTwitchUser'
import PropTypes from 'prop-types';

const AppTwitchVideo = ({height, width}) => {
    const [video, setVideo ] = useGlobalState('video')
    
    useEffect(() => {
        setVideo(video);
      }, []);

        return (
            <div>
                <iframe
                    src={`https://player.twitch.tv/?channel=${video}&parent=localhost`}
                    height={height}
                    width={width}
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    title="lck_korea" 
                    className="twitch-card-video">
                </iframe>
            </div>
        );
}

AppTwitchVideo.propTypes = {

};

export default AppTwitchVideo;