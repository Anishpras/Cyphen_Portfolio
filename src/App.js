import "./Styles/App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
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
