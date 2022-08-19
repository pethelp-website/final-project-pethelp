import React from 'react';
import { CDBFooter} from 'cdbreact';
import { CDBBox } from 'cdbreact';
import "./HomeFooter.scss";
import faceLogo from "../../../images/facebook (3).png";
import instaLogo from "../../../images/instagram (1).png";
import twitterLogo from "../../../images/twitter.png";
import '../../../style/style.scss';


const HomeFooter = () => {
  return (
    <div id="container">

      <CDBFooter className="shadow fixed-bottom " id="footer">
        <CDBBox
          display="flex"
          justifyContent="between"
          alignItems="center"
          className="mx-auto py-3 flex-wrap"
          style={{ width: '80%' }}
        >
          <CDBBox display="flex" alignItems="center">
          </CDBBox>
          <CDBBox display="flex" alignItems="center">
            <small className="d-flex align-items-center">&copy; PetHelp, 2022. All rights reserved.</small>
          </CDBBox>
          <CDBBox display="flex">

          <div className="logo-box">
          <CDBBox display="flex"  className="p-2  ">
          <a href="https://www.facebook.com/" target="blank" className="d-flex align-items-end p-0">
            <img
            className='logo-box__facebook'
              alt="face-logo"
              src={faceLogo}
              width="24px"
            />
          </a>
        </CDBBox>
        <CDBBox display="flex"  className="p-2">
          <a href= "https://www.instagram.com/" target="blank" className="d-flex align-items-end p-0">
            <img className='logo-box__ins'
              alt="insta-logo"
              src={instaLogo}
              width="24px"
            />
          </a>
        </CDBBox>

        <CDBBox display="flex"  className="p-2">
          <a href="https://www.twitter.com/" target="blank" className="d-flex align-items-end p-0">
            <img className='logo-box__twitter'
              alt="twitter-logo"
              src={twitterLogo}
              width="24px"
            />
          </a>
        </CDBBox>

        </div>



          </CDBBox>
        </CDBBox>
      </CDBFooter>
    </div>

  )
}

export default HomeFooter;
