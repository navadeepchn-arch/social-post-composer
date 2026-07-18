import { logout } from "../utils/auth";
import { useNavigate } from "react-router-dom";


function Navbar(){

const navigate = useNavigate();


const handleLogout=()=>{

logout();

navigate("/login");

};



return(

<nav className="navbar">


<div></div>


<button
className="logout-btn"
onClick={handleLogout}
>

Logout

</button>


</nav>

);

}


export default Navbar;