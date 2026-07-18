import { useState } from "react";
import API from "../services/api";
import { saveToken } from "../utils/auth";
import { useNavigate } from "react-router-dom";


function Login(){

    const navigate = useNavigate();


    const [form,setForm] = useState({

        email:"",
        password:""

    });


    const [message,setMessage] = useState("");



    const handleChange=(e)=>{

        setForm({

            ...form,

            [e.target.name]:e.target.value

        });

    };



    const handleSubmit=async(e)=>{

        e.preventDefault();


        try{


            const response = await API.post(
                "/auth/login",
                form
            );


            saveToken(
                response.data.token
            );


            setMessage(
                "Login successful"
            );


            setTimeout(()=>{

                navigate("/dashboard");

            },1000);



        }
        catch(error){


            setMessage(

                error.response?.data?.message ||
                "Login failed"

            );


        }


    };



    return(

        <div className="container mt-5">


            <div 
            className="card p-4 mx-auto"
            style={{maxWidth:"450px"}}>


            <h2 className="text-center">
                Login
            </h2>



            <form onSubmit={handleSubmit}>


            <input

            className="form-control mb-3"

            name="email"

            type="email"

            placeholder="Email"

            value={form.email}

            onChange={handleChange}

            />



            <input

            className="form-control mb-3"

            name="password"

            type="password"

            placeholder="Password"

            value={form.password}

            onChange={handleChange}

            />



            <button

            className="btn btn-success w-100">

                Login

            </button>



            </form>



            {
                message &&
                <p className="text-center mt-3">
                    {message}
                </p>
            }



            </div>


        </div>


    );

}


export default Login;