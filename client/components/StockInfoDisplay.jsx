import React, {useState, useEffect} from 'react';


const StockInfoDisplay = (props) => {
  let name;
  let symbol;
  const [numberOfShare, updateShare] = useState(0);
  const [boughtDate, updateDate] = useState("2011-10-10");
  const [stockPrice, updatePrice] = useState(0);
  
  if(props.stockName){
    name = props.stockName;
    symbol = props.stockSymbol;
  }

  const saveNumberOfShares = (e) =>{
    if(Number(e.target.value) === "NaN")
      alert("Please type the number!");
    else
      updateShare(Number(e.target.value));
  }

  const saveDate = (e) =>{
    let newDate = e.target.value;
    fetch('/stock/newPrice')
    .then(price => price.json())
    .then(price => updatePrice(price))
    .catch(err => console.log(err));
    updateDate(e.target.value)
  }

  const handleBuy = () =>{
    if(!props.userName)
      alert("please sign in!")
    else{
      fetch('/stocks/buys/',{
        method: 'POST', 
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email_address: props.userName, 
            boughtStockID: symbol,
            time: boughtDate,
            purchasePrice: stockPrice
          })
      })
      .catch(err => console.log(err));
    }
  }
  console.log(numberOfShare);
  console.log(boughtDate);
  return (
    <div id= "stockBuyInfo" >
      <p>What date do you want to buy?</p>
      <input type="date" onChange={saveDate} ></input>
      <p>Price: </p>
      <p>How many shares?</p>
      <input type="text" onChange={saveNumberOfShares}></input>
      <button onClick={handleBuy}>Buy</button>
    </div>
  );
}

export default StockInfoDisplay;