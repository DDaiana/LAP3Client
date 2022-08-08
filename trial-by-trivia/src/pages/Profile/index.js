import React from 'react';
import { useNavigate} from 'react-router-dom';
import { Usercard } from '../../components';

export default function Profile() {
  
  let navigate = useNavigate() ;
  const navigateToCategories = () => {
    navigate('/categories')
  }
  

  return (
    <div>
        <h2 role="header">Profile</h2>
        <Usercard />
        <button>Leader Board</button>
        <button onClick={navigateToCategories}>Start game</button>
        
    </div>
  )
}
