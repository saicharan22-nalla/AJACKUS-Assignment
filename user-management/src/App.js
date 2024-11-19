/*import React, { useState, useEffect } from 'react';
import UserProvider from './context/UserContext'; // Context provider
import ListUser from './components/ListUser'; // Updated component name
import UserForm from './components/UserForm'; // Form component for add/edit functionality
import {fetchUsers} from './services/api'; // API service to fetch users

const App = () => {
  const [users, setUsers] = useState([]); // State for user list
  const [error, setError] = useState(null); // State for errors
  const [selectedUser, setSelectedUser] = useState(null); // State for the user being edited
  const [isEditing, setIsEditing] = useState(false); // State to toggle between add/edit

  // Fetch users from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchUsers();
        setUsers(response);
      } catch (err) {
        setError('Failed to fetch users');
      }
    };

    fetchData();
  }, []);
  
  // Handle the edit functionality
  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsEditing(true);
  };

  // Reset the form after adding or updating a user
  const handleFormClose = () => {
    setSelectedUser(null);
    setIsEditing(false);
  };

  return (
    <UserProvider value={{ users, setUsers, error, setError }}>
      <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1>User Management</h1>
        
        
        <ListUser onEdit={handleEdit} />

        
        {isEditing ? (
          <UserForm
            user={selectedUser}
            onClose={handleFormClose}
            isEditing={isEditing}
          />
        ) : (
          <UserForm onClose={handleFormClose} />
        )}
      </div>
    </UserProvider>
  );
};

export default App;*/

import React, { useState, useEffect } from 'react';
import { UserContext } from './context/UserContext';
import UserForm from './components/UserForm/UserForm';
import ListUser from './components/ListUser';
import { fetchUsers, addUser, updateUser, deleteUser } from './services/api';
import './App.css'

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState(null);

  // Fetch users when the component mounts
  useEffect(() => {
    const loadUsers = async () => {
      try {
        const userList = await fetchUsers();
        setUsers(userList);
      } catch (err) {
        setError('Failed to fetch users.');
      }
    };
    loadUsers();
  }, []);

  // Handle adding a new user
  const handleAddUser = async (user) => {
    try {
      const newUser = await addUser(user);
      setUsers([...users, newUser]);
      setShowForm(false);
    } catch (err) {
      alert('Failed to add user.');
    }
  };

  // Handle updating an existing user
  const handleUpdateUser = async (updatedUser) => {
    try {
      const user = await updateUser(editingUser.id, updatedUser);
      setUsers(users.map((u) => (u.id === editingUser.id ? user : u)));
      setEditingUser(null);
      setShowForm(false);
    } catch (err) {
      alert('Failed to update user.');
    }
  };

  // Handle deleting a user
  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      alert('Failed to delete user.');
    }
  };

  return (
    <UserContext.Provider value={{ users, setUsers, error, setError }}>
    <div>
      <h1 className='heading'>User Management System</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {showForm ? (
        <UserForm
          onSave={editingUser ? handleUpdateUser : handleAddUser}
          user={editingUser}
          onCancel={() => {
            setEditingUser(null);
            setShowForm(false);
          }}
        />
      ) : (
        <button onClick={() => setShowForm(true)}>Add User</button>
      )}

      <ListUser
        users={users}
        onEdit={(user) => {
          setEditingUser(user);
          setShowForm(true);
        }}
        onDelete={handleDeleteUser}
      />
    </div>
    </UserContext.Provider>
  );
};

export default App;


