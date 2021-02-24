import React, { useState } from 'react';

let RegistrationForm = () => {

    let [checkbox, setCheckbox] = useState(null);
    let [userDetail, setUsers] = useState(
        {
            userName: "",
            email: "",
            password: ""
        }
    )

    let update = (event) => {
        setUsers(
            {
                ...userDetail,
                [event.target.name] : event.target.value,
            })
        setCheckbox(
            checkbox = event.target.checked
        )
    }

    let submit =(event)=>
    {   
        if(checkbox == true){
            event.preventDefault();
            console.log(userDetail)
        }
        else{
            event.preventDefault();

            alert("Accept Terms and condition.")
        }
        
    }



    return (
        <React.Fragment>
            <pre>{JSON.stringify(userDetail, checkbox)}</pre>
            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-5">
                            <form onSubmit={submit}>
                                <div className="card">
                                    <div className="card-header bg-warning text-white text-center">
                                        <h1>Registration Form</h1>
                                    </div>

                                    <div className="card-body">
                                        <input
                                            name="userName"
                                            type="text"
                                            onChange={update}
                                            placeholder="Username" className="form-control" /><br />

                                        <input
                                            name="email"
                                            type="email"
                                            onChange={update}
                                            placeholder="Email" className="form-control" /><br />

                                        <input
                                            name="password"
                                            type="password"
                                            onChange={update}
                                            placeholder="Password" className="form-control" />

                                        <div className="row mt-3 ml-3">
                                            <input type="checkbox" className="form-check-input mt-2" onChange={update}/>
                                            <label className="form-check-label">Accept Terms and Conditions.</label>
                                        </div>
                                    </div>

                                    <div className="card-footer">
                                        <input type="submit" className="btn btn-info" />
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )

}

export default RegistrationForm;
