import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { deleteUser } from '../services/api';

const ListUser = ({ onEdit }) => { // Component name updated to ListUser
  const { users, setUsers, error } = useContext(UserContext); // Using UserContext for state

  const handleDelete = async (id) => {
    try {
      await deleteUser(id); // API call to delete the user
      setUsers(users.filter((user) => user.id !== id)); // Update state after deletion
    } catch (err) {
      alert('Failed to delete user'); // Error handling
    }
  };

  if (error) return <p>{error}</p>; // Display error if there is an issue

  return (
    <div>
      {users.map((user) => (
        <div key={user.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <p>Email: {user.email}</p>
          <p>Department: {user.department}</p>
          <button onClick={() => onEdit(user)} style={{ marginRight: '10px' }}>Edit</button>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ListUser;
