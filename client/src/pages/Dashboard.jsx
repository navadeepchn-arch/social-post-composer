import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import "../styles/Dashboard.css";


function Dashboard(){


return(

<div className="dashboard">


<main className="dashboard-container">


<section className="hero-card">


<h1>
Content Composer 🚀
</h1>


<p>
Create and validate posts for multiple social media platforms.
</p>


</section>



<section className="dashboard-grid">


<div>

<PostForm />

</div>



<div>

<PostList />

</div>



</section>



</main>



</div>

);


}


export default Dashboard;