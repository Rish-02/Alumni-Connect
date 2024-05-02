import React from "react";
// import logo from "../../../imgs/Hola-Vector.png";
// import reading from "../../../imgs/sign img.png"
import style from "./leftSection.module.css";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
function LeftSection(props) {
  const navigate = useNavigate();
 const backbtn = ()=>{
navigate('/')
 }

  return (
    <div className={style.container}>
      <div className={style.logoSection}>
        {/* <img src={logo} className={style.logo} alt="" /> */}
        <div className={style.logo_icon}>
        <button className={style.back_btn} onClick={backbtn}><KeyboardBackspaceIcon/></button>
        </div>
        <span className={style.logoName}>Hola</span>
      </div>
      <div className={style.leftContent}>
        <img src={props.imgsrc} className={style.logo} alt="" />
      </div>
    </div>
  );
}

export default LeftSection;
