import axios from 'axios';
import './App.css';
import React, { useState, useEffect } from 'react';
import Users from './Components/UsersList';

function App() {
  const [data, setData] = useState(null);
 
  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  , []);
   console.log(data)
    
  
  return (
    
    <div className="App">
    <Users data={data} />
    </div>
  );
}

export default App;
