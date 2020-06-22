import React from "react";
import "./style.css";

function Search(props) {
    return (
        <div class="input-group">
            <div class="input-group-prepend">
                    <span role='img' aria-label='search icon' class="input-group-text">&#x1F50E;</span>
            </div>

            <input type="text" aria-label="Search" class="form-control" />

            <div class="input-group-append">
                    <span role='img' aria-label='search icon' class="input-group-text">&#x1F50D;</span>
            </div>
        </div>
    )
}

export default Search;