import {useNavigate} from "react-router-dom";

function Nav()
{
    const navigate=useNavigate();
    const tk=()=>{
        navigate("/User");
}

    return(
       <div className="bg-primary navbar navbar-expand-lg navbar-dark">
           <div className="container-fluid">
            <a className="navbar-brand">Full Stack Java</a>

          <button className="btn btn-outline-light " onClick={tk}>Adduser</button>
           </div>
       </div>
    );
}
export default Nav;