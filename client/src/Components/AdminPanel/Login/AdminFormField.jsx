import { useState } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import "../../../style/admin-panel/admin-login.css";
import "../../../style/admin-panel/form-field.css";
import DashboardButton from "../Dashboard/DashboardButton.jsx";
import { EyeIcon, EyeSlashIcon } from "../../../assets/media/icons/index.js";
import useAudioStore from "../../../stores/useAudioStore.js";
import {
  adminLoginMutation,
  adminAuditMutation,
} from "../../../queries/admins/mutations.js";

const AdminFormField = ({ admin }) => {
  const { setLoggedinAdmin, setLoggedinAdminUuid } = useAudioStore();
  const [, setLocation] = useLocation();
  const { register, handleSubmit } = useForm();

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const adminLogin = useMutation(adminLoginMutation());
  const adminAudit = useMutation(adminAuditMutation());

  const handleClick = async (uuid, password) => {
    try {
      const res = await adminLogin.mutateAsync({
        uuid,
        password,
      });

      if (res.success) {
        setLoggedinAdmin(admin.name);
        setLoggedinAdminUuid(admin.uuid);

        adminAudit.mutate({
          uuid: admin.uuid,
          name: admin.name,
          action: "Log In",
        });

        setLocation("/admin/main");
      } else {
        alert(res.message);
        return;
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <div className="admin-login-container-item" key={admin.uuid}>
        <div className="admin-login-container-item-title">ADMIN</div>
        <div className="admin-login-container-item-name">{admin.name}</div>
        <form
          onSubmit={handleSubmit((data) => {
            handleClick(admin.uuid, data.password);
          })}
        >
          <div className="admin-login-container-item-input">
            <div className="form-field-input-wrapper">
              <input
                id={admin.uuid}
                className="form-field-input"
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
                autoComplete="off"
                {...register(`password`, {
                  required: "Password is required",
                })}
              ></input>
              <img
                className="form-field-input-icon"
                onClick={togglePasswordVisiblity}
                src={passwordShown ? EyeSlashIcon : EyeIcon}
              ></img>
            </div>
          </div>
          <div className="form-field-submit-button">
            <DashboardButton
              id={admin.uuid}
              type="submit"
              value="Submit"
              variant="utility"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminFormField;
