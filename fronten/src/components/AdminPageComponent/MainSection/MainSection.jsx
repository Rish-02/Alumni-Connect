import React, { useEffect, useState } from "react";
import style from "./MainSection.module.css";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
// import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Sidebar from "../Sidebar/Sidebar";
// import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import CloseIcon from "@mui/icons-material/Close";
// import { Avatar } from "@mui/material";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import axios from "axios";

function MainSection() {
  const [data, setData] = useState([]);
  // const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [userid, setUserid] = useState(0);

  // const toggleModal = () => {
  //   setModal(!setShowPopup);
  // };

  const togglePopup = async (id) => {
    setShowPopup(!showPopup);
    setUserid(id);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  // http://reqres.in/api/users?pages=1    ------testing api

  // useEffect(() => {
  //   try{
  //   axios.get('http://reqres.in/api/users?pages=1' )
  //     .then(res => {

  //       // console.log("res",res)
  //       // console.log(res.data)
  //       setData(res?.data?.data)
  //     })
  //   }
  //     // catch(err => {
  //     //   alert("something went wrong")
  //     // })
  // }, [])

  const jwt = localStorage.getItem("jwt");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  };

  const getdata = async () => {
    try {
      const res = await axios.get(
        "http://localhost/api/admin/listUsers",
        config
      );

      if (res) {
        console.log("data-abc", res.data);
        setData(res.data);
      } else {
        console.log("could not update");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const approve = async (id) => {
    console.log("approve");
    try {
      console.log("hit 1");
      const res = await axios.put(
        `http://localhost/api/admin/verifyUser/${id}`,
        {
          verify: 1,
        },
        config
      );

      console.log("resp1", res);
      if (res.data.result.verified == 1) {
        getdata();
      } else if (res.data.result.verified == 0) {
      }
    } catch (error) {
      console.log(error);
      alert("not approved");
    }
  };

  const reject = async (id) => {
    try {
      const res = await axios.put(
        `http://localhost/api/admin/verifyUser/${id}`,
        {
          verify: 0,
        },
        config
      );

      console.log("resp1", res);
      if (res.data.result.verified == 0) {
        getdata();
      }
    } catch (error) {
      console.log(error);
      alert("not approved");
    }
  };

  const Downloadfile = (id, file1) => {
    axios({
      url: `http://localhost/api/admin/download/${id}/fileToDownload/${file1}`, //your url
      method: "GET",
      responseType: "blob", // important
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then((response) => {
      // create file link in browser's memory
      const href = URL.createObjectURL(response.data);
      // create "a" HTML element with href to file & click
      const link = document.createElement("a");
      link.href = href;
      link.setAttribute("download", `${file1}`); //or any other extension
      document.body.appendChild(link);
      link.click();
      // clean up "a" element & remove ObjectURL
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    });
  };

  return (
    <div className={style.mainSection}>
      <Sidebar />
      <div className={style.main}>
        {showPopup ? <div className={style.overlay}></div> : null}
        <div>
          <h3 className={style.applicant}>All Applicants</h3>
        </div>

        <div className={style.middle}>
          <div className={style.sections}>
            <div>
              <FilterAltOutlinedIcon className={style.filter_icon} />
            </div>
            <button>Alumni</button>
            <button>Student</button>
            <button>Verified</button>
            <button>Rejected</button>
          </div>
          {/* <div className={style.searchBar}>
            <SearchIcon className={style.ser_bar} />
            <input type="text" placeholder="Search applicants..."
              onChange={(e) => {
                setSearch(e.target.value)
              }} />
          </div> */}
          {/* <div className={style.filer}>
            <div className={style.sort_appli}>
              <FilterListOutlinedIcon className={style.sort_icon} />
              <input type="text" placeholder="Search applicants..."
                onChange={(e) => {
                  setSearch(e.target.value)
                }} />
            </div>
          </div> */}
        </div>
        <div className={style.main_table}>
          <div className={style.table}>
            <table id={style.customers}>
              <thead className={style.head_des}>
                <tr>
                  <th className={style.head_table0}>S. No..</th>
                  <th className={style.head_table5}>Name</th>
                  <th className={style.head_table1}>Designation</th>
                  <th className={style.head_table2}>Document</th>
                  <th className={style.head_table3}>Created At</th>
                  <th> Status/Action</th>
                </tr>
              </thead>
              {
                data?.length > 0 &&
                  // data.filter((val) => {
                  //   if (search === "") {
                  //     return val
                  //   } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                  //     return val
                  //   }

                  // })
                  data.map((item, id) => {
                    // console.log("mapped-data",data)
                    return (
                      <tbody key={item._id}>
                        <tr>
                          <td className={style.table_id}></td>
                          <td className={style.table_name}>{item.name}</td>
                          <td className={style.table_designation}>Student</td>
                          {/* <td className={style.table_document} onClick={() => { Downloadfile(item._id, "file1") }}>College Id</td> */}
                          <td
                            className={style.table_document}
                            onClick={() => {
                              Downloadfile(item._id, "file1");
                            }}
                          >
                            <CloudDownloadIcon />
                          </td>
                          {/* <td className={style.table_DD}>{item.email}</td> */}
                          <td className={style.table_DD}>
                            {item.createdAt.slice(0, 10)}
                          </td>

                          <td className={style.btn_prov}>
                            {item.verified == -1 && (
                              <button
                                type="buttton"
                                className={style.table_accept}
                                onClick={() => {
                                  approve(item._id);
                                }}
                              >
                                Approve
                              </button>
                            )}

                            {item.verified == 1 && (
                              <h4 className={style.app_app}>Approved</h4>
                            )}

                            {item.verified == -1 && (
                              <button
                                type="buttton"
                                className={style.table_reject}
                                onClick={() => {
                                  reject(item._id);
                                }}
                              >
                                Reject
                              </button>
                            )}

                            {item.verified == 0 && (
                              <h4 className={style.app_rej}>Rejected</h4>
                            )}
                          </td>
                          <td>
                            <span className={style.table_eye}>
                              <button
                                className={style.table_cmm}
                                onClick={() => togglePopup(id)}
                              >
                                <VisibilityOutlinedIcon />
                              </button>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })
                // :console.log("err1")
              }

              {/* <span className={style.table_dots}><button className={style.table_cmm} onClick={()=>{Downloadfile(item._id,"file1")}} ><MoreVertOutlinedIcon /></button></span> */}
              {showPopup ? (
                <div className={style.popupContainer}>
                  <div className={style.popupContent}>
                    <div className={style.popupHead}>
                      <div className={style.headRight}>
                        <CloseIcon
                          onClick={(id) => {
                            togglePopup(id);
                          }}
                        />
                        <h3>View Applicant</h3>
                      </div>
                    </div>
                    {/* <-----------------------------------------continue popup-------------------> */}
                    <div className={style.Personal_Details}>
                      <p className={style.Personal_x}>Personal Details</p>
                      <div style={{ display: "flex" }}>
                        <div className={style.Personal_z}>
                          <p className={style.Personal_a}>Name</p>
                          <p className={style.Personal_b}>
                            {data[userid].name}
                          </p>
                        </div>
                        <div className={style.Personal_y}>
                          <p className={style.Personal_a}>Username</p>
                          <p className={style.Personal_b}>
                            {data[userid].username}
                          </p>
                        </div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div className={style.Personal_z}>
                          <p className={style.Personal_a}>Email</p>
                          <p className={style.Personal_b}>
                            {data[userid].email}
                          </p>
                        </div>
                        <div className={style.Personal_y}>
                          <p className={style.Personal_a}>Mobile</p>
                          <p className={style.Personal_b}>
                            {data[userid].phoneNumber}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={style.Personal_Details}>
                      <p className={style.Personal_x}>College Details</p>
                      <div
                        style={{
                          display: "flex",
                          marginbottom: "1rem",
                        }}
                      >
                        <div className={style.college_z}>
                          <p className={style.Personal_a}>Roll No.</p>
                          <p className={style.Personal_b}>
                            {data[userid].name}
                          </p>
                        </div>
                        <div className={style.college_y}>
                          <p className={style.Personal_d}>Batch</p>
                          <p className={style.Personal_b}>
                            {data[userid].name}
                          </p>
                        </div>
                        <div className={style.college_y}>
                          <p className={style.Personal_a}>Designation</p>
                          <p className={style.Personal_b}>Student</p>
                        </div>
                      </div>
                      <div style={{ display: "flex" }}>
                        <div className={style.college_z}>
                          <p className={style.Personal_a}>Department</p>
                          <p className={style.Personal_b}>
                            {data[userid].name}
                          </p>
                        </div>
                        <div className={style.college_y}>
                          <p className={style.Personal_a}>Admission Number</p>
                          <p className={style.Personal_b}>
                            {data[userid].name}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={style.Personal_Details}>
                      <p className={style.Personal_x}>Verification Document</p>
                      <div style={{ display: "flex" }}>
                        <div className={style.Personal_z}>
                          <p className={style.Personal_p}>Document Uploaded</p>
                          <p className={style.Personal_pp}>College ID</p>
                          {/* <p className={style.Personal_b} key={item.file1}>{item.verificationDoc}</p> */}
                        </div>
                      </div>
                    </div>

                    <div className={style.controls}>
                      <div className={style.controls_c}>
                        <div
                          className={style.table_document1}
                          onClick={() => {
                            Downloadfile(data[userid]._id, "file1");
                          }}
                        >
                          <CloudDownloadIcon className={style.controls_i} />
                        </div>

                        {data[userid].verified == -1 && (
                          <button
                            type="buttton"
                            className={style.table_reject}
                            onClick={() => {
                              reject(data[userid]._id);
                            }}
                          >
                            Reject
                          </button>
                        )}

                        {data[userid].verified == 0 && (
                          <h4 className={style.app_rej}>Rejected</h4>
                        )}

                        {data[userid].verified == -1 && (
                          <button
                            type="buttton"
                            className={style.table_accept}
                            onClick={() => {
                              approve(data[userid]._id);
                            }}
                          >
                            Approve
                          </button>
                        )}

                        {data[userid].verified == 1 && (
                          <h4 className={style.app_app} id>
                            Approved
                          </h4>
                        )}
                      </div>
                    </div>

                    {/* ---------------------------- */}
                  </div>
                </div>
              ) : null}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
