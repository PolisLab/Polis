import React, {useState, useEffect} from 'react';
import StockBox from '../components/StockBox.jsx'

const StockList = (props) => {
  const [state, setState] = useState({counter:0});
  let snp500 = ['apple', 'microsoft', 'tesla', 'test'];

  const arrToShow = [];
  for(let i = 0; i < snp500.length ; i++){
    if(snp500[i].indexOf(props.name) !== -1)
      arrToShow.push(<StockBox key={i} togglePopup ={props.togglePopup} stockName={snp500[i]}/>);
  }

  return (
    <div>
      {arrToShow}
    </div>
  );
}

export default StockList;
