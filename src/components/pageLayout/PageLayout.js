import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function PageLayout() {
  return (
    <div className="card">
        <div className="card-body">
            <h5 class="card-title">Manpower</h5>
            <p class="card-text">Track your manpower!</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
        </ul>
    </div>
  );
}

export default PageLayout;