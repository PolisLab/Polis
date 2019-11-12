import React, {useState} from 'react'

const SearchBar = (props)=>{
  let search;
  if(props.whichTab == '1'){
     search=( <form >
    


      <label>Search Companies:     </label>

      <input type="text" value={props.name} onChange={props.nameChangeHandler} required></input>
      </form>);
  }
  else{
      search =( <div onClick ={()=>props.stockListChangeHandler()}>
        Search Company
      </div>)
    
  }
  return (
    
    <div>
      {search}
      <div><span onClick = {()=>props.buysListChangeHandler()}>
        Buys  
      </span> <span>  </span>  
      <span onClick ={()=>props.favsListChangeHandler()}>
        Favorites
      </span></div>
    </div>

  )
}
export default SearchBar;