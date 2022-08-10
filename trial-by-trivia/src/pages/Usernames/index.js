import React from 'react';
import { useNavigate} from 'react-router-dom';
import { Username } from '../../components/Username';


export default function Usernames() {
  
  let navigate = useNavigate() ;
  const navigateToCategories = () => {
    navigate('/categories')
  }
  

  return (
    <div>
        <h2>Set Username</h2>
        {/* gieves error - "could not find react-redux context value;" for testing */}
        {/* <Username/> */}
        <button onClick={navigateToCategories}>Start game</button>
        
    </div>
  )
}
