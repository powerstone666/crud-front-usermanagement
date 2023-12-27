import Nav from "./nav";
import Home from "./home.jsx";
import V from "./view.jsx"
import Adduser from "./User.jsx"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Eduser from "./edituser.jsx";
function App() {


  return (
    <>
        <Router>
            <Nav/>
            <Routes>

                <Route path="/" element={<Home/>}></Route>
                <Route path="/User" element={<Adduser/>}></Route>
                <Route path="/edit/:id" element={<Eduser/>}></Route>
                <Route path="/view/:id" element={<V/>}></Route>
            </Routes>
        </Router>
    </>
  )
}

export default App
