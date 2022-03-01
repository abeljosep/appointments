import React from 'react';

const Error = ({mensaje}) => {
  return (
            <div className=" bg-red-800 text-center text-white p-3 mb-5 uppercase font-bold rounded-md ">
                <p>{mensaje}</p>
            </div>

)};

export default Error;
