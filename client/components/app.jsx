import React, {Component} from 'react'
import StockList from '../container/StockList.jsx'


class App extends Component{
  constructor(props){
    super(props);
    this.state={
    }
  }
  render(){
    return (
      <div>
        <StockList name={"tesl"}/>
      </div>
    )
  }
}
export default App;
