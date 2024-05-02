import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../../src/imgs/Hola-Vector.png";
import style from './Landingpage.module.css'
import mainimg from '../../imgs/interface.png'
import google from "../../../src/imgs/Google.png";
import microsoft from "../../../src/imgs/Microsoft.png";
import kpmg from "../../../src/imgs/KPMG.png";
import slack from "../../../src/imgs/Slack.png";
import amazon from "../../../src/imgs/Amazon.png";
import adobe from "../../../src/imgs/Adobe.png";
import paypal from "../../../src/imgs/PayPal.png";
import jpmorgan from "../../../src/imgs/J.P. Morgan.png";
import tesla from "../../../src/imgs/Tesla.png";
import airbnb from "../../../src/imgs/Airbnb.png";


function Landingpage() {
  
 

  return (
    <div className={style.landing_page} id="top">
      <div className={style.main_section}>
        <div className={style.app_nav1}>
        <div className={style.app_nav}>
          <div className={style.app_logo}>
          <a href="#top"><img src={logo} className={style.logo} alt="" /></a>
            <span className={style.logo_name}><a href="#top">HOLA</a></span>
          </div>
          <div className={style.nav_content}>
            <div className="navbar_redirects">
            <ul>
              <li><Link to="">About</Link></li>
              <li><Link to="">Contact Us</Link></li>
              <li><Link to="">FAQ</Link></li>
              <li><Link to="/Login">Log in</Link></li>
              <div className={style.nav_btn}>
            <button className={style.in_btn}><Link to="/SignUp" className={style.link_btn}>Get Started</Link></button>
            </div>
            </ul>
          </div>
          </div>
          </div>

        </div>


        <div className={style.main_body}>
          <p className={style.b_name}>WELCOME TO HOLA</p>
          <h1 className={style.h_body}>One Single Platform For JSSATEN Alumni & Students</h1>
          <img src={mainimg} className={style.mainimg} alt="" />
        </div>

        <div className={style.main_content}>
          <div className={style.left_content}>
            <h3 className={style.left_head}>Engage with alumni from leading industries within
              a few seconds</h3>
            <p className={style.left_para}>Ditch the traditional methods of contacting your alumni and have a better chance at getting those referrals you need.</p>
          </div>
          <div className={style.right_content}>
            <div className={style.img_con}>
              <div className={style.row1}>
                <img src={google} className={style.logo0} alt="" />
                <img src={microsoft} className={style.logo0} alt="" />
                <img src={kpmg} className={style.logo0} alt="" />
                <img src={slack} className={style.logo9} alt="" />
              </div>
              <div className={style.row2}>
                <img src={amazon} className={style.logo1} alt="" />
                <img src={adobe} className={style.logo1} alt="" />
                <img src={paypal} className={style.logo9} alt="" />
              </div>
              {/* <div className={style.row3}>
                <img src={jpmorgan} className={style.logo2} alt="" />
                <img src={tesla} className={style.logo2} alt="" />
                <img src={airbnb} className={style.logo00} alt="" />
              </div> */}
            </div>
          </div>
        </div>

        <div className={style.img_main}>
          <div className={style.imgs}>
            <div className={style.img_box1}></div>
            <div className={style.img_box2} ></div>
          </div> 
         <div className={style.imgs1}>
            <div className={style.img_box2} style={{ marginLeft: "-1rem" }}></div>
            <div className={style.img_box1} style={{ marginLeft: "-11.5rem" }}></div>
          </div>
        </div>

        <div className={style.lan_tag}>
          <div className={style.first_tag}>
            <p className={style.plat}>One Platform</p>
            <p className={style.end}>Endless</p>
          </div>
          <div className={style.sec_tag}>
            <p className={style.last_h}>Opportunities</p>
          </div>
        </div>
        <div className={style.head_link}>
          <div className={style.main_link}>
          <h6 className={style.h_h}><Link to="">Event Schedules</Link></h6>
            <h6 className={style.h_h}><Link to="">Job Referrals</Link></h6>
          </div>
          <div className={style.main_link1}>
            <h6 className={style.h_i}><Link to="">Socialise with Alumni</Link></h6>
            <h6 className={style.h_j} ><Link to="">Socialise with Alumni</Link></h6>
          </div>
          <div className={style.main_link2}>
            <h6 className={style.h_i} ><Link to="">Interact with Students</Link></h6>
            <h6 className={style.h_j} ><Link to="">Plan Get Togethers</Link></h6>
          </div>
        </div>

        <div className={style.low_imgs}>
          <div className={style.low_img}>
            <div className={style.box_img}></div>
            <div className={style.box_img}></div>
            <div className={style.box_img}></div>
            <div className={style.box_img}></div>
          </div>
          <div className={style.low_con}>
            <div className={style.low_box}></div>
            <p className={style.low_dat}>The only social media platform you need in and outside college.</p>
          </div>
        </div>
        <footer className={style.fotter}>
                <p className={style.fotter_dat}>© 2022 Welcome. All right reserved.</p>
        </footer>

     
      </div>
    </div>
  )
}

export default Landingpage