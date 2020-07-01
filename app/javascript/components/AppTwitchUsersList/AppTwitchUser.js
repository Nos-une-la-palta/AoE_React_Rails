// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import {Row, Col} from 'react-bootstrap';

// class AppTwitchUser extends Component {
//     render() {
//         return (
            // <div>
            //     <Row className=" row-image-twitch mb-4 mt-2">
            //         <Col sm={{span:6, offset:1}}>
            //             <a href="www.google.cl"> 
            //                 <img className="image-clans-home " src='./images/assets/TW-Vistima.png' alt="vistima"/> 
            //                 <span className="name-clans-home">Vistima</span>
            //             </a>
            //         </Col>
            //         <Col sm={4} className="my-auto">
            //             <span className="dot"></span> 100
            //         </Col>
            //     </Row>
            // </div>
//         );
//     }
// }

// AppTwitchUser.propTypes = {

// };

// export default AppTwitchUser;

import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col } from 'react-bootstrap';
import './../../../assets/stylesheets/home.css';


const AppTwitchUser = ({ twitches }) => {
    return (
        <div className="container-fluid">
                { twitches.map( twitch =>  
                    <div key={twitch.id}>
                        <Row className=" row-image-twitch mb-4 mt-2">
                            <Col sm={{span:7}}>
                                <a href="www.google.cl"> 
                                    <img className="image-clans-home " src={twitch.attributes.twitch_img} alt={twitch.attributes.slug}/> 
                                    <span className="name-clans-home">{twitch.attributes.streamer}</span>
                                </a>
                            </Col>
                            <Col sm={4} className="my-auto">
                                <span className="dot"></span> 100
                            </Col>
                        </Row>
                    </div> 
                )}
        </div>
    )
};

AppTwitchUser.propTypes = {

};

export default AppTwitchUser;