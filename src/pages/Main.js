import React, { Component } from "react";
import API from "../utils/API";
import Table from '../components/table/Table';
import Loader from '../components/loader/Loader';
import Search from '../components/search/Search'

class Main extends Component {
  state = {
    search: "",
    employees: {},
    error: "",
    isLoading: true
  };

  // When the component mounts, get a list of all employees
  componentDidMount() {
        this.setState({ isLoading: false });
        API.getEmployees()
            .then(res => {
                this.setState({ employees: res.data.results })
                console.log(res.data.results[0].name.first);
            })
            .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
    // Filter employees as they type using search value
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // Filter employees array based on input
  };

  render() {
    return (
        <div className="card">
            {/* Set loader if page not loaded, else render content */}
            {this.state.isLoading ? 
                (<Loader />) : 
                (<div>
                    <div className="card-body">
                        <h5 className="card-title">Manpower</h5>
                        <p className="card-text">Track your manpower!</p>
                        <Search />
                    </div>
                    <Table employees={this.state.employees}/>
                </div>) 
            }
        </div>
    );
  }
}

export default Main;