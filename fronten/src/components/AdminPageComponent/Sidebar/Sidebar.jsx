import style from "./Sidebar.module.css";
import logo from "../../../imgs/Hola-Vector.png";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import { deepOrange } from '@mui/material/colors';
// import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Sidebar() {

  const navigate = useNavigate();
  const handleLogout = () => {
    // localStorage.removeItem('accessToken')
    localStorage.clear()
    navigate('/')
  }
  const name = localStorage.getItem("admin_name")

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
           <div className={style.Mynameandavatar}>
           <Avatar sx={{ bgcolor: deepOrange[500] }}>Pg</Avatar><h3 className={style.names}>{name.slice(1, -1)}<br /><a id={style.IDs} href="/">@{name.slice(1, -1)}</a></h3>
            </div>
              </div>
            
            <div className={style.outicon}>
              <button className={style.btn00} onClick={handleLogout}>
                
                <LogoutOutlinedIcon className={style.logicon}

                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
