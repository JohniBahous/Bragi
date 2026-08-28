import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import "../style/admin-panel/admin-login.css";
import "../style/admin-panel/form-field.css";
import AdminFormField from "../Components/AdminPanel/Login/AdminFormField.jsx";
import { allAdminsQueryOptions } from "../queries/admins/queries.js";

const AdminLogIn = () => {
  useEffect(() => {
    document.title = "BRAGI || ADMIN PANEL LOGIN";
  }, []);

  const { data = [] } = useQuery(allAdminsQueryOptions());

  return (
    <div className="admin-login">
      <div className="admin-login-container">
        <div className="admin-login-addendum">ADMIN LOGIN</div>
        <div className="admin-login-container-item-set">
          {data.map((a) => (
            <AdminFormField key={a.uuid} admin={a} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminLogIn;
