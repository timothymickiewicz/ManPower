import axios from "axios";

// Setting up CORS access configuration
const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }
};

export default {
  getEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=20", config)
  }
};