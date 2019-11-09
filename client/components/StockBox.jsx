import React, {useState, useEffect} from 'react';


const StockBox = (props) => {
  let name = props.stockName;
  return (
    <div className= "stockBox" onClick={props.togglePopup}>
      <p>{name}</p>
    </div>
  );
}

export default StockBox;