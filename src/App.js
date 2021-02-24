import React, { useState } from 'react';
import './App.css';
import ContactApp from './Components/ContactApp/ContactApp';
import UserData from './Components/UserAxios/UserData';
/////import AdChild from './Components/Advance/AdChild';
//import AdParent from './Components/Advance/AdParent';
////import ClassA from './Components/ComponentInter/ClassA';
//import { UserContext } from './Components/ContextApp/Context';
import userData from './Components/UserAxios/UserData';
import UseRefCard from './Components/UseRefCard';
// import DigitalWatch from './Components/Watch/DigitalWatch';

function App() {

    let [receiveValue, setData] = useState(0)

    let receiveData = (value) => {
        setData(receiveValue = value)
        console.log(receiveValue, value)
    }

    let [user, setUser] = useState(
        {
            name: "Hardik Saraf",
            location: "Indore"
        }
    )

    let [employee, setEmployee] = useState(
        {
            name: "Aman verma",
            location: "Chennai"
        }
        )
        
        return (
            <React.Fragment>
                <UseRefCard/>
            {/* <UserData/> */}
            {/* <ContactApp/> */}
            {/* <pre>{JSON.stringify(receiveValue)}</pre>
          <section>
            <div className="container m-5">
              <div className="row">
                <div className="col-md-6">
                  <AdParent receiveData={receiveData}/>
                </div>
                <div className="col-md-6">
                  <AdChild value={receiveValue}/>
                </div>
              </div>
            </div>
          </section> */}

            {/* <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <div className="card bg-success">
                                <div className="card-body text-center text-white">
                                    <h2>App File</h2>
                                    <pre>{JSON.stringify(user)}</pre>
                                    <ClassA user={user}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section>
                <div className="container m-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card bg-primary">
                                <div className="card-header text-white text-center">
                                    <h2>App</h2>
                                    <pre>{JSON.stringify(employee)}</pre>
                                    <UserContext.Provider value={employee}>
                                        <ClassA />
                                    </UserContext.Provider>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <DigitalWatch/> */}
        </React.Fragment>
    );
}


export default App;

