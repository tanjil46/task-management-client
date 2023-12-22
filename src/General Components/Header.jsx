import {  Button, Navbar } from "flowbite-react";
import logo from '../img/task-logo.jpg'
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const Header = () => {
  const {user,userLogOut }=useAuth()
  const navigate=useNavigate()

 const logOutHandler=()=>{
  userLogOut()
  .then(()=>{
    Swal.fire(
      'success',
      'Successfully Logout',
      'success'
    )
    navigate('/')
  })
  .catch(error=>console.log(error.message))
 }





    return (
        <div>
             <Navbar fluid rounded>
            <Navbar.Brand>
        <img src={logo} className="w-[70px]" alt="Phone logo" />

       
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse >
       <div className="flex md:space-x-6 md:flex-row md:space-y-0  space-y-6 text-center flex-col md:items-center">
       
       <Link to='/'>Home</Link>
        <Link to='/contact' >Contact Us</Link>
        {
          user?<Link to='/dashboard/profile' >Dashboard</Link>:''
        }
        {
          user?'':<Link to='/resister' >Resister</Link>
        }
        {
          user? <Button onClick={logOutHandler} gradientMonochrome="pink">SING OUT</Button>:''
        }
        {
          user? <div className="">
            <img className="w-[55px] rounded-full mx-auto" src={user?.photoURL}></img>
          </div>:''
        }
        </div>
      </Navbar.Collapse>
    </Navbar> 
        </div>
    );
};

export default Header;