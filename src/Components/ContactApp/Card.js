import React, { useState } from 'react';
import './Card.css';

let Card = (props) => {

    
    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-primary text-center text-white">
                                    <h3>User Name</h3>
                                </div>
                                <div className="card-body">
                                    <img src="https://i.pravatar.cc/150?img=4" id="userImg" className="list-group-item m-auto" />
                                    <ul className="list-group bg-primary">
                                        <li className="list-group-item list-group-item-info">Name: {props.UserData.name} </li>
                                        <li className="list-group-item list-group-item-info">Email: {props.UserData.email}</li>
                                        <li className="list-group-item list-group-item-info">Phone: {props.UserData.phone}</li>
                                        <li className="list-group-item list-group-item-info">location: {props.UserData.location}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Card;