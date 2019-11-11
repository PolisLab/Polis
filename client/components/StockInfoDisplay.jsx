import React, {useState, useEffect} from 'react';


const StockInfoDisplay = (props) => {
  let name;
  let symbol;
  if(props.stockName){
    name = props.stockName;
    symbol = props.stockSymbol;
  }
  const addFav = () => {
    fetch('/addfav')
  }


  return (
    <div className= "stockBox" >
      <input type="date"></input>
      <button>Buy</button>
    </div>
  );
}

export default StockInfoDisplay;