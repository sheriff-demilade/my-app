import Button from "react-bootstrap/Button";
import "./App.css";
import { Fragment } from "react";
import NavBar from "./components/NavBar";
import Cards from "./components/Card";

function App() {
  return (
    <Fragment>
      <div className="App">
        <NavBar />
        <h1 className="text-center pt-5">This is the heading</h1>
        <div className="container d-flex justify-content-between py-5">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
