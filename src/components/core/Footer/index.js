import React from "react";

export default function Footer() {
    
    return (
      <div style={styles.footer}>
        <div className="container">
          <div style={styles.footerInnerWrap}>
            <div>Logo</div>
            <div>Pages</div>
          </div>
          <div style={{...styles.footerInnerWrap, ...{marginTop: "40px"}}}>
            <div>&copy; Habitopia Inc. 2022</div>
            <div>Social Media</div>
          </div>
        </div>
      </div>
    );
}

const styles = {
    footer: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end",
        flexDirection: "column",
        background: "#000000",
        color: "#fff",
        padding: "40px 0"
    },
    footerInnerWrap: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    }
}

