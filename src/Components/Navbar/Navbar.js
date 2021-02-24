import React from 'react';
import { Link } from 'react-router-dom';

let Navbar = () => {

    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top ">
                <a className="navbar-brand "><Link className="text-white" to='/'> <h2 className="text-primary">REACT PROJECT</h2> </Link></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myData" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ml-auto " id="myData">
                    <ul className="navbar-nav ml-auto navbar-right">
                        {/* <a className="nav-item nav-link"> <Link className="nav-link" to='/'>Wish Message</Link><span className="sr-only">(current)</span></a> */}
                        {/* <a className="nav-item nav-link"><Link className="nav-link" to='/smsapp'>Sms App</Link></a> */}
                        <a className="nav-item nav-link"><Link className="nav-link" to='/counter'>Counter</Link></a>
                        {/* <a className="nav-item nav-link"><Link className="nav-link" to='/showpassword'>ShowPassword</Link></a> */}
                        {/* <a className="nav-item nav-link"><Link className="nav-link" to='/showusername'>Show Username</Link></a> */}
                        {/* <a className="nav-item nav-link"><Link className="nav-link" to='/table'>Table</Link></a> */}
                        {/* <a className="nav-item nav-link"><Link className="nav-link" to='/selectcar'>Select Car </Link></a> */}
                        <a className="nav-item nav-link"><Link className="nav-link" to='/registrationform'>Registration Form </Link></a>
                        <a className="nav-item nav-link"><Link className="nav-link" to='/LoginLogoutcard'>Auntenticate </Link></a>
                        <a className="nav-item nav-link"><Link className="nav-link" to='/radiocard'>Radio Card </Link></a>
                        <a className="nav-item nav-link"><Link className="nav-link" to='/EmployeeRecord'>EmployeeRecord </Link></a>
                        <a className="nav-item nav-link"><Link className="nav-link" to='/Parent'>Simple </Link></a>
                        <a className="nav-item nav-link"><Link className="nav-link" to='/IntParent'>Intermediate </Link></a>
                        <a className="nav-item nav-link"><Link className="nav-link" to='/AdParent'>Advance </Link></a>

                                                
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;