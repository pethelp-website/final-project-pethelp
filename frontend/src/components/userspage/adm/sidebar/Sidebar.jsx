import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';


const Sidebar = () => {
  return (
    <div  className="sidebar" style={{ display: 'flex', height: "100vh", overflow: 'scroll initial', position: 'fixed'}}>
      <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          Admin dashboard
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large">Users</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Reports</CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
      
  );
};

export default Sidebar;