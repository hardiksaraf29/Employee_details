import React, { useState } from 'react';

let ShowUsername=()=>
{
    let [inputValue, setValue] = useState("")
    
    let updateValue =(event)=>
    {
        setValue(inputValue = event.target.value)
    }


    return (
        <React.Fragment>
            <section>
                <div className="container m-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <div className="card-header bg-info">
                                    <h2>User Name</h2>
                                </div>
                                    <div className="card-body">
                                        <input className="form-group" placeholder="Please Enter" type="text" onChange={updateValue}/>
                                    </div>  
                                    <div className="card-footer">
                                        <p>{inputValue}</p>

                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}   

export default ShowUsername;