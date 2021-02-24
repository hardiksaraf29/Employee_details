import React from 'react';

let Child =(props)=>
{
    let cText = "Hello, This is child Msg.";
   
    let sendData =()=>
    {
        props.ChildMsgButton(cText)
    }

    let sendInputValue =(event)=>
    {
        props.ChildMsgInput(event.target.value)
    }



    return(
        <React.Fragment>
            <div className="container bg-primary text-center p-3">
                <h2>Child Component</h2>
                <p>{props.ParentMsg}</p>
                <input type="text" onChange={sendInputValue}/>
                <button onClick={sendData}>Click Here</button>
            </div>
            {/* <pre>{JSON.stringify(sendData)}</pre> */}
        </React.Fragment>
    )
}

export default Child;