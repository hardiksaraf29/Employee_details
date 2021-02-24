import React, { useState } from 'react';

let Card = (props) => {
  let [count, setValue] = useState(0)

  let counter =()=>
  {
    setValue(count+1);
  }
  
  props.childValue(count) 
  let sendValue =(Value)=>
  {
    Value = count;
  }

  return (  
    <React.Fragment>
      <h3>Child Value :-- {count}</h3>      
      <h3>Parent Value :-- {props.parentValue}</h3>      
      <button className="btn" onClick={counter} id="CounterBtn">Count</button>
      {/* <button className="btn btn-primary" onClick={props.childValue(count)}>Countt</button> */}
    </React.Fragment>
  )
}

export default Card;