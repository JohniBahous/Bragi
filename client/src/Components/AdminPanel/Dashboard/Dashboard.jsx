import { useState, lazy } from "react";
import { useLocation } from "wouter";
import { useMutation } from "@tanstack/react-query";
import "../../../style/admin-panel/dashboard.css";
import { HarpIcon } from "../../../assets/media/icons/index.js";
import DashboardButton from "./DashboardButton.jsx";
import useAudioStore from "../../../stores/useAudioStore.js";
import { adminLogoutMutation } from "../../../queries/admins/mutations.js";

const DashboardOverview = lazy(() => import("./DashboardOverview.jsx"));
const DashboardUpdate = lazy(() => import("./DashboardUpdate.jsx"));
const DashboardReplace = lazy(() => import("./DashboardReplace.jsx"));

const Dashboard = () => {
  const [, setLocation] = useLocation();

  const adminLogout = useMutation(adminLogoutMutation());

  const handleLogout = () => {
    adminLogout.mutateAsync();

    setLoggedinAdmin(null);
    setLoggedinAdminUuid(null);

    setLocation("/admin/login");
  };

  const { loggedinAdmin, setLoggedinAdmin, setLoggedinAdminUuid } =
    useAudioStore();
  const [action, setAction] = useState("overview");
  return (
    <div className="dashboard">
      <div className="dashboard-addendum">{action}</div>
      <div className="dashboard-left">
        <div className="dashboard-left-buttonField">
          <DashboardButton
            type="button"
            value="OVERVIEW"
            variant="menu"
            onClick={() => setAction("overview")}
          />
          <DashboardButton
            type="button"
            value="UPDATE"
            variant="menu"
            onClick={() => setAction("update")}
          />
          <DashboardButton
            type="button"
            value="REPLACE"
            variant="menu"
            onClick={() => setAction("replace")}
          />
        </div>
        <div className="dashboard-left-adminInfo">
          <div>Logged In Admin: {loggedinAdmin}</div>
          <div>
            <img className="dashboard-icon" src={HarpIcon} alt="Harp" />
            <a href="#" onClick={handleLogout}>
              LOGOUT
            </a>
          </div>
        </div>
      </div>
      <div className="dashboard-right">
        {action === "overview" ? (
          <DashboardOverview />
        ) : action === "update" ? (
          <DashboardUpdate />
        ) : (
          <DashboardReplace />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
