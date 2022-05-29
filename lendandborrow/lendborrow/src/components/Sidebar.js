import React from "react";
import { Nav, NavItem, NavLink, NavbarBrand } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faCalendarDay,
  faUsersGear,
  faUserGroup,
  faHomeUser,
} from "@fortawesome/free-solid-svg-icons";
import Avatar from "./dashboard/Avatar";

function Sidebar() {
  //   const styles = StyleSheet.create({
  //     container: {
  //       maxWidth: "300px",
  //       background: "#303030",
  //       position: "fixed",
  //       left: 0,
  //       bottom: 0,
  //       top: 0,
  //       width: "100%",
  //       color: "#fff",
  //     },
  //   });
  const User = {
    name: "Manjunath Kalburgi",
    email: "manjunathkalburgi@gmai.com",
  };
  return (
    <nav
      style={{
        maxWidth: "300px",
        background: "#303030",
        position: "fixed",
        left: 0,
        bottom: 0,
        top: 0,
        width: "100%",
        color: "#fff",
      }}
    >
      <header>
        <NavbarBrand className="me-auto" href="/">
          reactstrap
        </NavbarBrand>
      </header>
      <section style={{ marginTop: "10%", textAlign: "left" }}>
        <div>
          <Nav vertical>
            <NavItem>
              <NavLink href="#">
                <FontAwesomeIcon
                  style={{ marginRight: 10 }}
                  icon={faHomeUser}
                  size="1x"
                />
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <FontAwesomeIcon
                  style={{ marginRight: 10 }}
                  icon={faUserGroup}
                  size="1x"
                />
                Groups
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <FontAwesomeIcon
                  style={{ marginRight: 10 }}
                  icon={faUsersGear}
                  size="1x"
                />
                Settings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <FontAwesomeIcon
                  style={{ marginRight: 10 }}
                  icon={faCalendarDay}
                  size="1x"
                />
                Invite
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">
                <FontAwesomeIcon
                  style={{ marginRight: 10 }}
                  icon={faArrowRightFromBracket}
                  size="1x"
                />
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </section>
      <footer style={{ bottom: "10%", position: "absolute" }}>
        <Avatar user={User} />
      </footer>
    </nav>
  );
}

export default Sidebar;
