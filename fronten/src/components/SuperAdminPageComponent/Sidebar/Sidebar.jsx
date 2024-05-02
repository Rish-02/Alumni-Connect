import style from "./Sidebar.module.css";
import logo from "../../../imgs/Hola-Vector.png";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";

export default function Sidebar() {

  const navigate = useNavigate();
  const logbtn = () => {
    localStorage.clear()
    navigate('/superadmin_login')
  }

  return (
    <div className={style.sidebar}>
      <div className={style.sideBarContainer}>
        <div className={style.logoSection}>
          <img src={logo} className={style.logo} alt="" />
        </div>
        <div className={style.sidebarWrapper}>
          <ul className={style.sidebarList}>
            {/* <li className={style.sidebarListItem}>
              <Search className={style.sidebarIcon} />
              <span className={style.sidebarListItemText}>Search</span>
            </li> */}

            <li className={style.sidebarListItem}>
              {/* <Explore className={style.sidebarIcon} /> */}
              <DescriptionOutlinedIcon className={style.sidebarIcon} />
              <span className={style.sidebarListItemText}>Applications</span>
            </li>

            <li className={style.sidebarListItem}>
              {/* <Notifications className={style.sidebarIcon} /> */}
              <MoveToInboxIcon className={style.sidebarIcon} />
              <span className={style.sidebarListItemText}>Posts</span>
            </li>
          </ul>
          <div className={style.profilediv}>
            <div className={style.nameandavatar}>
              <Avatar /> <h4 className={style.myname}>John Doe Kumar</h4>
            </div>
            <a id={style.signOut} href="/">
              @johndobekumar
            </a>
            <div className={style.outicon}>
              <button className={style.ad_btn} onClick={logbtn}><LogoutOutlinedIcon className={style.logicon} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
