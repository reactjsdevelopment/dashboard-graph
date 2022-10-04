import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ListService from './services/ListService';
import user from '../src/assets/users.json';
import logs from '../src/assets/logs.json';
import Detail from './components/Detail';
import List from './components/List';
import { Logs, PaginationData, User } from './models/models';
import PaginationComponent from './components/Pagination';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);



useEffect(() => {
  const getData = async () => {
    const tableData: any = ((await import("./services/getTableData")).default<User>({
      limit,
      offset,
    }));
    const finalObj = await tableData;
    console.log(finalObj, 'finalObj');
    
    setUsers(finalObj.data);
  };
  getData();
}, [limit, offset]);

  return (
    <div>
      <div>
      <PaginationComponent  limit={limit} offset={offset} total={100}  setLimit={setLimit}  setOffset={setOffset} />
      </div>
      <div className="App Main">
         {users.map((user) => (
             <List user={user} key={user.Id}/>
            ))}
    </div>
    </div>

  );
}

export default App;
