import React from "react";
import "./style.css";

function Search(props) {
    if (props) {
        return (
            <div className="input-group">
                <div className="input-group-prepend">
                        <span role='img' aria-label='search icon' className="input-group-text">&#x1F50E;</span>
                </div>
    
                <input 
                value={props.search}
                onChange={props.handleInputChange} 
                type="text" 
                aria-label="Search" 
                className="form-control"
                name="search"
                placeholder="Start typing to filter results"
                list="results" />
    
                <div className="input-group-append">
                        <span role='img' aria-label='search icon' className="input-group-text">&#x1F50D;</span>
                </div>
            </div>
        )
    }
}

export default Search;