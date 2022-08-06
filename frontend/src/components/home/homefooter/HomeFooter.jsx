//Isha´s code!

import React from 'react';
import { CDBFooter, CDBBtn, CDBIcon } from 'cdbreact';
import { CDBBox } from 'cdbreact';
import "./HomeFooter.scss";


const HomeFooter = () => {
  return (
    <div className="footer">
      <CDBFooter className="shadow"  >
        <CDBBox
          display="flex"
          justifyContent="between"
          alignItems="center"
          className="mx-auto py-4 flex-wrap"
          style={{ width: '80%' }}
        >
          <CDBBox display="flex" alignItems="center">

          </CDBBox>
          <CDBBox>
            <small className="ml-2">&copy; PetHelp, 2022. All rights reserved.</small>
          </CDBBox>
          <CDBBox display="flex">
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="facebook-f" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="mx-3 p-2">
              <CDBIcon fab icon="twitter" />
            </CDBBtn>
            <CDBBtn flat color="dark" className="p-2">
              <CDBIcon fab icon="instagram" />
            </CDBBtn>
          </CDBBox>
        </CDBBox>
      </CDBFooter>
    </div>
  )
}

export default HomeFooter;
