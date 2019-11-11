import React, { useState, useEffect } from 'react';
import StockInfoDisplay from './StockInfoDisplay.jsx';
import ClipLoader from 'react-spinners/ClipLoader';

const StockPopup = props => {
  let price = 0;
  let stockData = {};
  const [isLoading, updateLoad] = useState(true);

  // fetch(
  //   `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${props.symbol}&interval=10min&outputsize=full&apikey=VRFP7Q7L5C1DU3EH`
  // )
  //   .then(body => body.json())
  //   .then(body => {
  //     updateLoad(false);
  //     stockData = body['Time Series (10min)'];
  //     console.log(body);
  //   })
  //   .catch(err => console.log(err));

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

  return (  
    <div className='popup' >  
      <div className='popup_inner'>  
        {isLoading ? 
        <div className='sweet-loading'>
          <ClipLoader
            css={override}
            sizeUnit={"px"}
            size={150}
            color={'#123abc'}
            loading={isLoading}
          />
        </div> : 
        <div>
          <p>{props.companyName},{props.symbol} Today's Price {price}!</p><button onClick={handleFav}>Favorite</button>
          <StockInfoDisplay data={stockData} stockName={props.companyName} stockSymbol={props.symbol}/>
          <span className= "closeButton" onClick={handleSave}>X</span>
        </div>}
      </div>  
    </div>  
  );
};

export default StockPopup;
