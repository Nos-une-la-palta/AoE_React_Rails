import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppTwitchVideo extends Component {
    render() {
        return (
            <div>
                <iframe
                    src="https://player.twitch.tv/?channel=loltyler1&parent=localhost"
                    height="500"
                    width="900"
                    scrolling="no"
                    frameborder="0"
                    allowFullScreen="true"
                    title="hanryang1125" 
                    className="twitch-card-video">
                </iframe>
            </div>
        );
    }
}

AppTwitchVideo.propTypes = {

};

export default AppTwitchVideo;