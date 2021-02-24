import React, { useState } from 'react';
import Card from './Card';
import UserDetail from './UserDetail';

let ContactApp =(props)=> {

    let [UserData, setUSerData] = useState("")

    let receiveData =(user)=>
    {
        setUSerData(UserData = user)
    }

    return (
        <React.Fragment>
            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Contact App</h2>
                            <p>Consequat ipsum consectetur magna minim magna nulla amet. Do ipsum excepteur nisi eiusmod tempor et reprehenderit aliqua minim nisi excepteur elit labore pariatur. Commodo et sint adipisicing tempor est cillum labore magna laboris magna. Ea aute veniam mollit ex in sunt nulla aliquip amet dolor incididunt. Non fugiat ipsum aliquip ad consequat ex quis quis est irure labore Lorem adipisicing id. Ad commodo sint in esse id eiusmod eiusmod ex nulla do et Lorem est elit. Eu cupidatat quis fugiat do officia ipsum voluptate adipisicing voluptate esse.</p>
                            <div className="row mt-5">
                                <div className="col-md-8">
                                    <UserDetail receiveData = {receiveData}/>
                                </div>
                                <div className="col-md-4">
                                    <Card UserData = {UserData}/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ContactApp;