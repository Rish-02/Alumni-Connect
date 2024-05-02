import React from 'react'
import Feed from '../Feed/Feed'
import FeedBody from '../FeedBody/FeedBody'
import LeftSection from '../Login-SingUp-Page/Left-Section/LeftSection'
import Rightbar from '../RightBar/RightBar'
import Sidebar from '../Sidebar/Sidebar'
import style from './CommentPage.module.css'

function CommentsPage() {
  return (
    <>
    <div className={style.Mainpage}>
        <div className="sidebar">
    <Sidebar/>
    </div>
    <div className={style.MainMiddleSection}>
           {/* <Feed/>*/}
           
           
    </div>
    <div className={style.rightbar}>
    <Rightbar/>
    </div>
    </div>
    </>
    // <div>yuty</div>
  )
}

export default CommentsPage