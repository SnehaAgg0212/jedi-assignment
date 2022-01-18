import React from 'react';

export default class From extends React.Component{
    state = {
        FirstName:"",
        LastName:"",
         emailId:"",
        AadharId:"",
    }
    
    change = e => {
        this.setState({
                      [e.target.name]: e.target.value
                      });
    }
    
    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    };
    
   
    render(){
        return(
               <form>
               <input
               name = "FirstName"
               placeholder='First_Name'
               value={this.state.FirstName}
               onChange={e => this.change(e)} />
            
               
        <br/>
        
        <input
        name = "LastName"
        placeholder='Last_Name'
        value={this.state.LastName}
        onChange={e => this.change(e)} />
       
        
        <br/>
        
        <input
        name = "emailId"
        placeholder='email ID'
        value={this.state.emailId}
        onChange={e => this.change(e)} />
        
        <br/>
        
        <input
        name = "AadharId"
        placeholder='Aadhar Card No.'
        value={this.state.AadharId}
        onChange={e => this.change(e)} />
               <br/>
               <button onClick={e => this.onSubmit(e)}>Submit It</button>
        </form>
        );
       
    }
}
