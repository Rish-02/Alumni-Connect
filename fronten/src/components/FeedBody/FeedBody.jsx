import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
// import './FeedBody.css'
import {url} from "../utilities"
// import { UserContext } from '../../App'
// import { Link } from 'react-router-dom'
import Styles from './FeedBody.module.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import TextField from '@mui/material/TextField';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { deepOrange, deepPurple } from '@mui/material/colors';

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    // bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function FeedBody() {
    // { postId, name, description, body, photoURL, time, Like, Comment, photo }
    const [data, setData] = useState([])
    const [userid, setUserId] = useState([])
    // const [heart, setHeart] = useState(false);
    var result;
    
    getUserId(setUserId);

    useEffect(()=>{
        (async () => {
       result = await fetchFunc();
       setData(result);
        })();
   },[])
    return Display(data, userid, setData);
}

function Display(data, userid, setData) {
    console.log("userid is", userid);
    const [heart, setHeart] = useState(false);
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    const [comment, setComment] = useState([])

    const saveComment = event => {
        setComment(event.target.value);
      };

    const likePost = (id)=>{
        fetch('http://localhost/api/user/posts/like',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId: id
            })
        }).then(res=>res.json())
        .then(result=>{
                   console.log(result)
          const newData = data.map(item=>{
              if(item._id===result._id){
                  return result
              }else{
                  return item
              }
          })
          setData(newData)
        }).catch(err=>{
            console.log(err)
        })
  }

  
  const unlikePost = (id)=>{
        fetch('http://localhost/api/user/posts/unlike',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
          const newData = data.map(item=>{
              if(item._id===result._id){
                  return result
              }else{
                  return item
              }
          })
          setData(newData)
        }).catch(err=>{
          console.log(err)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const makeComment = (comment,postId)=>{
        fetch('http://localhost/api/user/posts/comment',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId,
                comment
            })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            const newData = data.map(item=>{
              if(item._id===result._id){
                  return result
              }else{
                  return item
              }
           })
          setData(newData)
        }).catch(err=>{
            console.log(err)
        })
  }

console.log(data);
// var data = [1,2,3]; 
return (

    <div className={Styles.feed}>
      {data.map((element) => {
        return (
          <div className={Styles.posts} key={element._id}>
            <div className={Styles.post__header}>
              <div className={Styles.post__headerleft}>
                {/* <Avatar src={photoURL} /> */}
                <Avatar sx={{ bgcolor: deepOrange[500] }}>PG</Avatar>
                <div className={Styles.post_profile_details}>
                  <h3>{element.postedBy.name}</h3>
                  <p>
                    @{element.postedBy.username} .{" "}
                    <span className={Styles.time}>
                      {element.createdAt.slice(11, 13)}hr
                    </span>
                  </p>
                </div>
              </div>

              {/* <div className={Styles.post__headerright}>
           <MoreVertIcon/>
            </div> */}
                </div>
                <div className={Styles.post__body}>
                    <p>{element.body}</p>
                </div>

                <div className={Styles.card_image}>
                    <img className={Styles.home_image} src={"http://localhost/public/postsImages/file1 (2).png"} />
                </div>

                <div className={Styles.post__footer}>
                    <div className={Styles.post__footer__options}>
                    {/* <FavoriteOutlinedIcon 
                            onClick={()=>{unlikePost(element._id)}}
                            /> */}

                            
                        {setHeartValue(element.likes, userid) ? (

                            <FavoriteOutlinedIcon style={{color: 'red'}}
                            onClick={()=>{unlikePost(element._id)}}
                            />
                        ) : (
                            <FavoriteBorderOutlinedIcon
                            onClick={()=>{likePost(element._id)}}
                            />
                        )
                        }
                        <span>{element.likes.length}</span>

                        {/* <Button >Open modal</Button> */}
                        <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        >
                        <Box sx={style} 
                        component="form"
                        noValidate
                        autoComplete="off">
                            <div className="comment-section">
                            {element.comments.map((comment) => {
                                return (
                                    <div class="comment">
                                <h5>{comment.writer}</h5>
                                <p>{comment.postId}</p>
                            </div>
                                )
                            })
                            }
                        </div>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                            Type your comment here
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 , width: 800}}>
                                
                            <TextField
                            style={{width: 800}}
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          variant="filled"
        />
        <Button variant="contained" size='large' sx={{bgcolor: 'blue', mt: 2}} onClick= {()=>{makeComment(comment, element._id)}}>Submit</Button>
                            </Typography>
                            
                        </Box>
                        </Modal>

                    </div>
                    <div className={Styles.post__footer__options}>
                        
                        <MapsUgcOutlinedIcon onClick={handleOpen}/> 
                        {/* onClick= {()=>{makeComment(text, element._id)}} */}
                        <span>{element.comments.length}</span>

                    </div>
                    <div className={Styles.post__footer__options}>
                        {/* <IosShareOutlinedIcon/> */}
                        <LogoutOutlinedIcon className={Styles.share} />
                        {/* <span>Share</span> */}

                    </div>


                </div>


            </div>
                // return item;
                ) })
        }
    </div>
  );
}

function getUserId(setUserId){
    let user = fetch("http://localhost/api/user/myprofile",{
      method:"get",
    //   mode:"no-cors",
      headers:{
          "Access-Control-Allow-Origin":"*",
          "Content-Type":"application/json",
          'Accept': 'application/json',
          "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
  }).then(res=>res.json())
   .then(data=>{
    setUserId(data._id)
    // return data;
   })
  .catch(err=>{
      console.log(err)
  })
}

function setHeartValue(likes, userid){
    // let user;
    // userid = userid.slice(1,-1)
    // likes.forEach(element => {
    //     console.log(element, userid, element == userid);
    //     if(element == userid){
    //         // setHeart(true);
    //         return true ;
    //     }
    // });
         if(likes.includes(userid)){
            // setHeart(true);
            return true ;
        } else 
            return false;
    // console.log(userid, likes.includes(userid));
}
async function fetchFunc() {
  let result = await fetch("http://localhost/api/user/posts/showAllPosts", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt"),
    },
  })
  .then(res=>res.json())
  //  .then(data=>{
  //   console.log(data)
  //   result = Display(data);
  //   // return result
  //  })
  .catch(err=>{
      console.log(err)
  })
  console.log("result",result);
  console.log("comment 1",result[0].comments[0].writer);
  // console.log("result",result[3].photo.replace(/\\/g, '/'));
  return result;
}

export default FeedBody;
