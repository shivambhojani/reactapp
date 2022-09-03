import React, { useEffect } from 'react'
import {useLocation} from 'react-router-dom';

function HomePage() {

  const location = useLocation();
  console.log(location);
  
  return (
    <><div>HomePage</div>
    <h1>{location.state.id}</h1>
    <h1>id: {window.sessionStorage.getItem("userid")}</h1>
    
    </>
  )
}

export default HomePage