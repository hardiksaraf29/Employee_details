import React, { useState } from 'react';

let LoginLogoutcard = () => {

    let [islogin, setLogin] = useState(null);

    let login = () => {
        setLogin(
            islogin = true
        )
    }

    let logout = () => {
        setLogin(
            islogin = false
        )
    }

    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(islogin)}</pre> */}
            <section>
                <div className="container m-5">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header bg-primary text-white">
                                    <h3>Authenticate Card</h3>
                                </div>

                                <div className="card-body">
                                    {
                                        islogin ? 
                                        (<React.Fragment>
                                                <button className="btn btn-danger" onClick={logout}>Logout</button>
                                        </React.Fragment>) :
                                        (<React.Fragment>
                                                <button className="btn btn-success" onClick={login}>Login</button>
                                        </React.Fragment>)                                             
                                    }

                                    {
                                        islogin  ?
                                        (<React.Fragment>
                                            <h3 className="text-success">Welcome Hardik</h3>
                                            <p>Qui quis qui anim eu velit sit ea officia aute amet. Non excepteur pariatur est ea proident et quis dolor ut consectetur irure nulla. Magna officia eiusmod laboris cupidatat commodo mollit ex mollit duis tempor pariatur deserunt labore. Est nulla nostrud et aliqua.</p>
                                        </React.Fragment>) :

                                        (<React.Fragment>
                                            <h3 className="text-warning">Welcome Guest User</h3>
                                            <p>Qui quis qui anim eu velit sit ea officia aute amet. Non excepteur pariatur est ea proident et quis dolor ut consectetur irure nulla. Magna officia eiusmod laboris cupidatat commodo mollit ex mollit duis tempor pariatur deserunt labore. Est nulla nostrud et aliqua.</p>
                                        </React.Fragment>)
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default LoginLogoutcard;