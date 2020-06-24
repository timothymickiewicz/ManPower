import React, { Component } from "react";
import API from "../utils/API";
import Table from '../components/table/Table';
import Loader from '../components/loader/Loader';
import Search from '../components/search/Search';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Anime from 'react-anime';
import "./style.css";

class Main extends Component {
    constructor() {
        super();

        this.state = {
            search: "",
            employees: {},
            results: [],
            isLoading: true,
            firstNameRender: false,
            lastNameRender: false,
            phoneNumberRender: false
          };

          this.handleFirstNameClick = this.handleFirstNameClick.bind(this);
          this.handleLastNameClick = this.handleLastNameClick.bind(this);
          this.handlePhoneNumberClick = this.handlePhoneNumberClick.bind(this);
    }


    // When the component mounts, set state.employees to all employees
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
                return this.state.employees[employee].name.first.includes(this.state.search) === true || this.state.employees[employee].name.last.includes(this.state.search) === true || this.state.employees[employee].email.includes(this.state.search) === true || this.state.employees[employee].phone.includes(this.state.search) === true || this.state.employees[employee].location.state.includes(this.state.search) === true || this.state.employees[employee].location.city.includes(this.state.search) === true
            })
            this.setState({ results: searchResults})
        }, 100)
    };

    handleFirstNameClick() {
        // if this.state.firstNameRender is true, set to false and sort first name z-a
        if (this.state.firstNameRender) {
            this.setState({ 
                firstNameRender: false, 
                lastNameRender: false, 
                phoneNumberRender: false  
            })
            this.state.employees.sort(function(a, b){
                return b.name.first.localeCompare(a.name.first);
            })
        }
        // if this.state.firstNameRender is false, set to true and sort by first name a-z
        else if (!this.state.firstNameRender) {
            this.setState({ 
                firstNameRender: true, 
                lastNameRender: false, 
                phoneNumberRender: false 
            })
            this.state.employees.sort(function(a, b){
                return a.name.first.localeCompare(b.name.first);
            })
        }
    }

    handleLastNameClick() {
        // if this.state.lastNameRender is true, set lastNameRender to false and sort z-a
        if (this.state.lastNameRender) {
            this.setState({ 
                firstNameRender: false, 
                lastNameRender: false, 
                phoneNumberRender: false  
            }) 
            this.state.employees.sort(function(a, b){
                return b.name.last.localeCompare(a.name.last);
            })
        }
        // if this.state.lastNameRender is false, set lastNameRender to true and sort a-z
        else if (!this.state.lastNameRender) {
            this.setState({ 
                firstNameRender: false, 
                lastNameRender: true, 
                phoneNumberRender: false 
            })
            this.state.employees.sort(function(a, b){
                return a.name.last.localeCompare(b.name.last);
            })
        }
    }

    handlePhoneNumberClick() {
        // if this.state.phoneNumberRender is true, set to false and sort phone numbers 9-0
        if (this.state.phoneNumberRender) {
            this.setState({ 
                firstNameRender: false, 
                lastNameRender: false, 
                phoneNumberRender: false  
            }) 
            this.state.employees.sort(function(a, b){
                return b.phone.localeCompare(a.phone);
            })
        }
        // if this.state.phoneNumberRender is false, set to true and sort phone numbers 0-9
        else if (!this.state.phoneNumberRender) {
            this.setState({ 
                firstNameRender: false, 
                lastNameRender: false, 
                phoneNumberRender: true 
            })
            this.state.employees.sort(function(a, b){
                return a.phone.localeCompare(b.phone);
            })
        }
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
                            search={this.state.search}
                            firstNameSort={this.state.firstNameRender}
                            lastNameSort={this.state.lastNameRender}
                            phoneNumberSort={this.state.phoneNumberRender}
                        />
                    </div>
                    {/* Check the value of the search bar, if empty then fade in the footer buttons and display them, else fade them out and display nothing to be inaccessible */}
                    {this.state.search.trim() === "" ? (                    
                    <Anime 
                    easing='easeInExpo'
                    duration={2000}
                    delay='0'
                    targets='.btn-group'
                    opacity= '100'
                    begin= {() => {
                        return document.querySelector('.btn-group').style.removeProperty( 'display' );
                    }}>
                        <Footer
                            checkSearch={this.state.search}
                            handleFirstNameClick={this.handleFirstNameClick}
                            handleLastNameClick={this.handleLastNameClick}
                            handlePhoneNumberClick={this.handlePhoneNumberClick}
                            firstNameRender={this.state.firstNameRender}
                            lastNameRender={this.state.lastNameRender}
                            phoneNumberRender={this.state.phoneNumberRender}
                        />
                    </Anime>) : (
                    <Anime 
                    easing='easeOutExpo'
                    duration={1000}
                    delay='0'
                    targets='.btn-group'
                    opacity='0'
                    complete= {() => {
                        return document.querySelector('.btn-group').style.display = 'none';
                    }}>
                        <Footer
                            handleFirstNameClick={this.handleFirstNameClick}
                            handleLastNameClick={this.handleLastNameClick}
                            handlePhoneNumberClick={this.handlePhoneNumberClick}
                            firstNameRender={this.state.firstNameRender}
                            lastNameRender={this.state.lastNameRender}
                            phoneNumberRender={this.state.phoneNumberRender}
                        />
                    </Anime>)}
                </div>) 
            }
        </div>
    );
  }
}

export default Main;