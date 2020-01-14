import React from 'react';
import './Person.css';

const personIn = (props) =>{
  return (
    <div className="Person">
      <input type="text" onChange={props.changed} />
    </div>
  )

} ;

export default personIn;
