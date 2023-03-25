import React from 'react';
import './UserColumn.css';
import userIcon from './user-icon.png';

const UserColumn = () => {
  return (
    <div className="user-column">
      <img src={userIcon} alt="user icon" className="user-icon" />
    </div>
  );
};

export default UserColumn;