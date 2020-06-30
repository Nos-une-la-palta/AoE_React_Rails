import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppTwitchVideo extends Component {
    render() {
        return (
            <div>
                <iframe
                    src="https://player.twitch.tv/?channel=hanryang1125.com&muted=true"
                    height="450"
                    width="720"
                    frameborder="0"
                    scrolling="no"
                    allowfullscreen="true"
                    title="hanryang1125" 
                    autoplay="true"
                    className="twitch-card-video">
                </iframe>
            </div>
        );
    }
}

AppTwitchVideo.propTypes = {

};

export default AppTwitchVideo;