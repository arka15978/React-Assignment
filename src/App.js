import React from 'react'
import UseEffectFetchData from './Rides'
import Header from './Header'
import NavBar from './navbar'
import './index.css';
function App() {
  return (
    <div className='container'>
      
       <Header/>
       
      <UseEffectFetchData/>
    
    </div>
  )
}

export default App