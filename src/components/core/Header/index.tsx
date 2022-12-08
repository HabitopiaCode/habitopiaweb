import React from "react";
import HabiButton from "../../HabiButton";

export default function Header () {
    
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "flex-end",
          backgroundColor: "#000000",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "1200px",
            height: "80px",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "flex-end",
            color: "#ffffff",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <div>
            <img
              src="https://uploads-ssl.webflow.com/63624335410aba3df9a7c18f/63624335410abac499a7c1ff_logo%2520dark%2520background-p-500.png"
              alt="Habitopia"
              style={{ height: "50px" }}
            />
          </div>
          <div>
            <HabiButton bg_color={""} txt_color={""} location={""}>
              Log In
            </HabiButton>
          </div>
        </div>
      </div>
    );
}