import CallAPIView from "./CallAPIView";

export default function SuccessView(props) {
    let userId = props.userId;

    return (
        <div
            className="fill"
            style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontWeight: "bold",
                color: "#333333",
                paddingTop: "10px",
                paddingBottom: "40px",
            }}>
            {/* <span
                style={{
                    fontSize: "50px",
                }}>
                🥳🎉
            </span> */}
            {/* Login successful
            <div style={{ height: "10px" }} />
            <div style={{ height: "10px" }} /> */}
            Hi 
            <div style={{ height: "10px" }} />
            {/* change to form and post requests */}
            What would you like to be called as?
            <div style={{ height: "10px" }} />
            Would you like to link your twitter account?
            {/* <span id="userId">{userId}</span>
            <div style={{ height: "10px" }} />
            <div style={{ height: "10px" }} />
            <div style={{ height: "10px" }} />
            <div style={{ height: "10px" }} />
            <CallAPIView />
            <div style={{ height: "10px" }} />
            <div style={{ height: "10px" }} />
            <div style={{ height: "10px" }} />
            ------------------------------------
            <div style={{ height: "10px" }} />
            <div style={{ height: "10px" }} />
            <div style={{ height: "10px" }} />
            <div style={{ height: "10px" }} /> */}
        </div>
    );
}
