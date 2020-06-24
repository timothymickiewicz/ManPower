import React from "react";
import "./style.css";

function Footer(props) {
    // Set button text to respond to props values
    let firstNameValue, lastNameValue, phoneNumberValue = "";

    switch(props.firstNameRender) {
        case true:
          firstNameValue = "First Name: Z-A"
          break;
        case false:
          firstNameValue = "First Name: A-Z"
          break;
        default:
          firstNameValue = "Trouble Connecting"
    }

    switch(props.lastNameRender) {
        case true:
          lastNameValue = "Last Name: Z-A"
          break;
        case false:
          lastNameValue = "Last Name: A-Z"
          break;
        default:
          lastNameValue = "Trouble Connecting"
    }

    switch(props.phoneNumberRender) {
        case true:
          phoneNumberValue = "Phone Number: 9-0"
          break;
        case false:
          phoneNumberValue = "Phone Number: 0-9"
          break;
        default:
          phoneNumberValue = "Trouble Connecting"
    }

    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button onClick={() => props.handleFirstNameClick()} type="button" className="btn btn-primary">{firstNameValue}</button>
            <button onClick={() => props.handleLastNameClick()} type="button" className="btn btn-light">{lastNameValue}</button>
            <button onClick={() => props.handlePhoneNumberClick()} type="button" className="btn btn-primary">{phoneNumberValue}</button>
        </div>
    )
}

export default Footer;