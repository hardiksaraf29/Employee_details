import React, { useRef, useState } from 'react';
import cardImg from '../Assets/Images/card_3.jpg'

let UseRefCard = () => {

    let imageEl = useRef(null);
    let registerBtn = useRef();
    let update = () => {
        console.log(imageEl.current.src)
    }

    let showButton=(event)=>
    {
        registerBtn.current.disabled = !event.target.checked
    }

    return (
        <React.Fragment>
            <section>
                <div className="container m-5">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="card">
                                <div className="card-header bg-warning">
                                    <h2>UseRefCard Message</h2>
                                </div>
                                <div className="card-body">
                                    <h3>Heading</h3>
                                    <div className="row">
                                        <img ref={imageEl} src={cardImg} alt="Hello" className="img-fluid" />
                                        <form>
                                            <div className="form-check">

                                                <input type="checkbox"
                                                    className="form-check-input"
                                                />
                                                
                                                <label className="form-check-label">Terms And Condition</label>
                                                <button ref={registerBtn} onClick={showButton} className="btn btn-primary text-dark " type="submit" disabled>Click Here</button>
                                            </div>
                                        </form>
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

export default UseRefCard;

