import React, {useState, useEffect} from 'react';


const StockBox = (props) => {
  let name;
  if(props.stockName){
    name = props.stockName;
    console.log(name);
  }
  return (
    <div className= "stockBox" onClick = {()=> props.togglePopup(name)}>
      <p>{name}</p>
    </div>
  );
}

export default StockBox;