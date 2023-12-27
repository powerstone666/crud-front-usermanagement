import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

function V()
{
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    });
    const {id} =useParams();
    useEffect(() => {
        load();
    }, [id]);
    const load=async ()=>{
        const res=await axios.get(`http://localhost:8080/user/${id}`);
        setUser(res.data);
    }
    return(

        <div>
            <div>

                <h1>{user.name}</h1>
                <h1>{user.username}</h1>
                <h1>{user.email}</h1>


        </div>
        </div>
    );
}
export default V;
