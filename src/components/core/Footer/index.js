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
                <a href="https://privacy-policy-15ac7c.webflow.io/">Privacy</a>
              </span>
              <span>
                <a href="https://join.slack.com/t/habitopiacommunity/shared_invite/zt-1lt38wv80-n0TkCJLFIqawySgipex1~A">Community</a>
              </span>
              <span>
                <a href="https://zcal.co/remymess/habitopia">Chat with us!</a>
              </span>
            </div>
          </div>
          <div className="footer_wrap">
            <div>&copy; Habitopia Inc. {moment().format("YYYY")}</div>
            <div className="icon">
              <a href="https://twitter.com/habitopiaapp">
                <span>
                  <FontAwesomeIcon icon={brands("twitter")} />
                </span>
              </a>
              {/* <span>
                <FontAwesomeIcon icon={brands("facebook")} />
              </span> */}
              <a href="https://www.instagram.com/habitopia.app/">
                <span>
                  <FontAwesomeIcon icon={brands("instagram")}/>
                </span>
              </a>
              {/* <span>
                <FontAwesomeIcon icon={brands("linkedin")} />
              </span> */}
            </div>
          </div>
        </div>
      </div>
    );
}

