import React from 'react';
import { User, UsersProps } from '../models/models';

import './Detail.css';
import Graph from './Graph';


function Detail({ user }: UsersProps) {
  return (
    <div className="Detail">
      <div className='header'>
        {(user.avatar != undefined || user.avatar) && <img src={user.avatar} alt="Lago di Braies" />}
        {(user.avatar == undefined || user.avatar == '') && <p data-letters={user.Name[0]}></p>}

        <div id="wrapper">
          <div id="inner1">{user.Name}</div>
          <div id="inner2">{user.occupation}</div>
        </div>
      </div>
      <div className='mid'>
        <div>
          <Graph />
          <span className="tag">conversions range</span>
        </div>
        <div>

          <div id="wrapper">
            <div id="inner1">impressions</div>
            <div id="inner2">{user.impressions}</div>
          </div>
          <div id="wrapper">
            <div id="inner1">conversions</div>
            <div id="inner2">{user.conversions}</div>
          </div>
          <div id="wrapper">
            <div id="inner1">{user.revenue.toFixed(2)}</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Detail;
