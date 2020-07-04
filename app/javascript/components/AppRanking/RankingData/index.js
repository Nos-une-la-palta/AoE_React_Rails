import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col } from 'react-bootstrap';
import PlayerName from './PlayerName';
import PlayerRanking from './PlayerRanking';
import './../../../../assets/stylesheets/ranking.css';


const RankingData = ({ players }) => {
    return (
        <div className="container-fluid">
                { players && players.slice(0, 10).map( (player, index) => 
                    <div key={player.steam_id}>
                        <Row className="mb-2 mt-2 mx-auto py-auto"
                            >

                            <Col sm={{span:2, offset:1 }} className="main-number-rank-bg ">
                                <span className="main-number-rank">
                                    {index+1}
                                </span>
                            </Col>

                            <Col sm={9}>

                                <PlayerName
                                    name={player.name}
                                    country={player.country}
                                /> 

                                <PlayerRanking
                                    rank={player.rank}
                                    streak={player.streak}
                                    country={player.country}
                                />
                            </Col>
                            
                        </Row> 
                        <hr className="ranking-hr mx-auto" />
                    </div>    
                )}
                
        </div>
    )
};

RankingData.propTypes = {

};

export default RankingData;

