import React from 'react';
import './styles.scss';

export const Spinner = () => {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
};
