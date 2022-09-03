import React from 'react';
import "../adm/AdmPage.scss";
import GetReports from "./reportdata/GetReports";




const AdmPage = () => {
  return (
    <div>
      <h1 className="mt-5 heading-secondary">Admin Dashboard</h1>
      <GetReports />
    </div>
  )
}

export default AdmPage;
