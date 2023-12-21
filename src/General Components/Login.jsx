import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";
import GoogleLogin from "./GoogleLogin";
import { useLocation, useNavigate } from "react-router-dom";


const Login = () => {
    const { register, handleSubmit,reset } = useForm()
    const{userSingIn}=useAuth()
    const navigate=useNavigate()
    const location=useLocation()
    const onSubmit=async(data)=>{
     const email=data.email
     const password=data.password
     console.log(email,password)
     userSingIn(email,password)
     .then((result)=>{
      console.log(result.user)
      reset()
      Swal.fire(
        'success',
        'Succesfully Log In',
        'success'
      )
      navigate(location?.state? location.state:'/')
     })
     .catch(error=>{
      console.log(error.message)
      Swal.fire(
        'error',
        `${error.message}`,
        'error'
      )
     })
    }

    return (
        <div className="bg-gradient-to-t from-pink-600 to-purple-600 h-[500px]  max-w-lg rounded-xl py-8 mx-auto">
            
        <p className="text-center text-xl text-white ">Welcome Back</p>

       

            <form className=" my-6" onSubmit={handleSubmit(onSubmit)}>

       
      



    <div className="flex flex-col  p-4 space-y-3">
   <span className="label-text font-bold text-slate-900">Your Email</span>
   <input type="text" {...register('email',{required:true})} placeholder="Your Email"  className="input input-bordered input-sm w-full max-w-xs  " required/>
    </div>






    <div className="flex flex-col p-4 space-y-3">
   <span className="label-text font-bold text-slate-900">Password</span>
   <input type="password" {...register('password',{required:true})} placeholder="Password"  className="input input-bordered input-sm w-full max-w-xs " required/>

 <div className="">
 <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
 </div>







    </div>
    <div className="ml-5 my-4">
    <button type="submit" className=" py-2 px-4  w-full max-w-xs bg-lime-500">Login</button>
    </div>
    


 </form>

     <div className="text-center my-3">
      <p className="font-bold text-slate-500  text-center">Or Login with</p>
      <GoogleLogin></GoogleLogin>

     </div>








       </div>
    );
};

export default Login;