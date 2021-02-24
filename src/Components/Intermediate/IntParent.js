import React, { useState } from 'react';
import IntChild from './IntChild'

let IntParent=()=>
{

    let [pData, setpData] = useState("");
    let [receiveValue, setcData] = useState("")

    let receiveData =(value)=>
    {   
        setcData(
            receiveValue = value
        )
    } 

    let inputValue=(event)=>
    {
        setpData(
            pData =event.target.value)
    }

    
    return(
        <section>
            <div className="container bg-success m-3 text-white p-2 text-center mt-5">
                <div className="row">
                    <div className="col">
                        <h2>Parent Component</h2>
                        <input type="text" onChange={inputValue}/>
                        <p>{receiveValue}</p>
                        <IntChild receiveData={receiveData}
                                    pData={pData}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntParent;