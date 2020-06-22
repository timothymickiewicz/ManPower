import React, { Component } from "react";
import API from "../utils/API";
import Table from '../components/table/Table';
import Loader from '../components/loader/Loader';
import Search from '../components/search/Search'

class Main extends Component {
  state = {
    search: "",
    employees: {},
    results: [],
    error: "",
    isLoading: true
  };

  // When the component mounts, get a list of all employees
  componentDidMount() {
        this.setState({ isLoading: false });
        API.getEmployees()
            .then(res => {
                this.setState({ employees: res.data.results })
            })
            .catch(err => console.log(err));
  }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
    // Filters search and returns the array indexes of matching results
    setTimeout(() => {
        let searchResults = Object.keys(this.state.employees).filter((employee) => { 
            let first = this.state.employees[employee].name.first;
            let last = this.state.employees[employee].name.last;
            let email = this.state.employees[employee].email;
            let phone = this.state.employees[employee].phone;
            return first.includes(this.state.search) === true || last.includes(this.state.search) === true || email.includes(this.state.search) === true || phone.includes(this.state.search) === true
        })
        this.setState({ results: searchResults})
    }, 100)
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
                        <Search
                            handleInputChange={this.handleInputChange}
                            results={this.state.search}
                        />
                    </div>
                    <Table 
                        employees={this.state.employees}
                        searchResults={this.state.results}
                    />
                </div>) 
            }
        </div>
    );
  }
}

export default Main;