import React from 'react';
import { User, UsersProps } from '../models/models';
import Detail from './Detail';
import './List.css';

// import './App.css';

function List({user}: UsersProps) {
  
  return (
    <div className="List">
      <Detail user={user}/>
    </div>
  );
}

export default List;
