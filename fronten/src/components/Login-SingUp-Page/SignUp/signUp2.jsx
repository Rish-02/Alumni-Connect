import React from "react"
import LeftSection from "../Left-Section/LeftSection";
import style from "./signUp.module.css";

function SignUp2({ user, setUser }) {


  return (
    <div className={style.signUpBody}>
      <LeftSection imgsrc="./images/sign img.png" />
      <div className={style.signUpSection}>

        <div className={style.signUpForm}>
          <div className={style.form_wrapper1}>
            <div className={style.form_container}>

              <div className={style.title_container}>
                <h4 className={style.h5}>a few more details</h4>
              </div>
              <div className={style.row || style.clearfix}>
                <div className="">
                  <form>
                    <div>

                      <label htmlFor="name" className={style.label1}>Name</label>
                      <input
                        className={style.input_field1}
                        type="name"
                        name="name"
                        value={user.name}
                        onChange={(e) =>
                          setUser({ ...user, name: e.target.value })
                        }
                        placeholder="someone something"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="username" className={style.label2}>Username</label>
                      <input
                        className={style.input_field2}
                        type="username"
                        name="username"
                        value={user.username}
                        onChange={(e) =>
                          setUser({ ...user, username: e.target.value })
                        }

                        placeholder="someone"
                        required
                      />

                    </div>
                    <div>
                      {/* <label htmlFor="admissionNo" className={style.label3}>University Roll Number</label>
                      <input
                        className={style.input_field3}
                        type="admissionNo"
                        name=" admissionNo"
                        value={user.admissionNo}
                        onChange={(e) =>
                          setUser({ ...user, admissionNo: e.target.value })
                        }
                        placeholder="thirteen digits go here"
                        required
                      /> */}
                      <label htmlFor="phoneNumber" className={style.label3}>Phone Number</label>
                      <input
                        className={style.input_field3}
                        type="number"
                        name=" phoneNumber"
                        id="phoneNumber"
                        maxLength="10"
                        value={user.phoneNumber}
                        onChange={(e) =>
                          setUser({ ...user, phoneNumber: e.target.value })
                        }
                        placeholder="phoneNumber..."
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

export default SignUp2;