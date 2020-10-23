import React from 'react';
import FormLeft from '../FormLeft/FormLeft';
import FormRight from '../FormRight/FormRight';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <FormLeft />
      <FormRight />
    </div>
  );
}

export default Main;
