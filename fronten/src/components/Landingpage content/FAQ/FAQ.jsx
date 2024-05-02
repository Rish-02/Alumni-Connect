import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import logo from "../../../../src/imgs/Hola-Vector.png";
import style from './FAQ.module.css'
import { useFormControl } from '@mui/material/FormControl';

const FAQ = () => {
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
                <li><Link to="/ContactUs" className={style.li_main}>Contact Us</Link></li>
                <li ><Link to="" className={style.li_main}><span>FAQ</span></Link></li>
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

            <h1 className={style.h2getintouch}>Got some common questions to ask?

            </h1>
            <h1 className={style.h2getintouch}>Read the FAQs 🚀</h1>

            <div className={style.AllQuestionsDiv}>
              <div className={style.SingleQuestionDiv}>
                <p className={style.h2getintouch}>Q1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ipsa officia, ut eos, perferendis quisquam, inventore aliquid consequuntur debitis a repellendus fuga vitae optio repellat doloremque dolores ex libero?</p>

              </div>
              <div className={style.SingleQuestionDiv}>
                <p className={style.h2getintouch}>Q2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ipsa officia, ut eos, perferendis quisquam, inventore aliquid consequuntur debitis a repellendus fuga vitae optio repellat doloremque dolores ex libero?</p>

              </div>
              <div className={style.SingleQuestionDiv}>
                <p className={style.h2getintouch}>Q3. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ipsa officia, ut eos, perferendis quisquam, inventore aliquid consequuntur debitis a repellendus fuga vitae optio repellat doloremque dolores ex libero?</p>

              </div>
              <div className={style.SingleQuestionDiv}>
                <p className={style.h2getintouch}>Q4. Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ipsa officia, ut eos, perferendis quisquam, inventore aliquid consequuntur debitis a repellendus fuga vitae optio repellat doloremque dolores ex libero?</p>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default FAQ