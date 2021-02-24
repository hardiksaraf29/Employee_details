import userEvent from '@testing-library/user-event';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';

let UserData = () => {

    let [users, setUser] = useState([]);
    let [errorMsg, setErrormsg] = useState("");

    useEffect(() => {
        let dataUrl = "https://jsonplaceholder.typicode.com/users";
        console.log("data is fatch ")
        Axios.get(dataUrl).then(
            (response) => {
                setUser(response.data)
                console.log(response)

            }).catch((error) => {
                setErrormsg(error.errorMsg)
                console.log(error)
            })
    },[])

    return (
        <React.Fragment>
            <section>
                <div className="container m-5">
                    <div className="row">
                        <div className="col">
                            <h1 className="text-success">User Data</h1>
                            <p className="text-info">Laboris id excepteur nostrud labore nostrud labore enim amet cillum exercitation veniam in proident.</p>
                            <table class="table mt-3">
                                <thead class="thead-dark">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">City</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        users.map((user) => {
                                            return (
                                                <tr>
                                                    <th scope="row">{user.id}</th>
                                                    <td>{user.name}</td>
                                                    <td>{user.username}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.address.city}</td>
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

export default UserData;