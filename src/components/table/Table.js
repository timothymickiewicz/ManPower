import React from "react";
import "./style.css";

function Table(props) {
    console.log(props.searchResults);
    if (props.searchResults.length === 0) {
        return (
            <ul className="list-group list-group-flush">
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
    else if (props.searchResults) {
        return (
            <ul className="list-group list-group-flush">
              {props.searchResults.map((resultIndex, index) => (
                <li key={resultIndex} className="list-group-item">
                  <img alt="Employee" src={props.employees[resultIndex].picture.thumbnail} className="img-fluid" />
                  <p> {props.employees[resultIndex].name.first + ' ' + props.employees[resultIndex].name.last} </p>
                  <p> {props.employees[resultIndex].email} </p>
                  <p> {props.employees[resultIndex].phone} </p>
                </li>
              ))}
            </ul>
        );
    }
}

export default Table;

