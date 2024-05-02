import style from "./rightBar.module.css";
import Avatar from '@mui/material/Avatar';
import Styles from './rightBar.module.css';
// import img from './comment.png';
import { deepOrange } from '@mui/material/colors';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Rightbar({name,id}) {
  return (
    <div className={style.rightbar}>
      <div className={style.rightbarWrapper}>
       <div className={Styles.sidebar}>
        <div className={style.search}>
          <div className={style.icon}>
        <SearchOutlinedIcon className={style.icon}/>
          </div>
         <input className={style.searchbox} type="search" placeholder="Search..." /> 
              </div>
              {/* <div className={style.avatar}>
            </div> */}
   
        <div className={style.profilediv}>
              <h3>You May Know</h3>
              <div className={style.nameandavatar}>
           <div className={style.Mynameandavatar}>
           <Avatar sx={{ bgcolor: deepOrange[500] }}>YT</Avatar><p className={style.names}>Yash Tiwari   <a id={style.IDs} href="/">@yashArrived</a></p>
            </div>
          
              </div>

              <div className={style.nameandavatar}>
           <div className={style.Mynameandavatar}>
           <Avatar sx={{ bgcolor: deepOrange[500] }}>PG</Avatar><h6 className={style.names}>Piyush Gupta  <a id={style.IDs} href="/">@piug-05</a></h6>
            </div>
          
              </div>
            
          </div>
    </div>
      </div>
    </div>
  );
}
