import React, { useState } from 'react';

const formStyle = {
    color: 'white',
    textAlign: 'center',
    padding: '1.5em'
}

const Register = () => {
    const [password, setPassword] = useState()
    const [username, setUsername] = useState()
    async function registerHandler (event){
        event.preventDefault();
        try {
            const response = await fetch("https://strangers-things.herokuapp.com/api/2209-ftb-mt-web-ft/users/register",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
            }, 
            body: JSON.stringify({
                user: {
                    username: username,
                    password: password
                    }
                })
            })
            const data = await response.json()
            localStorage.setItem("token", data.data.token )
            console.log(data.data.token)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }


    const changeUsername = (event) => {
        setUsername(event.target.value)
    }

    const changePassword = (event) => {
        setPassword(event.target.value)
    }
    return(
        <div style={boxStyle}>
            <form style={formStyle} onSubmit={registerHandler}>
                <div>Username</div>
                <input type='text' value={username} onChange={changeUsername}></input>
                <div>Password</div>
                <input type='password' value={password} onChange={changePassword}></input>
                <div style={{paddingBottom: 10}}></div>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )


}

export default Register

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