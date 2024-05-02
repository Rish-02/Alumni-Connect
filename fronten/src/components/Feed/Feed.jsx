import Share from "../Share/Share";
import style from "./feed.module.css";
import FeedBody from "../FeedBody/FeedBody";
import React,{useEffect, useState} from 'react';
// import Post from "./Post";
export default function Feed() {
  const [data, setData] = useState([])
  const [photourl, setphotourl] = useState("")
  

  var result;
  // let xyz;
  // var tifOptions;
  useEffect(()=>{
      //http://localhost/api/user/auth/createpost
      // console.log(body)
      (async () => {
     result = await fetchFunc();
    //  console.log("photo,adkgcvukg ",result.photo)
     setData(result);
      // const pics= []
      // xyz = "http://localhost/"+ result[1].photo.split('\\').join('/')
      // xyz = "http://localhost/"+ result[1].photo.replace(/\\/g, '/')
    //  console.log("photo",xyz)
    //  setphotourl(xyz)
     
      })();
 },[])
// setTimeout(5000);
//  console.log(data);

//  for(var i in data){
//     result.push([i, data [i]]);
//     console.log(i);
//  }

  // if(result){
  //   return result
  // }
console.log(data);
return Display(data)
}
async function fetchFunc(){
  let result = await fetch("http://localhost/api/user/posts/showAllPosts",{
    method:"get",
    headers:{
        "Content-Type":"application/json",
        'Accept': 'application/json',
        "Authorization":"Bearer "+localStorage.getItem("jwt")
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
// console.log("result",result[3].photo.replace(/\\/g, '/'));
return result
}


// function replaceSlashes() {
      
//   let origString = 'string / with some // slashes /';
//   let replacementString = '*';
//   let replacedString =
//       origString.replace(/\//g, replacementString);
    
//   document.querySelector('.output').textContent =
//               replacedString;
// }

function Display(result){
  return (
    <div className={style.feed}>
      <div className={style.feedWrapper}>
        <Share />      
        <FeedBody/>                                           
    
        {/* <FeedBody name="John Doe Kumar" description="@johndobekumar" time="12hr" body=" Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        photoURL="https://photos.google.com/photo/AF1QipPrxJkOY3QfXmNg6khMdYpj7CyR4DvlUwqTfSEl"  Like="12" Comment="7"/> */}
  {/* {result.map(element=> 
              
              <FeedBody key={element._id} postId={element._id} name={element.postedBy.name} description={element.postedBy.username}time={element.createdAt.slice(11,13)} body={element.body}
            // photoURL={element.photo}  photo="http://localhost/public/postsImages/file1 (2).png" Like="12" Comment="7"/> 
            photoURL={element.photo}  photo={element.photo} Like={element.likes.length} Comment="7"/> 
)} */}
      </div>
    </div>
  )
}