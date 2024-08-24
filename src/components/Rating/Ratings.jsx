import React from 'react';
import { Rate } from 'antd';

const Ratings = ({name}) => {
    // console.log(name);
  return (
    <>
      <Rate allowHalf count={10} disabled defaultValue={name} /> 
    </>
  )
}

export default Ratings