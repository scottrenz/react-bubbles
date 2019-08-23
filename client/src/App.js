import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import SaveColor from "./components/SaveColor";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  function EraseToken (props) {
    localStorage.setItem('token','')
console.log('this is',props)
props.history.push('/');
return <div>Good Bye</div>
  }
  return (
    <div className="App">
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
        <PrivateRoute exact path="/protected" component={BubblePage} />

        {/* 
        
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>

    </Router>
    </div>
  );
}

export default App;

