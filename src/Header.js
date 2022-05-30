import React, { useState, useEffect } from 'react';
export {l}

const url = 'https://assessment.api.vweb.app/user';

// second argument
var l = null




function Header(){
    
  const [user, setUser] = useState({});

  const getUser = async () => {
    const response = await fetch(url);
    const u = await response.json();
    setUser(u);}
    
  

  useEffect(() => {
    getUser();
  }, []);
  l = user.station_code
  
    return (<div className = 'row' id = "header">
        <div className = 'col-md-6'>
            <h1>Edvora</h1>
        </div>
        <div className = 'col-md-6 profile'>
            <h1 className = 'user-profile'>{user.name} <span><img src = {user.url}></img></span></h1>
            


            
        </div>
    </div>
        
        )
}
export default Header;
