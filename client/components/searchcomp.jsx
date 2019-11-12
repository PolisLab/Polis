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
      <div onClick = {()=>props.buysListChangeHandler()}>
        Buys
      </div>
      <div onClick ={()=>props.favsListChangeHandler()}>
        Favorites
      </div>
    </div>

  )
}
export default SearchBar;