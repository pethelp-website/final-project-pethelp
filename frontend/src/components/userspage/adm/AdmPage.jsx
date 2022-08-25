import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import "../adm/AdmPage.scss"
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';


const AdmPage = () => {
  return (

    <div className="adm-container">
      <CDBSidebar>
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          Dashboard
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink as={Link} to={"/adm-page"} activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="columns">Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink as={Link} to={"/"} activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="table">Reports tables</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>

  )
}

export default AdmPage;
