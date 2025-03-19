import { useState } from "react";

const BASE_URL = "http://localhost:3000/api/route?model=user"; // Replace with actual API URL

export const useUserController = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // Fetch all users
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) throw new Error(`Error ${response.status}`);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Fetch a specific user by ID
  const fetchUserById = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}&id=${id}`);
      if (!response.ok) throw new Error(`Error ${response.status}`);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Create a new user
  const createUser = async (newUser) => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) throw new Error(`Error ${response.status}`);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Update a user
  const updateUser = async (id, updatedData) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}&id=${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) throw new Error(`Error ${response.status}`);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Delete a user
  const deleteUser = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}&id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error(`Error ${response.status}`);
      setData(`User ${id} deleted successfully`);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchUsers,
    fetchUserById,
    createUser,
    updateUser,
    deleteUser,
  };
};
