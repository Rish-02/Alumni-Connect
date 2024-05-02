import React from "react";
import MainSection from "../../components/AdminPageComponent/MainSection/MainSection";
// import Sidebar from "../../components/AdminPageComponent/Sidebar/Sidebar";
// import Feed from "../../components/Feed/Feed";

import style from "./AdminPage.module.css";

function AdminPage() {
  return (
    <div className={style.adminPage}>
      {/* <Sidebar /> */}
      <MainSection />
    </div>
  );
}

export default AdminPage;
