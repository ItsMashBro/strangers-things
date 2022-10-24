import React from 'react';
import {Link} from 'react-router-dom';
import { SearchBar } from 'rsuite/esm/Picker';


const Navbar = () => {
    return(
        
        <div className="nav-container">
            <div className="nav-flexbox">
                <a style={headerStyle} className="navHeader">Cash<span style={{fontSize: 70}}>4</span>DeadDreams</a>
                <SearchBar style={searchStyle} placeholder='Search...' />
            </div>
            
        
            <nav id='navigation'>                
                    <ul style={linkStyle}>
                        <li>
                            <Link to="Loginpage">
                                <button style={{borderRadius: 25}}>Login</button>
                            </Link>
                        </li>
                        <li style={{paddingLeft: 10, paddingRight: 10}}>
                            <Link to="Register">
                                <button style={{borderRadius: 25}}>Register</button>
                            </Link>
                        </li>
                        <Link to="Post"><button style={{borderRadius: 25}}>Create New Post</button></Link>
                    </ul>                
            </nav>
        </div>
    )
}

export default Navbar;

const linkStyle = {
    listStyle: 'none',
    display: 'flex',
    color: 'black'
}


const headerStyle = {
    fontSize: 50,
    fontFamily: 'Roboto',
    marginLeft: 100,
    color: '#FF9933',
    fontWeight: 'bold',
    position: 'relative',
}

const searchStyle = {
    color: '#FF9933',
    textAlign: 'right',
    paddingBottom: 10,
}