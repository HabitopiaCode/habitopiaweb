import React from "react";
import HabyButton from "../../HabyButton";

export default function Header () {
    
    return (
      <div className="header">
        <div className="container">
          <div className="header_wrap">
            <div>
              <img
                src="https://uploads-ssl.webflow.com/63624335410aba3df9a7c18f/63624335410abac499a7c1ff_logo%2520dark%2520background-p-500.png"
                alt="Habitopia"
                style={{ height: "50px" }}
              />
            </div>
            <div>
              <HabyButton bg_color={""} txt_color={""} location={""}>
                Log In
              </HabyButton>
            </div>
          </div>
        </div>
      </div>
    );
}