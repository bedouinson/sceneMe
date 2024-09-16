import React, { useState, useEffect } from "react";
import ListCard from "../components/ListCard"; // Assuming ListCard is in the same folder

const Lists = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await fetch(
          "http://localhost:3002/lists/:66e3f100be4deec556178e12"
        ); // Replace with your API URL
        const data = await response.json();
        setLists(data);
      } catch (error) {
        console.error("Error fetching lists:", error);
      }
    };

    fetchLists();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Your Lists</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {lists.map((list) => (
          <ListCard
            key={list._id}
            list={list}
          />
        ))}
      </div>
    </div>
  );
};

export default Lists;
