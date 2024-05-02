import style from "./sidebar.module.css";
import logo from "../../imgs/Hola-Vector.png";
// import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useNavigate } from 'react-router'
import { HomeRounded, } from "@material-ui/icons";
import { Avatar } from "@mui/material";
import {Link} from 'react-router-dom'
import { deepOrange} from '@mui/material/colors';

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage.removeItem('accessToken')
    localStorage.clear()
    navigate('/')

  }

  const name = localStorage.getItem("user")
  const username = localStorage.getItem("user_name")
  // console.log(name)

  return (
    <div className={style.sidebar}>
    <div className={style.sideBarContainer}>
      <div className={style.logoSection}>
        <img src={logo} className={style.logo} alt="" />
        {/* <span className={style.logoName}><h2>Hola</h2></span> */}
      </div>
      <div className={style.sidebarWrapper}>
        <ul className={style.sidebarList}>
        <Link className={style.links} to= "/home"> <li className={style.sidebarListItem}>
            <HomeRounded  className={style.sidebarIcon} />
            {/* <HomeOutlinedIcon className={style.sidebarIcon} /> */}
            <span className={style.sidebarListItemText}>Home</span>
          </li></Link>

          {/* <li className={style.sidebarListItem}>
            <Search className={style.sidebarIcon} />
            <span className={style.sidebarListItemText}>Search</span>
          </li> */}

          {/* <li className={style.sidebarListItem}>
            <ExploreOutlinedIcon className={style.sidebarIcon} />
            <span className={style.sidebarListItemText}>Explore</span>
          </li> */}
          <li className={style.sidebarListItem}>
            <NotificationsNoneOutlinedIcon className={style.sidebarIcon} />
            <span className={style.sidebarListItemText}>Notification</span>
          </li>
         <Link className={style.links} to= "/profile"> <li className={style.sidebarListItem}>
            <PersonOutlineOutlinedIcon className={style.sidebarIcon} />
            <span className={style.sidebarListItemText}> My Profile</span>
          </li></Link>
        </ul>
        <div className={style.profilediv}>
        <div className={style.nameandavatar}>
         <div className={style.Mynameandavatar}>
         <Avatar sx={{ bgcolor: deepOrange[500] }}>YT</Avatar><p className={style.names}>{name.slice(1,-1)}<br /><a id={style.IDs} href="/">@{username.slice(1,-1)}</a></p>
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
