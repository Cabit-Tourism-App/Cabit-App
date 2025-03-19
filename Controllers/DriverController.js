import { useState } from "react";

const BASE_URL = "http://localhost:3000/api/route?model=driver"; // Replace with actual API URL

export const useDriverController = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  // Fetch all drivers
  const fetchDrivers = async () => {
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

  // Fetch a specific driver by ID
  const fetchDriverById = async (id) => {
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

  // Create a new driver
  const createDriver = async (newDriver) => {
    setLoading(true);
    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newDriver),
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

  // Update a driver
  const updateDriver = async (id, updatedData) => {
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

  // Delete a driver
  const deleteDriver = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(`${BASE_URL}&id=${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error(`Error ${response.status}`);
      setData(`Driver ${id} deleted successfully`);
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
    fetchDrivers,
    fetchDriverById,
    createDriver,
    updateDriver,
    deleteDriver,
  };
};
