import React from "react";
import style from "./HomePage.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
// import FeedBody from "../../components/FeedBody/FeedBody";
import Rightbar from "../../components/RightBar/RightBar";

const HomePage = () => { 
  return (
    <div className={style.HomePage}>
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
  );
};

export default HomePage;
