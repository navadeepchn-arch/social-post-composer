import { useState } from "react";
import API from "../services/api";


const PLATFORM_LIMITS = {

    Twitter:280,

    LinkedIn:3000,

    Instagram:2200,

    Facebook:63206

};



function PostForm({onPostCreated}){


const [form,setForm]=useState({

title:"",
content:"",
platforms:[],
media:""

});


const [preview,setPreview]=useState(null);

const [message,setMessage]=useState("");





const handleChange=(e)=>{


setForm({

...form,

[e.target.name]:e.target.value

});


};





const handlePlatform=(e)=>{


const value=e.target.value;



if(e.target.checked){


setForm({

...form,

platforms:[
...form.platforms,
value
]

});


}

else{


setForm({

...form,

platforms:
form.platforms.filter(
p=>p!==value
)

});


}


};







const handleMedia=(e)=>{


const file=e.target.files[0];


if(file){


setForm({

...form,

media:file.name

});


setPreview(
URL.createObjectURL(file)
);


}



};







const validateContent=()=>{


for(let platform of form.platforms){


if(
form.content.length >
PLATFORM_LIMITS[platform]
){


return false;


}


}


return true;


};







const handleSubmit=async(e)=>{


e.preventDefault();




if(!form.title.trim()){


setMessage(
"Title is required"
);


return;


}




if(!form.content.trim()){


setMessage(
"Content cannot be empty"
);


return;


}




if(form.platforms.length===0){


setMessage(
"Select at least one platform"
);


return;


}




if(!validateContent()){


setMessage(
"Character limit exceeded"
);


return;


}




try{


const response=

await API.post(

"/posts",

form

);



setMessage(
"Post published successfully!"
);



setForm({

title:"",
content:"",
platforms:[],
media:""

});


setPreview(null);



if(onPostCreated){

onPostCreated(response.data);

}



}


catch(error){


setMessage(

error.response?.data?.message ||

"Post failed"

);


}



};








return(


<div className="post-box">


<h3>
Create Post
</h3>



<form onSubmit={handleSubmit}>



<input

name="title"

placeholder="Post Title"

value={form.title}

onChange={handleChange}

/>





<textarea

name="content"

placeholder="Write your content..."

rows="6"

value={form.content}

onChange={handleChange}

/>





<div className="counter">


{

form.platforms.length===0 ?

"Select platform"

:

form.platforms.map(platform=>(


<div key={platform}>


{platform}:

{" "}

{form.content.length}/
{PLATFORM_LIMITS[platform]}


</div>


))


}



</div>







<label className="media-upload">


Choose Media


<input

type="file"

accept="image/*,video/*"

onChange={handleMedia}

/>


</label>





{

preview &&


<img

src={preview}

className="media-preview"

alt="preview"

/>


}







<h4>
Select Platforms
</h4>





<div className="platform-grid">


{

Object.keys(PLATFORM_LIMITS)

.map(platform=>(


<label

key={platform}

className={

form.platforms.includes(platform)

?

"platform selected"

:

"platform"

}


>


<input

type="checkbox"

value={platform}

checked={

form.platforms.includes(platform)

}

onChange={handlePlatform}

/>


{platform}



</label>


))


}



</div>







<button

className="publish-btn"

>

Publish


</button>





</form>






{

message &&


<p className="message">

{message}

</p>


}



</div>


);


}


export default PostForm;