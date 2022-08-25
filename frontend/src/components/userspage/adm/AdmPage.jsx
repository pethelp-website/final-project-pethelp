import React from 'react';
import "../adm/AdmPage.scss";
import GetReports from "./reportdata/GetReports";
import GetUsers from "./userdata/GetUsers";
import SideBar from "./sidebar/Sidebar";



const AdmPage = () => {
  return (
    <div>
      <GetReports />
      <GetUsers />
      <SideBar />
    </div>
  )
}

export default AdmPage;
