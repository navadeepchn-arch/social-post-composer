import {useEffect,useState} from "react";
import API from "../services/api";


function PostList(){


const [posts,setPosts]=useState([]);




useEffect(()=>{


const fetchPosts=async()=>{


try{


const res=

await API.get("/posts");


setPosts(res.data);


}

catch(error){

console.log(error);

}



};


fetchPosts();



},[]);






return(


<div className="posts-container">


<h3>
Published Posts
</h3>



{

posts.length===0 &&

<p>
No posts available
</p>

}





{

posts.map(post=>(



<div

className="post-card"

key={post._id}

>


<h4>

{post.title}

</h4>



<p>

{post.content}

</p>




<div className="tags">


{

post.platforms.map(platform=>(


<span key={platform}>

{platform}

</span>


))

}



</div>




{

post.media &&

<p>

Media: {post.media}

</p>

}



</div>



))


}



</div>


);


}



export default PostList;