import React from 'react';
import { User, UsersProps } from '../models/models';

import './Detail.css';
import Graph from './Graph';


function Detail({ user }: UsersProps) {
  const url = "https://secure.gravatar.com/avatar?d=wavatar";
  const addDefaultSrc = (ev: any) => {
    ev.target.src = url;
  };
  return (
    <div className="Detail">
      <div className='header'>
        {(user.avatar != undefined || user.avatar) && <img src={user.avatar} alt="Lago di Braies" onError={addDefaultSrc}/>}
        {/* {(user.avatar == undefined || user.avatar == '') && <p data-letters={user.Name[0]}></p>} */}

        <div id="wrapper">
          <div id="inner1"> <h2>{user.Name}</h2></div>
          <div id="inner2" className='profile'> {user.occupation}</div>
        </div>
      </div>
      <div className='mid'>
        <div>
          <Graph />
          <span className="tag">conversions range</span>
        </div>
        <div>

          <div id="wrapper">
            <div id="inner2" className='impr'>{user.impressions}</div>
            <div id="inner1" className='head'>impressions</div>
          </div>
          <div id="wrapper">
            <div id="inner2" className='convr'>{user.conversions}</div>
            <div id="inner1" className='head'>conversions</div>
          </div>
          <div id="wrapper">
            {/* <div id="inner1" className='reven'>{user.revenue.toFixed(2)}</div> */}
          </div>
        </div>
      </div>

    </div>
  );
}

export default Detail;
