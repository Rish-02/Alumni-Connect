import React, { useEffect, useState } from "react";
import style from "./profilePage.module.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Rightbar from "../../components/RightBar/RightBar";
import profileImg from "../../imgs/profile.png";
// import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MapsUgcOutlinedIcon from "@mui/icons-material/MapsUgcOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import { deepOrange } from "@mui/material/colors";
import { Avatar } from "@mui/material";
import axios from "axios";

function ProfilePage() {
  // const [url, setUrl] = useState("")
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState([]);
  const [profiledata, setProfileData] = useState([]);
  const [name, setName] = useState("");
  const [about, setabout] = useState("");
  const [department, setdepartment] = useState("");
  const [batchOf, setbatchOf] = useState("");
  const [Company, setCompany] = useState("");
  const [Sector, setSector] = useState("");
  const [imageUrl, setimageUrl] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleaboutChange = (event) => {
    setabout(event.target.value);
  };
  const handledepartmentChange = (event) => {
    setdepartment(event.target.value);
  };
  const handlebatchOfChange = (event) => {
    setbatchOf(event.target.value);
  };
  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };
  const handleSectorChange = (event) => {
    setSector(event.target.value);
  };

  const handleProfilePicChange = (event) => {
    setimageUrl(event.target.files[0]);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const jwt = localStorage.getItem("jwt");
  // console.log(jwt)
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "multipart/form-data",
    },
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData();
  //   formData.append('name', name);
  //   formData.append('about', about);
  //   formData.append('batchOf', batchOf);
  //   formData.append('department', department);
  //   formData.append('Company', Company);
  //   formData.append('Sector', Sector);
  //   if (imageUrl) {
  //     console.log('response-00',imageUrl)
  //     formData.append('imageUrl', imageUrl);
  //   }
  //   try {
  //      const res = await axios.post('http://localhost/api/user/myprofile', formData,config, {
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     });
  //     console.log('response',res)
  //     setShowPopup(!showPopup);
  //     alert('Profile updated successfully!');
  //   } catch (error) {

  //     alert('Error updating profile. Please try again.');
  //   }
  // };

  const handleSubmit = () => {
    const url = "http://localhost/api/user/myprofile";

    const formData = new FormData();

    formData.append("name", name);
    formData.append("about", about);
    formData.append("batchOf", batchOf);
    formData.append("department", department);
    formData.append("Company", Company);
    formData.append("Sector", Sector);
    if (imageUrl) {
      formData.append("imageUrl", imageUrl);
      console.log("response-00", imageUrl);
    }
    try {
      const res = axios.put(url, formData, config);
      console.log("profile-update", res);
      setShowPopup(!showPopup);
      alert("Profile updated successfully!");
    } catch (error) {
      alert("Error updating profile. Please try again.");
    }
  };

  const handleprofile = async () => {
    try {
      const res = await axios.get(
        "http://localhost/api/user/myprofile",
        config
      );
      if (res) {
        // console.log('response',res)
        console.log("response-1", res.data);
        setProfileData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleprofile();
  }, []);

  const handlePost = async () => {
    try {
      const res = await axios.get(
        "http://localhost/api/user/posts/showMyPosts",
        config
      );
      if (res) {
        // console.log("data", res);
        // console.log("data-abc", res.data);
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handlePost();
  }, []);

  // console.log("1234",profiledata)

  return (
    <div className={style.profile}>
      <Sidebar />

      <div className={style.profileSection}>
        {showPopup ? <div className={style.overlay}></div> : null}
        <div>
          <div className={style.profileInfo}>
            <div className={style.info}>
              <img src={profileImg} alt="" />
              <div className={style.names}>
                <span className={style.name}>{profiledata.name}</span>
                <span className={style.userName}>@{profiledata.username}</span>
              </div>
            </div>
            {/* <button className={style.edit_pencil} onClick={togglePopup}><ModeEditOutlineOutlinedIcon className={style.pencil}/>Edit Profile</button> */}
            <button className={style.edit_pencil} onClick={togglePopup}>
              Edit Profile
            </button>
          </div>

          <div className={style.bio}>
            <h2>About</h2>
            <p>{profiledata.about}</p>
          </div>

          <div className={style.moreInfo}>
            <div className={style.branchBatch}>
              <div>
                <h3>Branch</h3>
                <p>{profiledata.department}</p>
              </div>
              <div>
                <h3>Company</h3>
                <p> XYZ</p>
              </div>
            </div>
            <div className={style.companySector}>
              <div>
                <h3>Batch</h3>
                <p>{profiledata.batchOf} </p>
              </div>
              <div>
                <h3>Sector</h3>
                <p>Sector </p>
              </div>
            </div>
          </div>
        </div>
        {/* <<------------------------------------------------------------------------------------------->> */}

        <div>
          {data?.length > 0 &&
            data.map((item) => {
              return (
                <div className={style.posts} key={item._id}>
                  <div className={style.post__header}>
                    <div className={style.post__headerleft}>
                      <Avatar
                        sx={{ bgcolor: deepOrange[500] }}
                        className={style.avatar}
                      >
                        PG
                      </Avatar>
                      <div className={style.post_profile_details}>
                        <h3>{item.postedBy.name}</h3>
                        <p>
                          @{item.postedBy.username} .{" "}
                          <span className={style.time}>time hr</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={style.post__body}>
                    <p>{item.body}</p>
                  </div>

                  <div className={style.card_image}>
                    <img className={style.home_image} src={item.photo} alt=""/>
                  </div>

                  <div className={style.post__footer}>
                    <div className={style.post__footer__options}>
                      <FavoriteOutlinedIcon />
                      {/* {heart ? (
                                <FavoriteOutlinedIcon
                                />
                            ) : (
                                <FavoriteBorderOutlinedIcon                               
                                />
                            )} */}
                      <span>Like</span>
                    </div>
                    <div className={style.post__footer__options}>
                      <MapsUgcOutlinedIcon />
                      <span>Comment</span>
                    </div>
                    <div className={style.post__footer__options}>
                      <LogoutOutlinedIcon className={style.share} />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {showPopup ? (
        <div className={style.popupContainer}>
          <div className={style.popupContent}>
            <div className={style.popupHead}>
              <div className={style.headRight}>
                <CloseIcon onClick={togglePopup} />
                <h3>Edit Profile</h3>
              </div>
              <button
                className={style.button2}
                onClick={handleSubmit}
                type="submit"
              >
                Save
              </button>
            </div>

            <form>
              <label
                htmlFor="profile-pic"
                className={style.profileImageContainer}
              >
                <div className={style.profileImageCamera}>
                  {/* <CameraAltIcon /> */}
                  <CameraAltOutlinedIcon
                    className={style.profileImageCamera1}
                  />
                </div>
                <input
                  type="file"
                  id="profile-pic"
                  name="profile-pic"
                  className={style.profileImageInput}
                  onChange={handleProfilePicChange}
                  accept=".png,.jpeg,.jpg"
                />
              </label>

              <label htmlFor="name">Name</label>
              <input
                className={style.input}
                type="text"
                id="name"
                name="name"
                placeholder="Enter Your Name..."
                maxLength="30"
                value={name}
                onChange={handleNameChange}
              />

              <label htmlFor="bio">About</label>
              <textarea
                className={style.textarea}
                id="about"
                name="about"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
                maxLength="200"
                value={about}
                onChange={handleaboutChange}
              />
              <div>
                <div className={style.inputfield}>
                  <label htmlFor="Branch">Branch</label>
                  <select
                    name="Branch"
                    id="Branch"
                    className={style.input1}
                    value={department}
                    onChange={handledepartmentChange}
                  >
                    <option value="Computer Science & Engineering">
                      Computer Science & Engineering
                    </option>
                    <option value="Information & Technology">
                      Information & Technology
                    </option>
                    <option value="CSDS">CSDS</option>
                    <option value="AIML">AIML</option>
                    <option value="Mechanical Engineeing">
                      Mechanical Engineeing
                    </option>
                    <option value="Electrical and Electronics Engine...">
                      Electrical and Electronics Engine...
                    </option>
                    <option value="Electronics and communication Eng...">
                      Electronics and communication Eng...
                    </option>
                    <option value="Civil Engineering">Civil Engineering</option>
                  </select>
                  <label htmlFor="Batch">Batch</label>
                  <select
                    name="Batch"
                    id="Batch"
                    className={style.input1}
                    value={batchOf}
                    onChange={handlebatchOfChange}
                  >
                    <option value="2022-2026">2022-2026</option>
                    <option value="2021-2025">2021-2025</option>
                    <option value="2020-2024">2020-2024</option>
                    <option value="2019-2023">2019-2023</option>
                    <option value="2018-2022">2018-2022</option>
                    <option value="2017-2021">2017-2021</option>
                    <option value="2016-2020">2016-2020</option>
                  </select>
                </div>
                <div className={style.inputfield}>
                  <label htmlFor="Company">Company</label>
                  <input
                    className={style.input2}
                    type="text"
                    id="Company"
                    name="Company"
                    placeholder="NoCap Meta, Mumbai"
                    maxLength="30"
                    value={Company}
                    onChange={handleCompanyChange}
                  />
                  <label htmlFor="Sector">Sector</label>
                  <input
                    className={style.input3}
                    type="text"
                    id="Sector"
                    name="Sector"
                    placeholder="GTB Nagar Noida..."
                    maxLength="30"
                    value={Sector}
                    onChange={handleSectorChange}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : null}

      <Rightbar />
    </div>
  );
}

export default ProfilePage;
