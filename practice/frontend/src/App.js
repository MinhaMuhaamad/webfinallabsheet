import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching users. Please try again later.');
        setLoading(false);
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []);

  const addUser = async (user) => {
    try {
      const response = await axios.post('/api/users', user);
      setUsers([...users, response.data]);
    } catch (err) {
      setError('Error adding user. Please try again.');
      console.error('Error adding user:', err);
    }
  };

  return (
    <div className="app">
      <header>
        <h1>Full Stack App with React and MongoDB</h1>
      </header>
      <main>
        <UserForm addUser={addUser} />
        {loading ? (
          <p>Loading users...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : (
          <UserList users={users} />
        )}
      </main>
    </div>
  );
}

export default App;
