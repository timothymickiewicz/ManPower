import React from "react";
import "./style.css";

function Table(props) {
    // If nothing entered in the search bar, map everything in the employees prop
    if (props.searchResults.length === 0) {
        return (
            <ul className="list-group">
              {Object.keys(props.employees).map((employee, index) => (
                <li key={employee} className="list-group-item align-center">
                  <img alt="Employee" src={props.employees[employee].picture.large} className="img-fluid float-left" />
                  <p className="float-left split"> {props.employees[employee].name.first + ' ' + props.employees[employee].name.last} </p>
                  <p className="float-right split"> {props.employees[employee].email} </p>
                  <p className="float-right split"> {props.employees[employee].phone} </p>
                </li>
              ))}
            </ul>
        );
    }
    // If something is in the search bar, map the filtered indexes and display from the employees prop
    else if (props.searchResults) {
        return (
            <ul className="list-group">
              {props.searchResults.map((resultIndex, index) => (
                <li key={resultIndex} className="list-group-item align-center">
                  <img alt="Employee" src={props.employees[resultIndex].picture.large} className="img-fluid float-left" />
                  <p className="float-left split"> {props.employees[resultIndex].name.first + ' ' + props.employees[resultIndex].name.last} </p>
                  <p className="float-right split"> {props.employees[resultIndex].email} </p>
                  <p className="float-right split"> {props.employees[resultIndex].phone} </p>
                </li>
              ))}
            </ul>
        );
    }
}

export default Table;

