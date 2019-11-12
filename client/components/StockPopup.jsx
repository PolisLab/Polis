import React, { useState, useEffect } from 'react';
import StockInfoDisplay from './StockInfoDisplay.jsx';
import ClipLoader from 'react-spinners/ClipLoader';
import StockGraphDisplay from './StockGraphDisplay.jsx';

const StockPopup = props => {
  let price = 0;
  const [graphInfo, updateData] = useState({
    stockData: {},
    isLoading: true
  });

  useEffect(() =>{
    fetch(`/stocks/getAllPastStocks/${props.symbol}`)
    .then(data => data.json())
    .then(data =>{
      console.log(data);
      updateData({
        stockData: data,
        isLoading: false,
      });
    });
  }, []);

  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  `;

  const handleSave = () => {
    props.closePopup();
  };

  const handleFav = () =>{
    if(!props.userName)
      alert("please sign in!")
    else{
      fetch('/user/addfav',{
        method: 'POST', 
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email_address: props.userName,
            favStockId: props.symbol  
          })
      })
      .catch(err => console.log(err));
    }
  }
  console.log("this is graph Info", graphInfo);
  return (  
    <div className='popup' >  
      <div className='popup_inner'>  
        {graphInfo.isLoading ? 
        <div className='sweet-loading'>
          <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={150}
            color={'#123abc'}
            loading={graphInfo.isLoading}
          />
        </div> : 
        <div>
          <p>{props.companyName},{props.symbol} Today's Price {price}!<button onClick={handleFav}>Favorite</button></p>
          <StockGraphDisplay data={graphInfo.stockData}/>
          <StockInfoDisplay data={graphInfo.stockData} userName={props.userName} stockName={props.companyName} stockSymbol={props.symbol}/>
          <span className= "closeButton" onClick={handleSave}>X</span>
        </div>}
      </div>
    </div>  
  );
};

export default StockPopup;
