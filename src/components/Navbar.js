import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/" className="active">
            <img
              className="imageEdit"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBlJmMJNSX57Oc7mfB0hXdcHcVFIxz5RH76Dl0A8Yd5RRzEeI0eBHKZ3KdkMW40FLIoXQ&usqp=CAU"
              alt=""
            />
          </Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
