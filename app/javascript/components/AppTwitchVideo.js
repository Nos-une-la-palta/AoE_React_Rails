import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppTwitchVideo extends Component {
    render() {
        return (
            <div>
                <iframe
                    src="https://player.twitch.tv/?channel=lck_korea&parent=localhost"
                    height="500"
                    width="1080"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    title="lck_korea" 
                    className="twitch-card-video">
                </iframe>
            </div>
        );
    }
}

AppTwitchVideo.propTypes = {

};

export default AppTwitchVideo;