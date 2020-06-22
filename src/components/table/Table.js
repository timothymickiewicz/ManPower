import React from "react";
import "./style.css";

function Table(props) {
    if (props.employees !== {}) {
        return (
            <ul className="list-group list-group-flush table">
              {Object.keys(props.employees).map((employee, index) => (
                <li key={employee} className="list-group-item">
                  <img alt="Employee" src={props.employees[employee].picture.thumbnail} className="img-fluid" />
                  <p> {props.employees[employee].name.first + ' ' + props.employees[employee].name.last} </p>
                  <p> {props.employees[employee].email} </p>
                  <p> {props.employees[employee].phone} </p>
                </li>
              ))}
            </ul>
        );
    }
}

export default Table;