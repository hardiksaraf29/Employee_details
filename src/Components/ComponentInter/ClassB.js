import React from 'react';
import ClassC from './ClassC';

let ClassB = (props) => {
    return (
        <React.Fragment>
            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card bg-info">
                                <div className="card-body text-center text-white">
                                    <h2>Class B</h2>
                                    <pre>{JSON.stringify(props.user)}</pre>
                                    <ClassC/>
                                    {/* <ClassC user={props.user}/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ClassB;