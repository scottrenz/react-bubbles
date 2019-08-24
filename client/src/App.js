import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {
  function EraseToken (props) {
    localStorage.setItem('token','')
props.history.push('/');
return <div>Good Bye</div>
  }
  return (
    <main>
    <Router>
      <div>
        <ul>
        <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
          <li>
            <Link to="/protected">Colors</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" component={Login} />
        <Route path="/logout" component={EraseToken} />
        <PrivateRoute path="/protected" component={BubblePage} />

        {/* 
        
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>

    </Router>
    </main>
  );
}

export default App;

