import React, {Component} from 'react';
import Header from './header';
import axios from 'axios';
import SearchBar from './searchcomp'
import StockList from '../container/StockList.jsx'
import StockPopUp from './StockPopup'

class App extends Component{
  constructor(props){
    super(props);
      this.state={
        enteredUsername:'',
        enteredPassword:'',
        name:'',
        isPicked: false,
        companyName:'',
        userInfo: {
          favorites: [],
        },
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
      fetch('/user/login',{
        method: 'POST', 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email_address: this.state.enteredUsername,
          password: this.state.enteredPassword
        })
      })
      .then(body => body.json())
      .then(body => {
        this.setState({userInfo: body});
      });
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
    togglePopup(newname, newSymbol){
      console.log('app line 65', newname, newSymbol);
      if(this.state.isPicked == false){
        this.setState({'isPicked':true,'companyName':newname, 'companySymbol': newSymbol});
      }
      else{
        this.setState({'isPicked':false});
      }
    }
    render(){
      console.log('app line 74',this.state.name);
    return(
      <div>
        <Header SignupClick = {this.SignupClick} LoginClick ={this.LoginClick} passwordChangeHandler ={this.passwordChangeHandler} usernameChangeHandler ={this.usernameChangeHandler} enteredUsername = {this.state.enteredUsername} enteredPassword={this.state.enteredPassword}/>
        <SearchBar name={this.state.name} nameChangeHandler={this.nameChangeHandler}/>
        {this.state.isPicked ? <StockPopUp userName= {this.state.userInfo.email_address} symbol ={this.state.companySymbol} companyName={this.state.companyName} closePopup ={this.togglePopup}/> : null}
        <StockList favList={this.state.userInfo.favorites} name={this.state.name} togglePopup={this.togglePopup}/>
      </div>
    )
  }
}
export default App;
