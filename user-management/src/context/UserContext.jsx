import React, { createContext, useState, useEffect } from 'react';
import { fetchUsers, addUser, updateUser, deleteUser } from '../services/api';

// Create the UserContext
export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [users, setUsers] = React.useState([]);
  const [error, setError] = React.useState(null);

  // Fetch users on component mount
  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchUsers();
        setUsers(data); // Update state with fetched users
      } catch (err) {
        setError('Failed to fetch users');
      }
    };

    getUsers();
  }, []);

  // Add a new user
  const handleAddUser = async (newUser) => {
    try {
      const addedUser = await addUser(newUser);
      setUsers((prevUsers) => [...prevUsers, addedUser]);
    } catch (err) {
      setError('Failed to add user');
    }
  };

  // Update an existing user
  const handleUpdateUser = async (id, updatedUser) => {
    try {
      const updatedData = await updateUser(id, updatedUser);
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === id ? updatedData : user))
      );
    } catch (err) {
      setError('Failed to update user');
    }
  };

  // Delete a user
  const handleDeleteUser = async (id) => {
    try {
      await deleteUser(id);
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (err) {
      setError('Failed to delete user');
    }
  };

  // Provide state and methods through context
  return (
    <UserContext.Provider
      value={{
        users,
        error,
        setUsers,
        addUser: handleAddUser,
        updateUser: handleUpdateUser,
        deleteUser: handleDeleteUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
