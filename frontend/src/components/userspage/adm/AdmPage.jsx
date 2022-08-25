import React from 'react';
import "../adm/AdmPage.scss";
import GetReports from "./reportdata/GetReports";
import GetUsers from "./userdata/GetUsers";



const AdmPage = () => {
  return (
    <div>
      <GetReports />
      <GetUsers />
    </div>
  )
}

export default AdmPage;
