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
    <div id= "stockBuyInfo" >
      <p>What date do you want to buy?</p>
      <input type="date"></input>
      <p>Price: </p>
      <p>How many shares?</p>
      <input type="text"></input>
      <button>Buy</button>
    </div>
  );
}

export default StockInfoDisplay;