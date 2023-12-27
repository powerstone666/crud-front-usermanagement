import {useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

function Adduser(){
    const navigate=useNavigate();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })
    const {name,username,email}=user
    const inchange=(e)=>{

 setUser({...user,[e.target.name]:e.target.value})
    }
    const ho=()=>{
        navigate("/");
    }
    const onsub=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user);
        window.alert("Submitted Suceesfully");
        navigate("/");
    }
    return(

        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Register</h2>
                    <form onSubmit={(e)=>onsub(e)}>
                    <div className="mb-3 ">
                        <label className="form-label" htmlFor="Name">Name</label>
                        <input type={"text"} className="form-control" placeholder="Enter your name" name="name" value={name} onChange={(e)=>inchange(e)}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="Name">Username</label>
                        <input type={"text"} className="form-control" placeholder="Enter your Username" name="username" value={username}  onChange={(e)=>inchange(e)} ></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="Name">Email</label>
                        <input type={"text"} className="form-control" placeholder="Enter your Email" name="email" value={email} onChange={(e)=>inchange(e)}></input>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                    <button className="btn btn-outline-danger mx-2" onClick={ho}>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Adduser;