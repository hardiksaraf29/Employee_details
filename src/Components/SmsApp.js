import React, { useState } from 'react';

let SmsApp = () => {
  let [InputMsg, setValue] = useState("");
  let msgLimit = 20;

  let updateMsg = (event) => {
    setValue(InputMsg = event.target.value)
  }

  return (
    <React.Fragment>
      <section>
        <div className="container m-5">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header bg-info">
                  <h2>SMS App</h2>
                </div>
                <div className="card-body">
                  <input className="form-group" placeholder="Please Enter" type="text" onChange={updateMsg} value={InputMsg} maxLength={msgLimit}/>
                </div>
                <div className="card-footer">
                  <p>SMS Limit-  {msgLimit-InputMsg.length}/20</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default SmsApp;