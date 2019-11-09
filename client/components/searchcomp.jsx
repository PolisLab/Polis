import React, {useState} from 'react'

const SearchBar = (props)=>{

  return (
    <form >



    <label>Search Company</label>

    <input type="text" value={props.name} onChange={props.nameChangeHandler} required></input>


</form>
  )
}
export default SearchBar;