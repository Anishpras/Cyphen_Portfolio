import "./Styles/App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/contact">
            <Sidebar />
            <Contact/>
          </Route>
        <Route path="/skills">
            <Sidebar />
            <Skills />
          </Route>
          <Route path="/about">
            <Sidebar />
            <About />
          </Route>
          <Route path="/">
            <Sidebar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
