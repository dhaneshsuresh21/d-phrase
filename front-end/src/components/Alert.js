import React from 'react';

const Alert = ({ message, type, onClose }) => {
  return (
    <div className="flex justify-center mt-10 text-xs text:'Times New Roman' md:text-lg">
      <p className='p-1 md:p-2'>{message}</p>
      <button onClick={onClose}>❌</button>
    </div>
  );
};

export default Alert;
