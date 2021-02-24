import React, { useState } from 'react';

let RadioCard = () => {
    let [hobby, setHobby] = useState(null)

    let update = (event) => {
        setHobby(
            hobby = event.target.value
        )
    }

    return (
        <React.Fragment>
            <section>
                <pre>{JSON.stringify(hobby)}</pre>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-primary text-center text-white">
                                    <h2>Card Header</h2>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="option"
                                                    onChange={update}
                                                    value="cricket"
                                                />
                                                <label className="form-check-label">Cricket</label>
                                            </div>

                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="option"
                                                    onChange={update}
                                                    value="coding"
                                                />
                                                <label className="form-check-label">Coding</label>
                                            </div>

                                            <div className="form-check">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="option"
                                                    onChange={update}
                                                    value="reading"
                                                />
                                                <label className="form-check-label">Reading</label>
                                            </div>

                                        </div>
                                        <div className="col-md-9">
                                            {
                                                hobby === "cricket" &&
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="card m-1 bg-success animate__animated  animate__heartBeat">
                                                            <div className="card-body text-center">
                                                                <h1>Cricket</h1>
                                                                <p>This is Cricket card</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                hobby === "coding" &&
                                                <div className="row ">
                                                    <div className="col">
                                                        <div className="card m-1">
                                                            <div className="card-body text-center bg-warning animate__animated animate__bounce">
                                                                <h1>coding</h1>
                                                                <p>This is coding card</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                hobby === "reading" &&
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="card m-1">
                                                            <div className="card-body text-center bg-danger animate__animated animate__swing">
                                                                <h1>reading</h1>
                                                                <p>This is reading card</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        </div>
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

export default RadioCard