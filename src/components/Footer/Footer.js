import React from "react";
import "./style.css";

function Footer(props) {
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button onClick={() => props.handleFirstNameClick()} type="button" className="btn btn-primary">Sort First Name</button>
            <button onClick={() => props.handleLastNameClick()} type="button" className="btn btn-light">Sort Last Name</button>
            <button onClick={() => props.handlePhoneNumberClick()} type="button" className="btn btn-primary">Sort Phone Number</button>
        </div>
    )
}

export default Footer;