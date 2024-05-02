import React,{useState} from "react";
import style from "./Superadminlogin.module.css";
import LeftSection from "../../Login-SingUp-Page/Left-Section/LeftSection";
// import { useRef, useState, useEffect, useContext } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

// const LOGIN_URL ="http://localhost:80/api/user/auth/login";

function SuperLogin() {
    const navigate = useNavigate();

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }


  const login = async (e) => {
    const { email, password } = user;
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost/api/superAdmin/auth/login", {
        email,
        password,
      });
      if(res){
        console.log('response',res)
        localStorage.setItem("jwt", res?.data?.accessToken)
        localStorage.setItem("user", JSON.stringify(res.data.name))
        navigate('/superadmin', { replace: true });
      }
    } catch (error) {
      console.log(error);
     
    }
  };

  return (
  

    <div className={style.loginBody}>
      <LeftSection imgsrc="./images/sign img1.png"/>
      <div className={style.loginSection}>
    
        <div className={style.loginForm}>
          <div className={style.form_wrapper}>
            <div className={style.form_container}>
              <div className={style.title_container}>
                <h5>SuperAdmin, Log In</h5>
              </div>
              <div className={style.row || style.clearfix}>
                <div className="">
                  <form >
                    <div> 
                    <label htmlFor="Email" className={style.label1}>Username</label>
                      <input
                        className={style.input_field1}
                        type="email"
                        name="email"
                        id="username"
                        placeholder="someone"
                        value={user.email} 
                        onChange={handleChange}
                        // ref={userRef}
                        // onChange={(e) => setUser(e.target.value)}
                        // value={user}
                        required
                      />
                    </div>
                    <div>
                    <label htmlFor="Password" className={style.label2}>Password</label>
                      <input
                        className={style.input_field2}
                        type="password"
                        name="password"
                        placeholder="somethingstrong"
                        id="password"
                          // onChange={(e) => setPassword(e.target.value)}
                          // value={Password}
                          value={user.password}
                           onChange={handleChange}
                        //  ref={password}
                        required
                      />
                    </div>
                    <button className={style.button} onClick={login}>Login</button>
                     {/* <input
                      className={style.button}
                      type="submit"
                      value="Register"
                     
                    /> */}
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

export default SuperLogin;
