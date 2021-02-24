import React, { useState } from 'react';

let AdChild = (props) => {

    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(details)}</pre> */}
            <section>
                <div className="container m-5">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-primary text-white text-center">
                                    <h2>Server Side</h2>
                                </div>
                                <div className="card-body">
                                    <form >

                                        <div className="form-group-sm">
                                            <label for="priceInput">Total</label>
                                            <input className="form-control"
                                                type="number"
                                                id="priceInput"
                                                name="price"
                                                value={props.value}
                                            />

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default AdChild; 