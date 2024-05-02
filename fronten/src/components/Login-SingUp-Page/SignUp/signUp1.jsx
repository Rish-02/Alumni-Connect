import React from "react"
import LeftSection from "../Left-Section/LeftSection";
import style from "./signUp.module.css";
// import { useRef } from "react";



function SignUp1({ user, setUser }) {
  return (
    
    <div className={style.signUpBody}>
      <LeftSection imgsrc="./images/sign img.png"/>
      <div className={style.signUpSection}>
       
        <div className={style.signUpForm}>
          <div className={style.form_wrapper}>
            <div className={style.form_container}>
              <div className={style.title_container}>
                <h4 className={style.h4}>Let’s get you signed up</h4>
              </div>
              <div className={style.row || style.clearfix}>
                <div className="">
                  <form>
                    <div>
                 
                      <label htmlFor="Email" className={style.label1}>Email</label>
                      <input
                        className={style.input_field1}
                        type="email"
                        name="email"
                        value={user.email}    
                        onChange={(e) =>
                          setUser({ ...user, email: e.target.value })
                        }
                        placeholder="someone@example.com"
                        required
                      />
                    </div>
                    <div>
                    <label htmlFor="Password" className={style.label2}>Password</label>
                      <input
                        className={style.input_field2}
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={(e) =>
                          setUser({ ...user, password: e.target.value })
                        }
                        placeholder="somethingstrong"
                        required
                      />
                   
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default SignUp1;