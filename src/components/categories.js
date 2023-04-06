import React, { useState } from 'react';

const Categary = () => {
  const [status, setStatus] = useState('inactive');
  const handlingstaus = () => {
    setStatus('active');
  };
  return (
    <div>
      <p>
        Status:
        {' '}
        {status}
      </p>
      <button type="button" onClick={handlingstaus}>Check status</button>
    </div>
  );
};
export default Categary;
