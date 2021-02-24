import React, { useState } from 'react';

let IntChild=(props)=>
{

    let [cData, setcData] = useState("")

    let inputValue =(event)=>
    {
        setcData(
            props.receiveData(event.target.value)
        )
    }
    
    return(
        <section>
            <div className="container bg-warning text-white text-center">
                <div className="row">
                    <div className="col">
                        <h2>Child Component</h2>
                        <input type="text" onChange={inputValue}/> 
                        <p>{props.pData}</p>     
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IntChild;