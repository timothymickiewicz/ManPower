import React from "react";
import "./style.css";

function Table(props) {
    // If there is something in the search field and nothing returns in the search results, display text
    if (props.search && props.searchResults.length === 0) {
        return (
            <p className="voidSearch">No employees exist with this search criteria. Please try something else.</p>
        )
    }
    // If nothing entered in the search bar, map everything in the employees prop
    else if (props.searchResults.length === 0) {
        return (
            <ul className="list-group">
              {Object.keys(props.employees).map((employee, index) => (
                <li key={employee} className="list-group-item align-center">
                  <img alt="Employee" src={props.employees[employee].picture.large} className="img-fluid float-left" />
                  <p className="float-left split"> {props.employees[employee].name.first + ' ' + props.employees[employee].name.last} </p>
                  <p className="float-left"> {props.employees[employee].location.city + ', ' + props.employees[employee].location.state} </p>
                  <p className="float-right split"> {props.employees[employee].email} </p>
                  <p className="float-right split"> {props.employees[employee].phone} </p>
                </li>
              ))}
            </ul>
        );
    }
    // If something is in the search bar, map the filtered indexes and display from the employees prop
    else if (props.searchResults) {
        console.log(props.searchResults)
        return (
            <ul className="list-group">
              {props.searchResults.map((resultIndex, index) => (
                <li key={resultIndex} className="list-group-item align-center">
                  <img alt="Employee" src={props.employees[resultIndex].picture.large} className="img-fluid float-left" />
                  <p className="float-left split"> {props.employees[resultIndex].name.first + ' ' + props.employees[resultIndex].name.last} </p>
                  <p className="float-left"> {props.employees[resultIndex].location.city + ', ' + props.employees[resultIndex].location.state} </p> 
                  <p className="float-right split"> {props.employees[resultIndex].email} </p>
                  <p className="float-right split"> {props.employees[resultIndex].phone} </p>
                </li>
              ))}
            </ul>
        );
    }
}

export default Table;

