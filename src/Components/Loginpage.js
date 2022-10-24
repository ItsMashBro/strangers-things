import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidenav from "./Sidenav";

// Steps to creating a react form that uses a post request
//1) We are going to need to store som data (Username, Password)
//2)A fetch request that actually goes and sends along our authentication info through a post request.

const Loginpage = () => {
  //Step 1
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleUsernameChange(event) {
    console.log(event.target.value);
    setUsername(event.target.value);
  }
  function handlePasswordChange(event) {
    console.log(event.target.value);
    setPassword(event.target.value);
  }

  async function setRegisterInfo() {
    try {
      const response = await fetch(
        "https://strangers-things.herokuapp.com/api/COHORT-NAME/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username: username,
              password: password,
            },
          }),
        }
      );
      const data = response.json();
      console.log("This was our request's returned promise ", data);

      localStorage.setItem("token", data.data.token);

      navigate("./ForSale");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div style={boxStyle}>
      <h1 style={{color: '#FF9933'}}>Login to your account</h1>
      <p>Placeholder</p>

      <form onSubmit={setRegisterInfo}>
        <label>Username: </label>
        <input
          placeholder="Enter Username..."
          type="text"
          value={username}
          onChange={handleUsernameChange}
        ></input>
          <br/>
        <label>Password: </label>
        <input
          placeholder="Enter Password..."
          type="text"
          value={password}
          onChange={handlePasswordChange}
        ></input><br/>

        <div style={{paddingTop: 15}}><button type="submit" style={{borderRadius: 15, fontSize: 16}}>Login</button></div>
      </form>
    </div>
  );
};

export default Loginpage;


const boxStyle = {
  color: '#B8B8B8',
textAlign: 'center',
padding: 10,
width: 'fit-content',
margin: 'auto',
backgroundColor: 'rgba(0,51,8, .5)',
boxShadow: '1px 2px 9px #FF9933',
borderRadius: 20,
marginTop: 200,
border: '1.5px solid black'
}