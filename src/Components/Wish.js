import React, { useState } from 'react';

let Wish = () => {
  let [message, setMessage] = useState("Hello")

  let GoodMorning = () => {
    setMessage("Good Morning")
  }

  let GoodEvening = (value) => {
    setMessage(value)
  }

  return (
    <React.Fragment>
      <section>
        <div className="container m-5">
          <div className="row">
            <div className="col-md-7">
              <div className="card">
                <div className="card-header bg-warning">
                  <h2>Wish Message</h2>
                </div>
                <div className="card-body">
                  <h3>{message}</h3>
                  <div className="row">
                    <button onClick={GoodMorning} className="btn btn-primary text-dark">Good Morning</button>
                    <button onClick={() => { setMessage("Good Afternoon") }} className="btn btn-success text-dark">Good Afternoon</button>
                    <button onClick={GoodEvening.bind(this, "Good Night")} className="btn btn-danger   text-dark">Good Night</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </React.Fragment>
  )
}

export default Wish;

