import React, {Component} from 'react';
import logo from './logo.png';
import { Switch, Route } from "react-router-dom";
import  './App.css';
import Welcome from './Welcome';
import Student from './Student';
import Employee from './Employee';

class App extends Component {
 
    render(){
  return (
          <div className="App">
             <header className = "App-header">
                 <img src={logo} className= "image" alt="logo"/>
          
                 <Switch>
            <Route exact path="/StudentLogin" component={Student} />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/EmployeeLogin" component={Employee} />

          </Switch>
              </header>
          </div>
  );
}
}
export default App;
