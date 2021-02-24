import React, { useState } from 'react';

let SelectCar = () => {

  let [carName, setCar] = useState("")
  let selectOption=(event)=>
  {
    setCar(carName = event.target.value)
  }
  return (
    <React.Fragment>
      <section>
        <div className="container m-5">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header bg-warning">
                  <h3>Select the Car Brand</h3>
                </div>
                <div className="card-body">
                  <select onChange={selectOption}>
                    <option value="Please select" >--Select--</option>
                    <option value="Hyndai">Hyundai</option>
                    <option value="Maruti Suzuki">Maruti Suzuki</option>
                    <option value="Tata">Tata</option>
                    <option value="Renault">Renault</option>
                  </select>
                </div>
                <div className="card-footer">
                  <p>{carName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default SelectCar;
