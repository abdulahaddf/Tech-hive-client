import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-5xl mb-20">WELCOME TO TECH HIVE</h1>
      <div className="flex gap-10 justify-center">
        <Link
          to="view-phone-info"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          View List
        </Link>
        <Link
          to="add-phone-info"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Phone
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
