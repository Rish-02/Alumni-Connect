import React, { useState }  from "react";
import axios from "axios";
import style from "./signUp.module.css";
import { useNavigate } from "react-router-dom";
import SignUp1 from "./signUp1";
import SignUp2 from "./signUp2";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';



const SignUp0 = () => {
  const [page, setPage] = useState(0);
  
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    username: "",
    phoneNumber: "",
  });

//http://localhost/api/user/auth/register
const register = () => {
    console.log(user)
    const { name,  email, password, username, phoneNumber } = user
    if( name && email && password && username && phoneNumber ){
      
        axios.post("http://localhost/api/user/auth/register", user)
        .then( res => {
            alert(res.data.message)
            setUser("");
          })
          navigate("/Login");

    } else {
        alert("invlid input")
    }
    // navigate("/DocUpload");
  }


  const PageDisplay = () => {
    if (page === 0) {
      return <SignUp1 user={user} setUser={setUser} />;
    } else {
      return <SignUp2 user={user} setUser={setUser} />;
    }
  };

  return (
    <div className={style.container}>
     
          <div className="body">{PageDisplay()}</div>
        <div className={style.form_wrapper}>
        
          {page === 0 && (
            <button
              className={style.button}
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              Next
            </button>
          )}
           {page === 1 && (
            <button
              className={style.backbtn}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}>
                <KeyboardBackspaceIcon className={style.backarrow}/>
            </button>
          )}
          {page === 1 && (
            <button className={style.button1} onClick={register}>
              Submit
            </button>
          )}
        </div>
      </div>
    
   

  );
};

export default SignUp0;