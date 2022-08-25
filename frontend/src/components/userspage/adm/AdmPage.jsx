import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
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
    <div>
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
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>

  )
}

export default AdmPage;
