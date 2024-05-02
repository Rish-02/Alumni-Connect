import React, { useState, useContext } from "react";
import style from "./login.module.css";
import LeftSection from "../Left-Section/LeftSection";
// import { useRef, useState, useEffect, useContext } from 'react';
import axios from "axios";
// import { UserContext } from "../../../App";
import { useNavigate } from "react-router-dom";

// const LOGIN_URL ="http://localhost:80/api/user/auth/login";

function Login() {
  const navigate = useNavigate();

  localStorage.setItem("jwt", "piyush");
  // const { state, dispatch } = useContext(UserContext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  //   const login = () => {
  //     const {  email, password } = user
  //   if(  email && password  ){
  //       axios.post("http://localhost:80/api/user/auth/login", user)
  //       .then(res =>{
  //         console.log(res)
  //         // console.log(res.data)
  //         alert('success')
  //         // navigate("/home")
  //         return res.data
  //       })
  //       .then(data => {
  //         console.log("logged in")
  //          console.log("1",data)
  //         if (data.accessToken) {
  //           console.log("access")
  //           localStorage.setItem("jwt", data.accessToken)
  //           localStorage.setItem("user", JSON.stringify(data.name))
  //           // localStorage.setItem("user", JSON.stringify(data.user))
  //           // localStorage.setItem('jwt', JSON.stringify(data.accessToken));
  //           dispatch({ type: "USER", payload: data.user })
  //         }
  //         else {
  //         console.log("error")
  //         }

  //       })
  //       .catch(error => {
  //         console.log(error)
  //         alert('service error')
  //       })
  //       navigate("/home")
  //   }
  // }

  const login = async (e) => {
    const { email, password } = user;
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:80/api/user/auth/login", {
        email,
        password,
      });
      if (res) {
        console.log("response", res);
        // console.log('response-1',res.data)
        // console.log(res.data.accessToken);
        localStorage.setItem("jwt", res?.data?.accessToken);
        localStorage.setItem("user", JSON.stringify(res.data.name));
        localStorage.setItem("userid", JSON.stringify(res.data._id))
        localStorage.setItem("user_name", JSON.stringify(res.data.username));
        // navigate('/home', { replace: true });
        if (res.data.verified == 1) {
          navigate("/home", { replace: true });
        } else {
          navigate("/DocUpload", { replace: true });
        }
      }
    } catch (error) {
      console.log(error);
      // alert("wrong credentials");
    }
    // console.log(user);
  };

  return (
    <div className={style.loginBody}>
      <LeftSection
        className={style.sectionleft}
        imgsrc="./images/sign img1.png"
      />
      <div className={style.loginSection}>
        <div className={style.loginForm}>
          <div className={style.form_wrapper}>
            <div className={style.form_container}>
              <div className={style.title_container}>
                <h5>Log In</h5>
              </div>
              <div className={style.row || style.clearfix}>
                <div className="">
                  <form>
                    <div>
                      <label htmlFor="Email" className={style.label1}>
                        Username
                      </label>
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
                      <label htmlFor="Password" className={style.label2}>
                        Password
                      </label>
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
                    <button className={style.button} onClick={login}>
                      Login
                    </button>

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

export default Login;
