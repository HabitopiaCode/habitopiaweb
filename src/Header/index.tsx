import React from "react";

export default function Header () {
    
    return (
        <div
            style={{
                display: "flex",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "flex-end",
                flexDirection: "column",
            }}>
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    height: "80px",
                    backgroundColor: "#000000",
                    alignItems: "center",
                    justifyContent: "center",
                    alignSelf: "flex-end",
                    color: "#ffffff",
                    fontWeight: "bold",
                    textAlign: "center",
                }}>
                <img src="https://uploads-ssl.webflow.com/63624335410aba3df9a7c18f/63624335410abac499a7c1ff_logo%2520dark%2520background-p-500.png" alt="Habitopia" style={{ height: "50px" }} />
            </div>
        </div>
    );
}