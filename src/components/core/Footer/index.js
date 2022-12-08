import React from "react";
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import logo from '../../../assets/logo.svg'

export default function Footer() {
    
    return (
      <div className="footer">
        <div className="container">
          <div className="footer_wrap">
            <div>
              <img src={logo} alt="Habitopia logo" />
            </div>
            <div className="footer_links">
              <span>
                <a href="#">Privacy</a>
              </span>
              <span>
                <a href="#">Community</a>
              </span>
              <span>
                <a href="#">Chat with us!</a>
              </span>
            </div>
          </div>
          <div className="footer_wrap">
            <div>&copy; Habitopia Inc. {moment().format("YYYY")}</div>
            <div className="icon">
              <span>
                <FontAwesomeIcon icon={brands("twitter")} />
              </span>
              <span>
                <FontAwesomeIcon icon={brands("facebook")} />
              </span>
              <span>
                <FontAwesomeIcon icon={brands("instagram")} />
              </span>
              <span>
                <FontAwesomeIcon icon={brands("linkedin")} />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}

