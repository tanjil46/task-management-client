import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";


const CreateTask = () => {
    const { register, handleSubmit,reset} = useForm()
    const {user}=useAuth()
    const axiosPublic=useAxios()
 const onSubmit=async(data)=>{
 const email=data.email
 const title=data.title 
 const date=data.date 
 const priority=data.priority 
 const desc=data.desc
 const status='todo'
const taskInfo={email,title,date,priority,desc,status}



const res=await axiosPublic.post('/task',taskInfo)
console.log(res.data)
if(res.data.insertedId){
   reset()
    Swal.fire(
        'suceess',
        'Task Uploaded Successfully',
        'success'
        
    )
}

 }




    return (
        <div>
            
            <div className="bg-slate-500">
           <p className="text-xl text-white text-center ">Create Your Task</p>
            <form className="p-12" onSubmit={handleSubmit(onSubmit)}>





            <div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Email*</span>
   
  </label>
  <input {...register('email',{required:true})} defaultValue={user?.email} type="text" placeholder=" email" className="input  input-bordered input-primary w-full " />
  
</div>







<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Title*</span>
   
  </label>
  <input {...register('title',{required:true})}  type="text" placeholder=" task title" className="input  input-bordered input-primary w-full " />
  
</div>



<div className="form-control w-full my-6">
<label className="label">
<span className="label-text">Date</span>

</label>
<input {...register('date',{required:true})} type="date"  className="input  input-bordered input-primary w-full " />

</div>



<div className="form-control w-full my-6">
  <label className="label">
    <span className="label-text">Select Priority*</span>
   
  </label>
 

  <select defaultValue='default' {...register('priority',{required:true} )}    className="select select-bordered w-full ">
  <option disabled value='default'>Select Priority</option>
  <option value="low">Low</option>
  <option value="moderate">Moderate</option>
  <option value="high">High</option>
</select> 
  
</div>



<div className="form-control">
  <label className="label">
    <span className="label-text">Task description</span>
   
  </label>
  <textarea {...register('desc',{required:true} )} className="textarea textarea-bordered h-24" placeholder="task description"></textarea>
  
  </div>

<div className="text-center">
  <button type="submit" className="btn bg-gradient-to-t from-pink-500 to-purple-500 text-white my-6 ">Add Task</button>
  </div>



            </form>










            </div>
        </div>
    );
};

export default CreateTask;