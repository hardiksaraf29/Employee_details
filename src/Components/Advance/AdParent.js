import React, { useState } from 'react';
import AdChild from './AdChild';

let AdParent = (props) => {

    let [details, setPrice] = useState(
        {
            price:0,
            gst:0,
            total:0
        }
    )

    let calculate=(event)=>
    {
        setPrice({
            ...details,
            [event.target.name]:(event.target.value)
        })
    }

    let submitAns=(event)=>
    {
        setPrice(
            {
                ...details,
                total:Number(details.price)+(details.price)*(details.gst)/100
            }
            )
            event.preventDefault();
            console.log(details.total)
            props.receiveData(details.total)

    }



    return (
        <React.Fragment>
            <pre>{JSON.stringify(details)}</pre>
            <section>
                <div className="container m-5">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-primary text-white text-center">
                                    <h2>Client Side</h2>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={submitAns}>

                                        <div className="form-group-sm">
                                            <label for="priceInput">Price</label>
                                            <input className="form-control"
                                                type="number"
                                                id="priceInput"
                                                name="price"
                                                onChange={calculate}
                                            />
                                        </div>

                                        <div className="form-group-sm">
                                            <label for="GSTinput">GST</label>
                                            <input className="form-control"
                                                type="number"
                                                id="GSTinput"
                                                name="gst"
                                                onChange={calculate}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <button className="form-control"
                                                    type="submit"
                                                    className="btn btn-success"
                                            > Submit </button>
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

export default AdParent; 