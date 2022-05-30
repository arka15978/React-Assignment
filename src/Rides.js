import React, { useState, useEffect } from 'react';

import {l} from './Header'


const url = 'https://assessment.api.vweb.app/rides';



const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const [users0, setUsers0] = useState([]);
  const [nav,setNav] = useState(<h1>Y</h1>)

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    
    users.sort((a,b)=>{
      return a.id - b.id
    })
    setUsers0(users)
   
    setUsers(users);
    // console.log(users);
  };

  useEffect(() => {
    getUsers();
    
  }, []);
  console.log(users)
  function handler(){
    setNav(null)

  }
  
   function handler1(){
     
     let newUsers = users.filter((user)=>{
       return user.city
     })
       
     newUsers.sort((a,b)=>{
       let x = a.station_path
       let y = b.station_path
       let x1 = x.map((item)=>{
         return Math.abs(item - l)
       })
       let y1 = y.map((item)=>{
         return Math.abs(item - l)
       })
       let x2 = Math.min(...x1)
       let y2 = Math.min(...y1)
       return x2 - y2

     })
       
     
     setUsers(newUsers)
    

      

  }
  const handler_1 = (e)=>{
    let newUsers = users0.filter((user)=>{
      return user.city === e.target.value
    })
    setUsers(newUsers)
    
  }
  const handler_2 = (e)=>{
    setUsers(users0.filter((user)=>{
      return user.state === e.target.value
    }))
    
  
  

    
  }
  
  
  
    
    
  
 


  return (
    
    
   
    <div>
      <div class = "container">
        <div class = 'row' id = "nav" style = {{backgroundColor : 'rgb(48,48,48)'}} >
          <div class = 'col-md-6'>
    <nav class="navbar navbar-expand-lg navbar-light" id = "leftNav">
   
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">
      <i class="fa fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto text-right">
        <li class="nav-item">
          <a class="nav-link active-home" onClick = {handler1}>Nearest rides</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" >Upcoming rides</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Past rides</a>
        </li>
        
        
      </ul>
    </div>
  </nav> 
  
     </div>
     <div class = 'col-md-2'></div>
  <div class = 'col-md-4 ' id = "filter" style = {{textAlign : 'center'}}>
  <i class="fa fa-bars" onClick = {handler}></i><span>  Filters</span>
  <nav id = 'sideNav'>
    <ul>
      <li><select onChange = {handler_1}>
        
      
        
        {users0.map((user)=>{
          return (<option value = {user.city}>{user.city}</option>)
        })}
        </select></li>
        <li><select  onChange = {handler_2}>
        {users0.map((user)=>{
          return (<option value = {user.state}>{user.state}</option>)
        })}
        </select></li>
      
    </ul>
  </nav>
  
  

  </div></div>
 

  </div>
  
  
  <ul className='users container-fluid'>
        {users.map((user) => {
          
          return (
            <li className = 'row'>
              <img src={user.map_url} className = 'col-md-4' />
              <div className = 'col-md-4'>
              <p>Ride Id : {user.id} </p>
              <p>Origin Station : {user.origin_station_code}</p>
              <p>station_path : {user.station_path}</p>
              <p>Date : {user.date}</p>
              
              <p>Distance : {Math.min(...user.station_path.map((element)=>{
                return Math.abs(element - l)
              }))}</p></div>
              <div className='col-md-2'>
                <p>City Name</p>
                <p>{user.city}</p>


              </div>
              <div className = 'col-md-2'>
                <p>State Name</p>
                <p>{user.state}</p>

              </div>
              
            </li>

            
          )
        })}
      </ul></div>
      
    
    
  )
  

} 

export default UseEffectFetchData
                      