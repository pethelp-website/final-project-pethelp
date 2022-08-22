import React from 'react';
import CardComponent from '../../cardcomponent/CardComponent';
import "./UserPage.scss";


const UserPage = () => {

  return (
    <div>
      <h1 className="mt-5 heading-secondary" id="title">My Reports</h1>
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </div>
  );
}

export default UserPage;



