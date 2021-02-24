import { React, useEffect, useState } from "react";

let DigitalWatch = () => {

    let [currentTime, setTime]= useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        let Timer = setInterval(()=>{
            setTime(new Date().toLocaleTimeString());
        }, 1000)

        return()=>{
            clearInterval(Timer)
        }
    },[])

    return (
        <>
            <section>
                <div className="container m-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header text-center">
                                    <h2>Digital Watch</h2>
                                </div>
                                <div className="card-body">
                                    <h1>{currentTime}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default DigitalWatch;