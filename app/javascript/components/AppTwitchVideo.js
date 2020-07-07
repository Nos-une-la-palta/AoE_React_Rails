import React, {useState, useEffect} from 'react';
import { useGlobalState } from './AppTwitchUsersList/AppTwitchUser'
import PropTypes from 'prop-types';

const AppTwitchVideo = () => {
    const [video, setVideo ] = useGlobalState('video')
    
    useEffect(() => {
        setVideo(video);
      }, []);

        return (
            <div>
                <iframe
                    src={`https://player.twitch.tv/?channel=${video}&parent=localhost`}
                    height="500"
                    width="1080"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    title="lck_korea" 
                    className="twitch-card-video">
                </iframe>
                {video}
            </div>
        );
}

AppTwitchVideo.propTypes = {

};

export default AppTwitchVideo;