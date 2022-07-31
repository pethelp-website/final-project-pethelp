import React from 'react'
import loginService from '../../services/login';

const HomePage = () => {
  const user = loginService.getAuthenticatedUser();
  return (
    <div className="form-content-right">
        <div className="form-sucess"> Home page</div>
        <div>{ user ? "Welcome, " + user.name : "You are not authenticated"} </div>
    </div>
  )
}

export default HomePage;
