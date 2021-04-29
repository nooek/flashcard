import React from "react";
import { Link } from "react-router-dom";
import { HideSideBar, SideBarButton, Close } from "./SidebarStyles";
import { useUserLogged } from "../../../Helpers/UserLoggedContext";
import { useSidebar } from "../../../Helpers/SidebarContext";

const Sidebar = (props) => {
  const { setUserLogged } = useUserLogged();
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  const path = window.location.pathname;
  const linksStyle = {
    textDecoration: "none",
    width: "100%",
  };

  const logOut = () => {
    setUserLogged(false);
    localStorage.removeItem("jwt");
  };

  return (
    <HideSideBar show={sidebarOpen}>
      <Link to="/" style={linksStyle}>
        <SideBarButton
          bgcolor={path === "/" ? "black" : ""}
          variant="contained"
          color="primary"
        >
          Home
        </SideBarButton>
      </Link>

      <Link to="/alldecks" style={linksStyle}>
        <SideBarButton
          bgcolor={path === "/alldecks" ? "black" : ""}
          variant="contained"
          color="primary"
        >
          My decks
        </SideBarButton>
      </Link>

      <Link to="/profile" style={linksStyle}>
        <SideBarButton
          bgcolor={path === "/profile" ? "black" : ""}
          variant="contained"
          color="primary"
        >
          Profile
        </SideBarButton>
      </Link>

      <Link to="/contact" style={linksStyle}>
        <SideBarButton
          bgcolor={path === "/contact" ? "black" : ""}
          variant="contained"
          color="primary"
        >
          Contact
        </SideBarButton>
      </Link>

      <Link to="/login" style={linksStyle}>
        <SideBarButton
          onClick={() => logOut()}
          variant="contained"
          color="secondary"
        >
          Log out
        </SideBarButton>
      </Link>
      <Close onClick={() => setSidebarOpen(!sidebarOpen)} />
    </HideSideBar>
  );
};

export default Sidebar;
