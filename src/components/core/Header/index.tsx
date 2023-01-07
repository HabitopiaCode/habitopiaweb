import React from "react";
import HabyButton from "../../HabyButton";
import HabitopiaLogoWhiteBackground from "../../../assets/habitopia_logo_white_background.png"


export default function Header () {
    
    return (
      <div className="header">
        <div className="container">
          <div className="header_wrap">
            <div>
              <img
                src={HabitopiaLogoWhiteBackground}
                alt="Habitopia"
              />
            </div>
            <div>
              {/* <HabyButton analyticsName={"banner_get_started_button"} bg_color={""} txt_color={""} location={""}>
                Get started
              </HabyButton> */}
            </div>
          </div>
        </div>
      </div>
    );
}