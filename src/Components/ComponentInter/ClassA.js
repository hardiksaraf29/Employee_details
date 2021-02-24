import React from 'react';
import ClassB from './ClassB';

let ClassA = (props) => {
    return (
        <React.Fragment>
            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card bg-primary">
                                <div className="card-body text-center text-white">
                                    <h2>Class A</h2>
                                    <pre>{JSON.stringify(props.user)}</pre>
                                    <ClassB/>
                                    {/* <ClassB  user={props.user}/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ClassA;