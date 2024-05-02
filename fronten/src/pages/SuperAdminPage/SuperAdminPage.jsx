import React from "react";
import SuperMainSection from "../../components/SuperAdminPageComponent/SuperMainSection/superMainSection";
import Sidebar from "../../components/AdminPageComponent/Sidebar/Sidebar";
// import Feed from "../../components/Feed/Feed";
import style from "./SuperAdminPage.module.css";

function SuperAdminPage() {
  return (
    <div className={style.adminPage}>
      <Sidebar />
      <SuperMainSection />
    </div>
  );
}

export default SuperAdminPage;
