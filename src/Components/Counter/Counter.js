import React, { useState } from 'react';
import Card from './Child/Card';
import "./Counter.css";

let Counter = () => {
  let [count, setCount] = useState(0);
  let [childValue, setValue] = useState(0);

  let countFun = () => {
    setCount(count + 1)
  }

  let recieveValue = (value) => {
    setValue(value)
  }

  return (
    <React.Fragment>
      <section>
        <div className="container m-5">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header bg-success">
                  <h2>Parent Card</h2>
                </div>
                <div className="card-body">
                  <h3>Parent Value :-- {count}</h3>
                  <h3>Child Value :-- {childValue}</h3>
                  <button
                    id="CounterBtn"
                    className="btn countBtn" 
                    onClick={countFun}> Count
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-header bg-warning">
                  <h2>Child Card</h2>
                </div>
                <div className="card-body">

                  <Card parentValue={count}
                    childValue={recieveValue}
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )

}

export default Counter;