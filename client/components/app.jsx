import React, {Component} from 'react';
import Header from './header';
import axios from 'axios';
import PopupGraph from './popUpGraph.jsx'
import SearchBar from './searchcomp'
import StockList from '../container/StockList.jsx'
import StockPopUp from './stockpopup'
import CanvasJSReact from './canvasjs.react';

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
        companyName:'',
        whichTab: '1',
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
        content =(<StockList whichTab={this.state.whichTab} name={this.state.name} togglePopup={this.togglePopup}/></div>)
        }
        else if(this.state.whichTab =='2'){
            content = (<div>
              favorites
              <StockList whichTab={this.state.whichTab} name={this.state.name} togglePopup={this.togglePopup}/></div>
            </div>)
        }
        else if(this.state.whichTab == '3'){
          content =(
            <div>
                buys
                <StockList whichTab={this.state.whichTab} name={this.state.name} togglePopup={this.togglePopup}/></div>
            </div>)
        }



    return(
      <div>
        <div id="chartContainer" style={{height: 360 + "px", width: 100 + "%"}}></div>
        <Header SignupClick = {this.SignupClick} LoginClick ={this.LoginClick} passwordChangeHandler ={this.passwordChangeHandler} usernameChangeHandler ={this.usernameChangeHandler} enteredUsername = {this.state.enteredUsername} enteredPassword={this.state.enteredPassword}/>
        <SearchBar whichTab ={this.state.whichTab} buysListChangeHandler={this.buysListChangeHandler} stockListChangeHandler ={this.stockListChangeHandler} favsListChangeHandler={this.favsListChangeHandler} name={this.state.name} nameChangeHandler={this.nameChangeHandler}/>
        {this.state.isPicked ? <StockPopUp userName= {this.state.userInfo.email_address} symbol ={this.state.companySymbol} companyName={this.state.companyName} closePopup ={this.togglePopup}/> : null}
        {content}
      </div>
    )
  }

  componentDidMount() {
    var chart = new CanvasJS.Chart("chartContainer", {
			animationEnabled: true,
			exportEnabled: true,
			theme: "dark1", // "light1", "dark1", "dark2"
			title:{
				text: "Stock info"
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
