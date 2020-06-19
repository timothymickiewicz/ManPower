import React from "react";
import "./style.css";

// Filters for employees of the same name
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="employee">Employee Name:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          type="text"
          className="form-control"
          placeholder="Type in an employee name"
          id="employee"
        />
        <datalist id="employees">
          {props.employees.filter(employee => this.input.value === employee
            // <option value={employee} key={employee} />
          )}
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
