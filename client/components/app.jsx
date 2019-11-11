import React, {Component} from 'react';
import Header from './header';
import axios from 'axios';
import PopupGraph from './popUpGraph.jsx'
import SearchBar from './searchcomp'
import StockList from '../container/StockList.jsx'
import StockPopUp from './stockpopup'
import CanvasJSReact from './canvasjs.react';
// var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 

var dataPoints =[];
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
                  <div id="chartContainer" style={{height: 360 + "px", width: 100 + "%"}}>
      </div>

            {/* <PopupGraph 
            
            /> */}
            <Header SignupClick = {this.SignupClick} LoginClick ={this.LoginClick} passwordChangeHandler ={this.passwordChangeHandler} usernameChangeHandler ={this.usernameChangeHandler} enteredUsername = {this.state.enteredUsername} enteredPassword={this.state.enteredPassword}/>
            <SearchBar name={this.state.name} nameChangeHandler={this.nameChangeHandler}/>
            {stockRender}
            <StockList name={this.state.name} togglePopup={this.togglePopup}/>
        </div>
    )
  }

  componentDidMount() {
    var chart = new CanvasJS.Chart("chartContainer", {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark1", // "light1", "dark1", "dark2"
			title:{
				text: "Bounce Rate by Week of Year"
			},
			axisY: {
				title: "Price",
				includeZero: false,
				prefix: "$"
			},
			axisX: {
				title: "Week of Year",
				prefix: "W",
				interval: 2
			},
			data: [{
				type: "line",
				toolTipContent: "Week {x}: ${y}",
				dataPoints: [
					{ x: 1, y: 64 },
					{ x: 2, y: 61 },
					{ x: 3, y: 64 },
					{ x: 4, y: 62 },
					{ x: 5, y: 64 },
					{ x: 6, y: 60 },
					{ x: 7, y: 58 },
					{ x: 8, y: 59 },
					{ x: 9, y: 53 },
					{ x: 10, y: 54 },
					{ x: 11, y: 61 },
					{ x: 12, y: 60 },
					{ x: 13, y: 55 },
					{ x: 14, y: 60 },
					{ x: 15, y: 56 },
					{ x: 16, y: 60 },
					{ x: 17, y: 59.5 },
					{ x: 18, y: 63 },
					{ x: 19, y: 58 },
					{ x: 20, y: 54 },
					{ x: 21, y: 59 },
					{ x: 22, y: 64 },
					{ x: 23, y: 59 }
				]
			}]
        })
    
chart.render();
}
}
export default App;
