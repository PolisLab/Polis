import React from 'react'

const SignupLogButton =(props) =>{
return (
  <div>
   <form >

<label>Email</label>

    <input

        type="text"

        value={props.enteredUsername}
        onChange= {props.usernameChangeHandler}
        required
    ></input>

    <label>Password</label>

<input

  type="password"

  value={props.enteredPassword}

  onChange={props.passwordChangeHandler}
  required  
></input>

<input type="button" value="Sign Up" onClick={()=>props.SignupClick()}></input>
<input type="button" value="Log In" onClick={()=>props.LoginClick()}></input>
</form>
  </div>
)
}
export default SignupLogButton