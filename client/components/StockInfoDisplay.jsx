import React, {useState, useEffect} from 'react';


const StockInfoDisplay = (props) => {
  let name;
  let symbol;
  if(props.stockName){
    name = props.stockName;
    symbol = props.stockSymbol;
    console.log(name);
  }
  return (
    <div className= "stockBox" onClick = {()=> props.togglePopup(name,symbol)}>
      <button>Favorite</button><button>Buy</button>
      <p>{name}</p>
    </div>
  );
}

export default StockInfoDisplay;