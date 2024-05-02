import style from "./share.module.css";
import React, { useState, useEffect } from 'react'
// import {useNavigate} from 'react-router'
// import { PermMedia } from "@material-ui/icons";
import profileImg from "../../imgs/profile.png";
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
// import { Navigate } from "react-router";
import axios from "axios";


export default function Share() {
  // const navigate = useNavigate();
  const [url, setUrl] = useState("")
  const [postbody, setpostBody] = useState("")
  const [image, setImage] = useState("")


  useEffect(() => {
    // console.log("bodyabc",postbody)
    if (url) {

    }
  }, [url])

  const jwt = localStorage.getItem("jwt")
  const config = {
    headers: {
      'Content-Type': 'application/json',
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${jwt}`,

    },
  };

  const postDetails = () => {

    console.log(postbody, image)

    const url = 'http://localhost/api/user/posts/createPost'

    const formData = new FormData()

    formData.append('title', "title")
    formData.append('body', postbody)
    formData.append('photo', image)

    axios.post(url, formData, config).then(result => {
      // console.log(result.data)
      setUrl(result.url)
      alert('success')
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })


  }
  //  console.log(postcontent);
  return (
    <div className={style.share}>
      <div className={style.shareWrapper}>
        <div className={style.shareTop}>
          <img className={style.shareProfileImg} src={profileImg} alt="" />
          <input
            type="text"
            id="postcontent"
            placeholder={"What’s happening..."}
            className={style.shareInput}
            value={postbody}
            onChange={(e) => setpostBody(e.target.value)}
          />
          <div className={style.shareOptions}>
            <label htmlFor="file" className={style.shareOption}>

              <InsertPhotoOutlinedIcon htmlColor="" className={style.shareIcon} />
              <span className={style.shareOptionText}></span>
              <input
                className={style.shareOptionText}
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
          </div>
          <div className={style.shareBottom}>
            <button className={style.shareButton} onClick={() => postDetails()} type="submit">
              Post
            </button>
          </div>
          {/* <form className={style.shareBottom} onClick={()=>postDetails()}>
         
       </form> */}
        </div>


      </div>
    </div>
  );
}
