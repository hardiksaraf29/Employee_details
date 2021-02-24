import React, { useState } from 'react';

let EmployeeRecord = () => {

    let [employees, setEmployees] = useState([
        {
            id: 101,
            name: "Aman",
            Email: "Aman@gmail.com",
            Age: 23,
            Designation: "Software-Engineer",
            Location: "Indore"
        },
        {
            id: 102,
            name: "Varun",
            Email: "Varun@gmail.com",
            Age: 25,
            Designation: "Software-Engineer",
            Location: "Indore"
        },
        {
            id: 103,
            name: "Tony",
            Email: "Tony@gmail.com",
            Age: 23,
            Designation: "Software-Engineer",
            Location: "Indore"
        },
        {
            id: 104,
            name: "Aman",
            Email: "Aman@gmail.com",
            Age: 23,
            Designation: "Software-Engineer",
            Location: "Indore"
        },


    ]
    )

    return (
        <section>
            <div className="container-fluid m-5">
                <div className="row">
                    <div className="col-md-7">
                        {
                            employees.map((employee) => {
                                return (
                            <div className="card m-3" key={employee.id}>
                                <div className="card-body bg-secondary" >                                    
                                    <ul class="list-group mt-2">
                                        <li class="list-group-item">
                                            Id: {employee.id}
                                        </li>
                                        <li class="list-group-item">
                                            Name: {employee.name}
                                        </li>
                                        <li class="list-group-item">
                                            Email: {employee.Email}
                                        </li>
                                        <li class="list-group-item">
                                            Age: {employee.Age}
                                        </li>
                                        <li class="list-group-item">
                                            Designation: {employee.Designation}
                                        </li>
                                        <li class="list-group-item">
                                            Location: {employee.Location}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EmployeeRecord;