import React, { useState, useEffect } from "react";
import LeftSection from "../Login-SingUp-Page/Left-Section/LeftSection";
import style from "./DocUpload.module.css";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import axios from "axios";
import FormData from "form-data";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function DocUpload() {

  const [displaymessage, setdisplaymessage] = useState("");
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [warnAlertVisible, setwarnAlertVisible] = useState(false);

  const [file, setFile] = useState([]);

  const [image, setImage] = useState("");
  const [Document, setDocument] = useState("");

  const jwt = localStorage.getItem("jwt");

  const config = {
    headers: {
      "Content-Type": "application/json",
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${jwt}`,
    },
  };

  const handleDocument = (e) => {
    console.log(e.target.value);
    setDocument(e.target.value);
  };

  const handleChange = (e) => {
    console.log(e.target.files[0], "file1");
    setImage(e.target.files[0]);
  };

  const handleApi = (e) => {
    e.preventDefault();
    if (document.getElementById("file").value != "") {
      //call the api
      const url = "http://localhost/api/user/upload/verification";

      const formData = new FormData();
      formData.append("file1", image);
      // console.log("after", formData)
      axios
        .post(url, formData, config)
        .then((result) => {
          console.log(result.data);
          alert("success");
        })
        .catch((error) => {
          alert("service error");
          console.log(error);
        });

      setIsAlertVisible(true);
      setTimeout(() => {
        setIsAlertVisible(false);
      }, 3000);

      setTimeout(() => {
        setwarnAlertVisible(true);
      }, 3000);
      setdisplaymessage(
        " Thank you for contacting us. We will be in touch with you very soon."
      );
    } else if ((document.getElementById("file").value = " ")) {
    }
  };

  // axios({
  //   method: 'post',
  //   url: 'http://localhost:8080/user/1/savecategory',
  //   data: formData,
  //   headers: {
  //     'Authorization':`Bearer ${passToken}`,
  //     'Content-Type':'multipart/form-data'
  //   }
  // })
  // .then(
  //   (response) => {
  //     alert("Category Saved..!");
  //   },
  //   (error) => {
  //     console.log(error);
  //     alert("Failed..!");
  //   }
  // );

  return (
    <div>
      <div className={style.loginBody}>
        <LeftSection imgsrc="./images/doc img.png" />
        {/* <Rightbar/> */}
        <div className={style.loginSection}>
          {/* <p id={style.thank_you_message}> */}

          {isAlertVisible && (
            <div className={style.alert_container}>
              <div className={style.alert_inner}>
                <b className={style.alert_inner}>Success!</b> Your details have
                been submitted successfully, you will receive an email once your
                account has been approved.
              </div>
            </div>
          )}
          {warnAlertVisible && (
            <div className={style.alert_container1}>
              <div className={style.alert_inner1}>
                <Stack
                  className={style.stackcont}
                  sx={{ width: "100%" }}
                  spacing={2}
                >
                  {/* <Alert severity="error">This is an error alert — check it out!</Alert> */}
                  <Alert className={style.alert} severity="warning">
                    {" "}
                    <b> Waiting for Approval! </b> You will receive an email
                    once your account has been approved.
                  </Alert>
                  {/* <Alert severity="info">This is an info alert — check it out!</Alert> */}
                  {/* <Alert severity="success">This is a success alert — check it out!</Alert> */}
                </Stack>
              </div>
            </div>
          )}
          {/* </p> */}
          <div className={style.loginForm}>
            <div className={style.form_wrapper}>
              <div className={style.form_container}>
                <div className={style.title_container}>
                  <h2>Verify Account</h2>
                  <b>
                    {" "}
                    <p className={style.h4}>Select Document Type</p>
                  </b>
                </div>

                {/* <form onSubmit={upload}> */}
                <div>
                  {/* <!- Dropdown menu --> */}
                  <div className={style.dropdownParent}>
                    <select
                      className={style.dropdown}
                      onChange={handleDocument}
                      defaultValue="default"
                      // onchange="document.getElementById('displayValue').value=this.options[this.selectedIndex].text; document.getElementById('idValue').value=this.options[this.selectedIndex].value;"
                    >
                      <option value="default" defaultValue>
                        Student ID, University Marksheet...
                      </option>

                      <option value="studentId">Student ID</option>
                      <option value="universityMarksheet">
                        University Marksheet
                      </option>
                    </select>
                  </div>
                </div>
                <div className={style.shareOptions}>
                  <label htmlFor="file" className={style.shareOption}>
                    <InsertPhotoOutlinedIcon
                      htmlColor=""
                      className={style.shareIcon}
                    />
                    <span className={style.shareOptionText}></span>
                    <input
                      className={style.submitfile}
                      type="file"
                      id="file"
                      accept=".png,.jpeg,.jpg, .pdf"
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <button className={style.subbutton} onClick={handleApi}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DocUpload;
