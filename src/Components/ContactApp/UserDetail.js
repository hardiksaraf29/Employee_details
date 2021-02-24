import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

let UserDetail = (props) => {

    let [userDetail, setUsers] = useState([]);
    let [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        let dataUrl = "https://gist.githubusercontent.com/hardiksaraf29/71a8309ba5619d7c67e544ca4419af88/raw/df00b97723823bf9cc0e0b8a106b0c1580ada88d/UserData";
        Axios.get(dataUrl).then(
            (response) => {
                setUsers(response.data)
            }
        ).catch(
            (error) => {
                setErrorMsg(errorMsg = error)
            }
        )

    }, [])

    let sendData =(user)=>
    {
        props.receiveData(user);
        // console.log(user)
    }

    return (
        <React.Fragment>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <table className="table">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th scope="col">S.No.</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">phone</th>
                                        <th scope="col">Location</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        userDetail.map((user) => {
                                            return (
                                                <tr>
                                                    <td className="table-info">{user.id}</td>
                                                    <td className="table-info"><a onClick={sendData.bind(this, user)}>{user.name}</a></td>
                                                    <td className="table-info">{user.email}</td>
                                                    <td className="table-info">{user.phone}</td>
                                                    <td className="table-info">{user.location}</td>
                                                </tr>
                                            )
                                        })

                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default UserDetail;
