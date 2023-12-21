
import { FaGoogle } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const GoogleLogin = () => {
    const {googleLogIn}=useAuth()
   
   const navigate=useNavigate()

const googleHadler=()=>{
    googleLogIn()
    .then((result)=>{
      console.log(result.user)
      Swal.fire(
        'success',
        'Succesfully Log In',
        'success'
      )
      navigate('/')
  })





   
    .catch(error=>console.log(error.message))
    
    
}

    return (
        <div>
             <button onClick={googleHadler} className="btn bg-yellow-500 "><FaGoogle className="text-2xl"></FaGoogle></button> 
        </div>
    );
};

export default GoogleLogin;