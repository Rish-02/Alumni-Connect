import React, { useEffect, useState } from "react";
import style from "./SuperMainSection.module.css";
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchIcon from "@mui/icons-material/Search";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import axios from "axios";

function SuperMainSection() {
  const [data, setData] = useState([])
  // const [active, setActive] = useState("")

  const jwt = localStorage.getItem("jwt")
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,

    },
  };



  const AdminList = () => {
  

    const getdata = async () => {
      try {
        // http://localhost/api/admin/listUsers

        const res = await axios.get(
          'http://localhost/api/superAdmin/listAdmins', config);

        if (res) {
          // console.log("data", res);
          console.log("data-abc", res.data);
          setData(res.data)
        } else {
          console.log('could not update');
        }
      } catch (error) {
        console.log(error);
      }
    }
    getdata()
  }

  useEffect(() => {

    AdminList()

  }, []);



  const StudentList = () => {
    

    const getdata = async () => {
      try {

        const res = await axios.get(
          'http://localhost/api/superAdmin/listUsers', config);

        if (res) {
          // console.log("data", res);
          console.log("data-abc", res.data);
          setData(res.data)
        } else {
          console.log('could not update');
        }
      } catch (error) {
        console.log(error);
      }
    }
    getdata()
  }


  useEffect(() => {

    StudentList()

  }, []);



  const approve = async (id) => {
    // e.preventDefault();
    console.log("approve")
    try {
      console.log("hit 1")

      const res = await axios.put(`http://localhost/api/admin/verifyUser/${id}`, {
        verify: 1
      }, config
      );

      console.log("resp1", res)
      if (res.data.result.verified === 1) {

        StudentList()
      } else if (res.data.result.verified === 0) {

      }


    }
    catch (error) {
      console.log(error);
      alert("not approved");
    }
  }

  const reject = async (id) => {
    try {

      const res = await axios.put(`http://localhost/api/admin/verifyUser/${id}`, {
        verify: 0
      }, config
      );

      console.log("resp1", res)
      if (res.data.result.verified === 0) {

        StudentList()
      }

    }
    catch (error) {
      console.log(error);
      alert("not approved");
    }
  }

  const Downloadfile = (id, file1) => {
    axios({
      url: `http://localhost/api/admin/download/${id}/fileToDownload/${file1}`, //your url
      method: 'GET',
      responseType: 'blob', // important
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,

      },
    }).then((response) => {
      // create file link in browser's memory
      const href = URL.createObjectURL(response.data);

      // create "a" HTML element with href to file & click
      const link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', `${file1}`); //or any other extension
      document.body.appendChild(link);
      link.click();

      // clean up "a" element & remove ObjectURL
      document.body.removeChild(link);
      URL.revokeObjectURL(href);
    });
  }


  return (
    <div className={style.mainSection}>
      <div className={style.main}>
        <div>
          <h3 className={style.applicant}>All Applicants</h3>

        </div>

        <div className={style.middle}>
          <div className={style.sections}>
            <div>
              <FilterAltOutlinedIcon className={style.filter_icon} />
            </div>
            <button  onClick={AdminList}  >Alumni</button>
            <button  onClick={StudentList} >Student</button>
            <button >Verified</button>
            <button >Rejected</button>
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
            <table id={style.customers} >
              <thead className={style.head_des}>
                <tr>
                  <th className={style.head_table0}>S. No..</th>
                  <th className={style.head_table5}>Name</th>
                  <th className={style.head_table1} >Designation</th>
                  <th className={style.head_table2}>Document</th>
                  <th className={style.head_table3}>Date & Time</th>
                  <th>Status/Action</th>
                </tr>
              </thead>


              {
                data?.length > 0 &&
                data.map((item) => {
                  return (

                    <tbody key={item._id}>
                      <tr>
                        <td className={style.table_id}></td>
                        <td className={style.table_name}>{item.name}</td>
                        <td className={style.table_designation}>Student</td>
                        <td className={style.table_document}>College Id</td>
                        <td className={style.table_DD}>{item.createdAt.slice(0, 19)}</td>

                        <td>
                          {item.verified === -1 && <button type="buttton" className={style.table_accept} onClick={() => {
                            approve(item._id)
                          }}>Approve</button>}

                          {item.verified === 1 && <h4 className={style.app_app}>Approved</h4>}

                          {item.verified === -1 && <button type="buttton" className={style.table_reject} onClick={() => {
                            reject(item._id)
                          }}>Reject</button>}

                          {item.verified === 0 && <h4 className={style.app_rej}>Rejected</h4>}

                          <span className={style.table_eye}><button className={style.table_cmm}><VisibilityOutlinedIcon /></button></span>
                          <span className={style.table_dots}><button className={style.table_cmm} onClick={() => { Downloadfile(item._id, "file1") }} ><MoreVertOutlinedIcon /></button></span>
                        </td>

                      </tr>
                    </tbody>
                  )
                })
              }

            </table>

          </div>

        </div>



      </div>
    </div>
  );
}

export default SuperMainSection;
