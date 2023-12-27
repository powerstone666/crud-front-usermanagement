import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

function Home()
{
const navigate=useNavigate();

    const [users,setusers]=useState([]);
    useEffect(() => {
        load();
    }, []);
    const load=async ()=>{
        try {
            const res = await axios.get("http://localhost:8080/show");
            setusers(res.data);
        }
        catch (e) {
            document.getElementById("asa").textContent="SERVERS ARE CURRENTLY DOWN";
        }
    }
    const del=async (id)=>{
        if(window.confirm("Your Account will be deleted")) {
            await axios.delete(`http://localhost:8080/user/${id}`);
            load();
        }
        else {
            navigate("/");
        }
    }
    return (
        <div className="tab">
            <center >
            <table className="table border shadow" align="center">
                <thead className="text-center">
                <tr>

                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody className="text-center">
                {
                    users.map((user, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>

                        <td>
                            <Link to={`view/${user.id}`} className="btn btn-primary mx-2">View</Link>
                            <Link className="btn btn-outline-primary mx-2" to={
                                `edit/${user.id}`
                            } >Edit</Link>
                        <button className="btn btn-danger mx-2" onClick={()=>del(user.id)}>Delete</button>
                        </td>
                    </tr>

                ))}
                <tr>
                </tr>
                </tbody>
            </table>
                <h1 id="asa"></h1>
            </center>
        </div>
    );

}
export default Home;