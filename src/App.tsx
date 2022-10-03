import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ListService from './services/ListService';
import user from '../src/assets/users.json';
import logs from '../src/assets/logs.json';
import Detail from './components/Detail';
import List from './components/List';
import { Logs, User } from './models/models';

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    ListService.getUsers()
      .then((response: any) => {
        let result: User[] = response.data.records.map((a: any) => a.fields);
        prepareData(result)
      })
     
  }, []);

function prepareData(users: User[]){
  const log: Logs[] = JSON.parse(JSON.stringify(logs));

  for (let index = 0; index < users.length; index++) {
    let initializeRevenue = 0;
    let initializeImpressions = 0;
    let initializeConversions = 0;

    for (let j = 0; j < log.length; j++) {

      if (users[index].Id== log[j].user_id) {
        initializeRevenue = initializeRevenue + log[j].revenue;
        users[index].revenue = initializeRevenue;
      }
      
      if (users[index].Id== log[j].user_id && log[j].type == "impression") {
        initializeImpressions = initializeImpressions + 1;
        users[index].impressions = initializeImpressions;
      }
      if (users[index].Id== log[j].user_id && log[j].type == "conversion") {
        initializeConversions = initializeConversions + 1;
        users[index].conversions = initializeConversions;
      }
    }
  }
  setUsers(users);
  console.log(users, log, 'users');
  
}

  return (
    <div className="App Main">
         {users.map((user) => (
             <List user={user} key={user.Id}/>
            ))}
    </div>
  );
}

export default App;
