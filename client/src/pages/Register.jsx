import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";


function Register(){

    const navigate = useNavigate();


    const [form,setForm] = useState({

        name:"",
        email:"",
        password:""

    });


    const [message,setMessage]=useState("");



    const handleChange=(e)=>{

        setForm({

            ...form,

            [e.target.name]:e.target.value

        });

    };



    const handleSubmit=async(e)=>{

        e.preventDefault();


        try{


            await API.post(
                "/auth/register",
                form
            );


            setMessage(
                "Registration successful"
            );


            setTimeout(()=>{

                navigate("/login");

            },1000);



        }
        catch(error){

            setMessage(
                error.response?.data?.message ||
                "Registration failed"
            );

        }

    };



    return(

        <div className="container mt-5">

            <div className="card p-4 mx-auto"
            style={{maxWidth:"450px"}}>


            <h2 className="text-center">
                Register
            </h2>


            <form onSubmit={handleSubmit}>


            <input

            className="form-control mb-3"

            name="name"

            placeholder="Name"

            value={form.name}

            onChange={handleChange}

            />



            <input

            className="form-control mb-3"

            name="email"

            placeholder="Email"

            type="email"

            value={form.email}

            onChange={handleChange}

            />



            <input

            className="form-control mb-3"

            name="password"

            placeholder="Password"

            type="password"

            value={form.password}

            onChange={handleChange}

            />



            <button

            className="btn btn-primary w-100">

                Register

            </button>



            </form>



            {
                message &&
                <p className="mt-3 text-center">
                    {message}
                </p>
            }


            </div>


        </div>

    );

}


export default Register;