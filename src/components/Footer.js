import React from "react";
import { Link } from "react-router-dom";
import {IoLogoTwitter} from 'react-icons/io'
import {IoLogoInstagram} from 'react-icons/io'
import sun from "../images/sun.png";

const home = () => {
  return (
    <>
      <footer>
        {/* <a href='#' className='footer__logo'>Ayodeji</a> */}
        <Link to="/">
            <img className="sun2" src={sun} alt="SUNRISE"></img>
        </Link>

        <ul className='permalinks'>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/rooms">Rooms</Link>
            </li>

        </ul>

        <div className="footer__socials">
          <a href="https://twitter.com" target='_blank'> <IoLogoTwitter /> </a>
          <a href="https://instagram.com" target='_blank'> <IoLogoInstagram /> </a>
        </div>

        <div className="footer__copyright">
          <small>&copy; SUNRISE. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
};

export default home;
