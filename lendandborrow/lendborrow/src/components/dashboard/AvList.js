import React from "react";
// import { User } from "../../data/userdb";
import Avatar from "./Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faHomeUser } from "@fortawesome/free-solid-svg-icons";
function AvList() {
  const Users = [
    {
      id: 1,
      name: "dinesh",
      email: "dinesh@gmail.com",
      icon: faUserGroup,
    },
    {
      id: 2,
      name: "ramesh",
      email: "ramesh@gmail.com",
      icon: faHomeUser,
    },
    {
      id: 3,
      name: "ramesh",
      email: "ramesh@gmail.com",
      icon: faHomeUser,
    },
    {
      id: 4,
      name: "sunil",
      email: "sunil@gmail.com",
      icon: faHomeUser,
    },
    {
      id: 6,
      name: "arun",
      email: "arun@gmail.com",
      icon: faHomeUser,
    },
    {
      id: 7,
      name: "varun",
      email: "varun@gmail.com",
      icon: faHomeUser,
    },
    {
      id: 8,
      name: "ajay",
      email: "ajay@gmail.com",
      icon: faHomeUser,
    },
  ];
  return (
    <div
      style={{
        overflowY: "auto",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        maxHeight: 200,
      }}
    >
      {Users.map((user, index) => {
        return (
          <Avatar
            user={user}
            key={user.id + index}
            dataimage={<FontAwesomeIcon icon={user.icon} size="1x" />}
          />
        );
      })}
    </div>
  );
}

export default AvList;
