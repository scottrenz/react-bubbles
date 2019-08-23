import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import SaveColor from "./components/SaveColor";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {
  const [colorList, setColorList] = useState([]);
  
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/protected" component={BubblePage} />

        {/* 
        
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>

    </Router>
  );
}

export default App;
