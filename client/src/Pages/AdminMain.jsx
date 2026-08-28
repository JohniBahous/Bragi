import { useEffect } from "react";
import "../style/admin-panel/admin-main.css";
import { Dashboard } from "../components/AdminPanel/Dashboard/index.js";

const AdminMain = () => {
  useEffect(() => {
    document.title = "BRAGI || ADMIN PANEL MAIN";
  }, []);
  return (
    <div className="admin-main">
      <Dashboard />
    </div>
  );
};

export default AdminMain;
