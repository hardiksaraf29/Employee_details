import React, { useState } from 'react';
import './Table.css'

let Table = () => {
    let [qty, setQty] = useState(0);
    let product={
        sNo :101,
        image :"https://images-na.ssl-images-amazon.com/images/I/71EoGntO5bL._SX466_.jpg",
        name : "Smart Watch",
        price : 1500
    }

    let increament = () => {
        setQty(qty + 1)
    }

    let decreament = () => {
        if (qty - 1 > 0) {
            setQty(qty = qty - 1);
        }
        else (setQty(qty = 0))
    }

    return (
        <React.Fragment>
            <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col">
                            <h3>Shopping List</h3>
                            <p>Et nulla occaecat aute qui Lorem.Non nisi incididunt quis nostrud nostrud Lorem aute magna commodo. Sint cupidatat velit in aute sint quis non quis aliqua. Minim sunt nulla minim ut ullamco mollit nostrud ex. Id consequat sint voluptate mollit qui cillum anim non et voluptate dolor .</p>
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr className="text-center">
                                        <th>S.No.</th>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-info">
                                    <tr className="text-center ">
                                        <td className="align-middle">{product.sNo}</td>
                                        <td className="align-middle">
                                            <a href={product.image} target="_blank">
                                                <img src={product.image} width="100" height="70" class="productImg"/>
                                            </a>
                                        </td>
                                        <td className="align-middle">{product.name}</td>
                                        <td className="align-middle px-3">&#8377; {product.price}</td>
                                        <td className="align-middle px-3">
                                            <i onClick={decreament} class="fas fa-minus-square"> </i>
                                            <span> {qty} </span>
                                            <i onClick={increament} class="fas fa-plus-square"> </i>
                                        </td>
                                        <td className="align-middle mx-3">&#8377; {product.price * qty}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Table;