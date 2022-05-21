import React from 'react';
import notification from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <>
      <p className={notification.color}>{message}</p>
    </>
  );
};

export default Notification;
