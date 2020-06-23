import React, { Component } from "react";
import API from "../utils/API";
import Table from '../components/table/Table';
import Loader from '../components/loader/Loader';
import Search from '../components/search/Search';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer'
import "./style.css";

class Main extends Component {
    constructor() {
        super();

        this.state = {
            search: "",
            employees: {},
            results: [],
            error: "",
            isLoading: true,
            firstNameRender: false,
            lastNameRender: false,
            phoneNumberRender: false
          };

          this.handleFirstNameClick = this.handleFirstNameClick.bind(this);
          this.handleLastNameClick = this.handleLastNameClick.bind(this);
          this.handlePhoneNumberClick = this.handlePhoneNumberClick.bind(this);
    }


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
            return this.state.employees[employee].name.first.includes(this.state.search) === true || this.state.employees[employee].name.last.includes(this.state.search) === true || this.state.employees[employee].email.includes(this.state.search) === true || this.state.employees[employee].phone.includes(this.state.search) === true
        })
        this.setState({ results: searchResults})
    }, 100)
  };

    handleFirstNameClick() {
        this.setState({ firstNameRender: true })
        this.setState({ lastNameRender: false })
        this.setState({ phoneNumberRender: false })
        this.state.employees.sort(function(a, b){
            return a.name.first.localeCompare(b.name.first);
        })
    }
    handleLastNameClick() {
        this.setState({ firstNameRender: false })
        this.setState({ lastNameRender: true })
        this.setState({ phoneNumberRender: false })
        this.state.employees.sort(function(a, b){
            return a.name.last.localeCompare(b.name.last);
        })
    }
    handlePhoneNumberClick() {
        this.setState({ firstNameRender: false })
        this.setState({ lastNameRender: false })
        this.setState({ phoneNumberRender: true })
        this.state.employees.sort(function(a, b){
            return a.phone.localeCompare(b.phone);
        })
    }

  render() {
    return (
        <div className="card">
            {/* Set loader if page not loaded, else render content */}
            {this.state.isLoading ? 
                (<Loader />) : 
                (<div className="container">
                    <div className="card-body">
                        <Header />
                        <Search
                            handleInputChange={this.handleInputChange}
                            results={this.state.search}
                        />
                        <Table 
                            employees={this.state.employees}
                            searchResults={this.state.results}
                            firstNameSort={this.state.firstNameRender}
                            lastNameSort={this.state.lastNameRender}
                            phoneNumberSort={this.state.phoneNumberRender}
                        />
                    </div>
                    <Footer
                        handleFirstNameClick={this.handleFirstNameClick}
                        handleLastNameClick={this.handleLastNameClick}
                        handlePhoneNumberClick={this.handlePhoneNumberClick}
                        firstNameRender={this.firstNameRender}
                        lastNameRender={this.lastNameRender}
                        phoneNumberRender={this.phoneNumberRender}
                    />
                </div>) 
            }
        </div>
    );
  }
}

export default Main;