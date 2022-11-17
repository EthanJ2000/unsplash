import "./Dashboard.css";

import Gallery from "../../components/Gallery/Gallery";
import PreviewModal from "../../components/PreviewModal/PreviewModal";
import SideNav from "../../components/SideNav/SideNav";
import { useAppSelector } from "../../hooks/reduxHooks";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <SideNav />
      <Gallery />
    </div>
  );
};

export default Dashboard;
