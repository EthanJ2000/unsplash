import "./Dashboard.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Gallery from "../../components/Gallery/Gallery";
import SideNav from "../../components/SideNav/SideNav";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const onMenuClicked = () => {
    const sideNav = document.getElementById("side-nav");
    if (sideNav) {
      sideNav.style.width = "60vw";
      sideNav.style.overflow = "visible";
    }
  };
  return (
    <div className="dashboard-container">
      <FontAwesomeIcon
        className="side-nav-menu"
        color="#207937"
        icon={faBars}
        onClick={onMenuClicked}
      />
      <SideNav />
      <Gallery />
    </div>
  );
};

export default Dashboard;
