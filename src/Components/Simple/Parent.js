import React, { useState } from 'react';
import Child from './Child';

let Parent =()=>
{
    let ParentMsg="Hello, This is Parent data...";
    let [recieveData, setState] = useState("");
    let [recieveDataB, setButtonData] = useState("");

    let receiveMsg =(value)=>
    {
        setState(value)
    }

    let receiveBtnData=(value)=>
    {
        setButtonData(value)
    }
    return(
        <React.Fragment>
            <div className="container m-5 p-3 text-center bg-warning text-white">
                <h2>Parent Component</h2>
                <p>{recieveData}</p>
                <p>{recieveDataB}</p>
                <Child  ParentMsg={ParentMsg}
                        ChildMsgInput={receiveMsg}
                        ChildMsgButton={receiveBtnData}
                        />
                {/* <pre>{JSON.stringify(receiveMsg)}</pre>
                <pre>{JSON.stringify(recieveData)}</pre> */}
            </div>
        </React.Fragment>
    )
}

export default Parent;