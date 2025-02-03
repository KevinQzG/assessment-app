"use client";

import { FaBell, FaUserCircle } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="left-section">
        <h2>Dashboard</h2>
      </div>
      <div className="right-section">
        <button className="icon-button"><FaBell size={20} /></button>
        <div className="user-info">
          <FaUserCircle size={24} />
          <span>Usuario</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
