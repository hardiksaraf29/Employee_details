import React, {useState} from 'react';

let ShowPassword = () => {

  let [inputType, setType] = useState("password");

  let changeType =(event)=>
  {
    if(event.target.checked) {
      setType(inputType = "text");
    }    
    else{setType(inputType = "password")}
  }

  return (
    <React.Fragment>
      <section>
        <div className="container m-5">
          <div className="row">
            <div className="col-md-7">
              <div className="card">
                <div className="card-header bg-light">
                  <h3>Show Password Form</h3>
                </div>
                <form className="m-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input className="form-control" type={inputType} placeholder="Enter Password"/>
                      </div>
                    </div>
                    <div className="col-md-6 mt-2">
                      <input className="form-check-input" id="showPassword" type="checkbox" onChange={changeType}/>
                      <label for="showPassword" className="form-check-label">Show Password</label>
                    </div>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default ShowPassword;