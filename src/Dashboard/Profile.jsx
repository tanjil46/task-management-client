import { useQuery } from "@tanstack/react-query";
import useAuth from "../Hooks/useAuth";
import useAxios from "../Hooks/useAxios";


const Profile = () => {
    const{user}=useAuth()
    const axiosPublic=useAxios()
    const{data:tasks=[]}=useQuery({
        queryKey:['tasks',user?.email],
        queryFn:async()=>{
         const res=await axiosPublic.get(`/task/${user?.email}`)
         return res.data
        }
      })
    return (
        <div>
            <p className="text-2xl text-black m-3">WElcome Back,<span className="text-2xl text-pink-600">{user?.displayName}</span></p>
            <div className="flex my-6 ">






<div className=" w-[600px] bg-orange-200">
<div className="card-body">





<img className="w-[180px] rounded-full mx-auto border-orange-600 border-2" src={user?.photoURL}></img>

<p className="text-center text-xl font-bold">{user?.displayName}</p>
<p className="text-center text-red-500 text-xl font-bold">{user?.email}</p>
</div>

</div>

<p className="border-3 border-orange-600"></p>


<div className=" w-[600px] bg-gradient-to-t from-blue-500 to-cyan-500">
<div className="card-body">
<p className="text-center text-xl font-bold border-b-2 border-orange-500">My Task</p>
<ul>
    {
        tasks.map(task=><li className="text-white text-lg" key={task._id}>Task Name:<span className="text-yellow-600">{task.title}</span>  Status:<span className="text-red-600">{task.status}</span></li>)
    }
</ul>

</div>

</div>





</div>
        </div>
    );
};

export default Profile;