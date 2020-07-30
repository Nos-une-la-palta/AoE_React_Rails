import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'react-bootstrap';

class AppFooterFinal extends Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Row className="footer-big d-flex justify-content-center">
                        <Col className="mt-3 text-white"
                            xs={{span: 4, offset: 0}}
                            sm={{span: 3, offset: 1}}
                            lg={{span: 1, offset: 2}}
                        >
                            <h5> REDES SOCIALES</h5>
                            <ul className="list-unstyled list-inline">
                                <li className="list-inline-item"><a href="https://www.facebook.com/AgeOfEmpiresChile/"><i className="fab fa-facebook-square"></i></a></li>
                                <li className="list-inline-item"><a href="https://www.twitch.tv/chileaoe"><i className=" twitch-icon-footer fab fa-twitch"></i></a></li>
                            </ul>
                        </Col>
                        
                        <div className="vl"></div>

                        <Col className="text-left"
                            xs={{span: 8 }}
                            md={{span: 6 }}
                        >
                            <Row className="mt-3 text-white">
                                <Col
                                    xs={{span: 4 }}
                                >
                                    <h5> COLABORADORES</h5>
                                </Col>
                            </Row>

                            <Row className="mt-2"> 
                                <Col
                                     xs={{span: 6 }}
                                     sm={{span: 2 }}
                                >
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="https://www.voobly.com/profile/view/125158712">Vistima</a>
                                        </li>
                                        <li>
                                            <a href="https://www.voobly.com/profile/view/7617">Comercial</a>
                                        </li>
                                    </ul>
                                </Col>

                                <Col
                                    xs={{span: 6 }}
                                    sm={{span: 2 }}
                                >
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="https://www.voobly.com/profile/view/144500">wAkKO</a>
                                        </li>
                                        <li>
                                            <a href="https://www.voobly.com/profile/view/123237368">bboy</a>
                                        </li>
                                    </ul>
                                </Col>

                                <Col
                                    xs={{span: 6 }}
                                    sm={{span: 2 }}
                                >
                                     <ul className="list-unstyled">
                                        <li>
                                            <a href="https://www.voobly.com/profile/view/7725">Inkisidors</a>
                                        </li>
                                        <li>
                                            <a href="https://www.voobly.com/profile/view/124645267">Dimecs</a>
                                        </li>
                                    </ul>
                                </Col>

                                <Col
                                    xs={{span: 6 }}
                                    sm={{span: 3 }}
                                >
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="https://www.voobly.com/profile/view/125206975">Valak</a>
                                        </li>
                                        <li>
                                            <a href="https://www.voobly.com/profile/view/124542930">Batracio</a>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="footer-small py-3" >
                    <Col
                        xs={{span: 3, offset: 5 }}
                    >
                        © 2019 Copyright: <a href="https://www.google.cl">  Radiant-bastion.cl</a>
                    </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

AppFooterFinal.propTypes = {

};

export default AppFooterFinal;