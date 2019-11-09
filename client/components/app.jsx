import React, {Component} from 'react';
import Header from './header';
import axios from 'axios';
import SearchBar from './searchcomp'
import StockList from '../container/StockList.jsx'
import StockPopUp from './stockpopup'

class App extends Component{
  constructor(props){
    super(props);
      this.state={
        enteredUsername:'',
        enteredPassword:'',
        name:'',
        isPicked: false,
        companyName:''
        }
        this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
        this.nameChangeHandler = this.nameChangeHandler.bind(this);
        this.SignupClick = this.SignupClick.bind(this);
        this.LoginClick = this.LoginClick.bind(this);
        this.togglePopup = this.togglePopup.bind(this);
    }
    SignupClick(){
        axios.post('/user/signup',{
            'username':this.state.enteredUsername,
            'password': this.state.enteredPassword
        })
    }
    LoginClick(){
        axios.get('/user/login',{
            'username': this.state.enteredUsername,
            'password': this.state.enteredPassword
        })
    }
    passwordChangeHandler(event){
        event.preventDefault();
        this.setState({enteredPassword: event.target.value});
    }
    usernameChangeHandler(event){
        event.preventDefault();
        // console.log(event.target.value);
        this.setState({enteredUsername: event.target.value});
    }
    nameChangeHandler(event){
        event.preventDefault();
        this.setState({name: event.target.value});
    }
    togglePopup(newname){
        if(this.state.isPicked == false){
            this.setState({'isPicked':true,'companyName':newname});
        }
        else{
            this.setState({'isPicked':false});
        }
    }
    render(){
        console.log(this.state.name);
        let stockRender;
        if(this.state.isPicked){
            stockRender= (
                <StockPopUp companyName={this.state.companyName} closePopup ={this.togglePopup}/>
            )
        }
    return(
        <div>
    
            <Header SignupClick = {this.SignupClick} LoginClick ={this.LoginClick} passwordChangeHandler ={this.passwordChangeHandler} usernameChangeHandler ={this.usernameChangeHandler} enteredUsername = {this.state.enteredUsername} enteredPassword={this.state.enteredPassword}/>
            <SearchBar name={this.state.name} nameChangeHandler={this.nameChangeHandler}/>
            {stockRender}
            <StockList name={this.state.name} togglePopup={this.togglePopup}/>
        </div>
    )
  }
}
export default App;
