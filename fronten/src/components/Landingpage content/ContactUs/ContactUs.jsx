import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import logo from "../../../imgs/Hola-Vector.png";
import style from './Contact.module.css'
import { useFormControl } from '@mui/material/FormControl';


function ContactUs() {
  return (
    <>
     <div className={style.landing_page} >
      <div className={style.main_section}>
        <div className={style.app_nav} id="top">
          <div className={style.app_logo}>
          <a href="#top"><img src={logo} className={style.logo} alt="" /></a>
            <span className={style.logo_name}><a href="#top">HOLA</a></span>
          </div>
          <div className={style.nav_content}>
            <ul>
              <li ><Link to="" className={style.li_main}>About</Link></li>
              <li><Link to="/ContactUs" className={style.li_main}><span>Contact Us</span></Link></li>
              <li ><Link to="/FAQ" className={style.li_main}>FAQ</Link></li>
              <li ><Link to="/Login" className={style.li_main}>Log in</Link></li>
              <li >  
                <div className={style.nav_btn}>
            <button className={style.in_btn}><Link to="/SignUp" className={style.link_btn}>Get Started</Link></button>
          </div>
          </li>
            </ul>
          </div>
        
        </div>



<div className={style.ThePage}>

    <h1 className={style.h2getintouch}>We would love to hear from you!
    </h1>
<h1 className={style.h2getintouch}>Get in touch 👋</h1>
</div>


<div className="form">
    <form action="">
        <div className={style.Nameandsub}>
        <label > <p className={style.labeltext}> Name </p> <br /><input placeholder='Name...' className={style.inputfield1n2} type="text" /></label>
        <label > <p  className={style.labeltext}> Subject </p><br /><input  placeholder='Enter Subject' className={style.inputfield1n2} type="text" /></label>
        </div>
        <div className={style.Message}>
        <label > <p className={style.labeltext}>Message </p> <br /> <input placeholder='Enter Message' className={style.inputfield3}  type="text" /></label>
        </div>
        <div className={style.submit_btn}>
            <button className={style.in_btn}><Link to="/" className={style.link_btn}>Submit</Link></button>
            </div>
        </form>
</div>

  </div>
  </div>

</>
  )
}

export default ContactUs