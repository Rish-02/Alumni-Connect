import React from 'react'
import style from './VerifPage.module.css'
import logo from "../../imgs/Hola-Vector.png";
import { Avatar } from '@mui/material';

function VerificationPage() {
  return (
    <div className={style.container}>
      <div className={style.logoSection}>
        <img src={logo} className={style.logo} alt="" />
        <span className={style.logoName}>Hola</span>
      </div>
      <div className={style.verif}>
        <div class={style.card}>
  {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"/> */}
  <div class={style.containermajor}>
    <h2><b>Hang On,</b></h2>

   <div className={style.paragraphmail}>

    <h3 className={style.reqsubtext}>Your request has been
submitted
for authorization</h3>
</div>
<br />
<br />
<div className={style.Avatarr}>
<Avatar/>
</div>
<div className={style.paragraphmail}>
<p className={style.mailtext}>We will mail you once you get authorization</p>
</div>
  </div>
</div>
</div>
    </div>
  )
}

export default VerificationPage