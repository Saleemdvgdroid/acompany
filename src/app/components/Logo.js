import React from 'react'

function Logo() {
    return (
        <div>
                <img src={require('../Images/logo192.png')} 
                     style = {{width:'80%',height:'100%',position:'absolute'}} />            
        </div>
    )
}

export default Logo
