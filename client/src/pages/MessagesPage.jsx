import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import api from '../http';

const MessagesPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => { // mock authcheck
    const fetchData = async () => {
      const response = await api.get('/user/getUsers')
      setData(response.data.users)
    }
    fetchData()
  }, [])
  return (
    <div>
      {data.map(user => (
        <p>{JSON.stringify(user, null, 2)}</p>
      ))}
    </div>
  );
};

export default MessagesPage;