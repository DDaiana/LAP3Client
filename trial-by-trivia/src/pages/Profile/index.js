import React from 'react';
import { useNavigate} from 'react-router-dom';

export default function Profile() {
  
  let navigate = useNavigate() ;
  const navigateToCategories = () => {
    navigate('/categories')
  }
  

  return (
    <div>Profile
        <button onClick={navigateToCategories}>Start game</button>
        
    </div>
  )
}
