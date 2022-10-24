import React from 'react';

const Settings = () => {

    return (
        <div style={boxStyle}>
            {localStorage.getItem("token") && localStorage.getItem("token").length ?
                <div>
                    <p>Account Settings</p>
                    <p>Bruh I don't even know what to put here</p>
                </div>:
                <p>Please login/create an account with us to change settings.</p>
            }
        </div>
    )}

    export default Settings


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