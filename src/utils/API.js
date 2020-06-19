import React from 'react';

import axios from 'axios';

export default class Employees extends React.Component {
  state = {
    employees: []
  }

  getRandomEmployees = function() {
    return axios.get("https://dog.ceo/api/breeds/image/random").then(res => {
            const employees = res.data;
            this.setState({ employees });
          });
  }
  getEmployeeByName = function(employee) {
    return axios.get("https://dog.ceo/api/breed/" + Employees + "/images").then(res => {
      const employees = res.data;
      this.setState({ employees });
    });;
  }
  getEmployeesList = function() {
    return axios.get("https://dog.ceo/api/breeds/list").then(res => {
      const employees = res.data;
      this.setState({ employees });
    });;
  }
  // componentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       const persons = res.data;
  //       this.setState({ persons });
  //     })
  // }

  // render() {
  //   return (
  //     <ul>
  //       { this.state.persons.map(person => <li>{person.name}</li>)}
  //     </ul>
  //   )
  // }
}