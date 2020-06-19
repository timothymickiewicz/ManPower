import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Directory from "./pages/Directory";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Directory} />
          <Route exact path="/directory" component={Directory} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
