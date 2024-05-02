import React from 'react'
import style from "./Pagenotfound.module.css";
function Pagenotfound() {

  
  return (
    <div className={style.main}>
<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css'/>
<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Arvo'/>
 
 <section className={style.page_404}>
 <div className={style.container}>
   <div className="row"> 
   <div className="col-sm-12 ">
   <div className="col-sm-10 col-sm-offset-1  text-center">
   <div className={style.four_zero_four_bg}>
     {/* <h3 className={style.textcenter}>Error 404</h3> */}
   </div>
   
   <div className={style.contant_box_404}>
   <h3 className="h2">
   Page Not Found!
   </h3>
   
   <p>Oops. The page you're looking for doesn't exist !!!</p>
   
   <a href="/" className={style.link_404}>Go to Home</a>
 </div>
   </div>
   </div>
   </div>
 </div>
</section>

</div>
  )
}

export default Pagenotfound