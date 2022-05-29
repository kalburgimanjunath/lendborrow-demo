import React from "react";

function Avatar({ user, dataimage }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "left",
        justifyContent: "center",
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          background: "gray",
          // flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {dataimage ? (
          dataimage
        ) : (
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
            width={50}
            height={50}
            alt=""
            style={{ borderRadius: 50, backgroundColor: "gray" }}
          />
        )}
      </div>

      <div
        style={{ marginLeft: "10px", flex: 1, textAlign: "left", width: "80%" }}
      >
        <div>{user.name}</div>
        <div>{user.email}</div>
      </div>
    </div>
  );
}

export default Avatar;
