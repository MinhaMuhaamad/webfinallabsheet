import React from 'react';

const UserList = ({ users }) => {
  if (users.length === 0) {
    return <p>No users found. Add a user to get started!</p>;
  }

  return (
    <div className="user-list">
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
