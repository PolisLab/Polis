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
        whichTab: '1',
      }
      this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
      this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
      this.nameChangeHandler = this.nameChangeHandler.bind(this);
      this.SignupClick = this.SignupClick.bind(this);
      this.LoginClick = this.LoginClick.bind(this);
      this.togglePopup = this.togglePopup.bind(this);
      this.favsListChangeHandler = this.favsListChangeHandler.bind(this);
      this.stockListChangeHandler = this.stockListChangeHandler.bind(this);
      this.buysListChangeHandler = this.buysListChangeHandler.bind(this);
    }
    SignupClick(){
      axios.post('/user/signup',{
        'username':this.state.enteredUsername,
        'password': this.state.enteredPassword
      })
    }
    LoginClick(){
      console.log('entered User name is ' ,this.state.enteredUsername);
      console.log('entered password is ' ,this.state.enteredPassword);
      console.log(JSON.stringify({
        email_address: this.state.enteredUsername,
        password: this.state.enteredPassword
      }));
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
      .then(body => console.log(body));
    }
    stockListChangeHandler(){
        console.log('inside here');
        this.setState({whichTab: '1'});
    }
    favsListChangeHandler(){
      console.log('inside there');
        this.setState({whichTab: '2'});
    }
    buysListChangeHandler(){
      console.log('inside this');
        this.setState({whichTab: '3'})
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
      let stockRender;
      // if(this.state.isPicked){
      //   stockRender= (
      
        //   )
        // }
        console.log(this.state.whichTab);
        let content;
        if(this.state.whichTab == '1'){
        content =(<div>{this.state.isPicked ? <StockPopUp symbol ={this.state.companySymbol} companyName={this.state.companyName} closePopup ={this.togglePopup}/> : null}
        <StockList name={this.state.name} togglePopup={this.togglePopup}/></div>)
        }
        else if(this.state.whichTab =='2'){
            content = (<div>
              favorites
            </div>)
        }
        else if(this.state.whichTab == '3'){
          content =(
            <div>
                buys
            </div>)
        }

    return(
      <div>
        <Header SignupClick = {this.SignupClick} LoginClick ={this.LoginClick} passwordChangeHandler ={this.passwordChangeHandler} usernameChangeHandler ={this.usernameChangeHandler} enteredUsername = {this.state.enteredUsername} enteredPassword={this.state.enteredPassword}/>
        <SearchBar whichTab ={this.state.whichTab} buysListChangeHandler={this.buysListChangeHandler} stockListChangeHandler ={this.stockListChangeHandler} favsListChangeHandler={this.favsListChangeHandler} name={this.state.name} nameChangeHandler={this.nameChangeHandler}/>
        {content}
      </div>
    )
  }
}
export default App;
