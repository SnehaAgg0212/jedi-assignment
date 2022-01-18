import React, {Component} from 'react';
import  './App.css';
import Form from './Form'

class Student extends Component {
 
    render(){
  return (
          <div className="App">
             <header className = "App-header">
          Welcome Dear Student!
          Enter your details here
          
               <Form />
          <br/>
          <br/>
          
              
                
              <a
                className="App-link"
                href="http://examination.igdtuw.ac.in/Examination_v2/users/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Proceed towards logIn
              </a>
              </header>
          </div>
  );
}
}
export default Student;
