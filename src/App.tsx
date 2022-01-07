import React from 'react';
import logo from './logo.svg';
import './App.css';
import {User} from  './usedObjects';


function App() {

  let userDetails: User = {
    name: "Naren",
    id: 25
  }

  return (
    <div className="App">
      <h1>User name is ${userDetails.name} and id is ${userDetails.id}</h1>
    </div>
  );
}

export default App;
