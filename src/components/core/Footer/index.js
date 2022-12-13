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
                <span>
              <a href="https://twitter.com/habitopiaapp">
                  <FontAwesomeIcon icon={brands("twitter")} />
              </a>
                </span>
              {/* <span>
                <FontAwesomeIcon icon={brands("facebook")} />
              </span> */}
                <span>
              <a href="https://www.instagram.com/habitopia.app/">
                  <FontAwesomeIcon icon={brands("instagram")}/>
              </a>
                </span>
              {/* <span>
                <FontAwesomeIcon icon={brands("linkedin")} />
              </span> */}
            </div>
          </div>
        </div>
      </div>
    );
}

