import React from 'react';
import './game-cover.css'

export const GameCover = ({images=''}) => {
  return (
    <div className='game-cover' style={{backgroundImage: `url(${images})`}}/>
  );
};

