import React from "react";
import {
  NavBar,
  NavbarSectionsContainer,
  Sections,
  LogoDivLink,
  Logo,
  Menu,
} from "./NavbarStyles";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/images/Logo.svg";
import { useUserLogged } from "../../Helpers/UserLoggedContext";
import { useSidebar } from "../../Helpers/SidebarContext";

const Navbar = (props) => {
  const { setUserLogged } = useUserLogged();
  const { sidebarOpen, setSidebarOpen } = useSidebar();
  const path = window.location.pathname;
  const linksStyle = { textDecoration: "none" };

  const logOut = () => {
    setUserLogged(false);
    localStorage.removeItem("jwt");
  };

  return (
    <NavBar>
      <LogoDivLink to="/">
        <Logo src={LogoImage} alt="Logo" />
      </LogoDivLink>
      <NavbarSectionsContainer>
        <Link to="/" style={linksStyle}>
          <Sections
            variant="contained"
            color="primary"
            bgcolor={path === "/" ? "black" : ""}
            fontcolor={path === "/" ? "white" : ""}
          >
            Home
          </Sections>
        </Link>

        <Link to="/alldecks" style={linksStyle}>
          <Sections
            variant="contained"
            color="primary"
            bgcolor={path === "/alldecks" ? "black" : ""}
            fontcolor={path === "/alldecks" ? "white" : ""}
          >
            My decks
          </Sections>
        </Link>

        <Link to="/profile" style={linksStyle}>
          <Sections
            variant="contained"
            color="primary"
            bgcolor={path === "/profile" ? "black" : ""}
            fontcolor={path === "/profile" ? "white" : ""}
          >
            Profile
          </Sections>
        </Link>

        <Link to="/contact" style={linksStyle}>
          <Sections variant="contained" color="primary">
            Contact
          </Sections>
        </Link>

        <Link to="/login" style={linksStyle}>
          <Sections
            onClick={() => logOut()}
            variant="contained"
            color="secondary"
          >
            Log out
          </Sections>
        </Link>

        <Menu onClick={() => setSidebarOpen(!sidebarOpen)} />
      </NavbarSectionsContainer>
    </NavBar>
  );
};

export default Navbar;
