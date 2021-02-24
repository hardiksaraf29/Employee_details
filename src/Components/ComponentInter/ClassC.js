import userEvent from '@testing-library/user-event';
import React, { useContext } from 'react';
import { UserContext } from '../ContextApp/Context';

let ClassC = (props) => {

    let employee = useContext(UserContext);

    return (
        <React.Fragment>
            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card bg-success">
                                <div className="card-body text-center text-white">
                                    <h2>Class C</h2>
                                    <pre>{JSON.stringify(employee)}</pre>
                                    {/* <pre>{JSON.stringify(props.user)}</pre> */}
                                    {/* <userEvent.Consumer> */}
                                    {/* </userEvent.Consumer> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ClassC;