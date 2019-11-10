import React, {useState, useEffect} from 'react';  
import StockInfoDisplay from './StockInfoDisplay.jsx'

const StockPopup = (props) =>{
  let price =0;
  let stockData= {};

  fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${props.symbol}&interval=10min&outputsize=full&apikey=VRFP7Q7L5C1DU3EH`)
  .then(body => body.json())
  .then(body => {
    stockData = body["Time Series (10min)"];
    console.log(stockData);
  })
  .catch(err => console.log(err));

  const handleSave = () =>{
    props.closePopup();
  };

  return (  
    <div className='popup' onClick={handleSave}>  
      <div className='popup_inner'>  
        <StockInfoDisplay data={stockData}/>
        <h1>{price}!</h1>
      </div>  
    </div>  
  );
};


export default StockPopup ;