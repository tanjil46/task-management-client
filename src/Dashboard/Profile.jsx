import useAuth from "../Hooks/useAuth";


const Profile = () => {
    const{user}=useAuth()

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


<div className=" w-[600px] bg-gradient-to-t from-blue-600 to-purple-600">
<div className="card-body">
<p className="text-center text-xl font-bold border-b-2 border-orange-500">Completed Task</p>


</div>

</div>





</div>
        </div>
    );
};

export default Profile;