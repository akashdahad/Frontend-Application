import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Home from "./views/home";
import Product from "./views/product";

function App() {
  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
