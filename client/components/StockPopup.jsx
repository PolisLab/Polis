import React from 'react';  

const StockPopup = (props) =>{

  const handleSave = () =>{
    props.closePopup();
  };

  return (  
    <div className='popup' onClick={handleSave}>  
      <div className='popup_inner'>  
        <h1>Hello!</h1>
      </div>  
    </div>  
  )
};

export default StockPopup ;