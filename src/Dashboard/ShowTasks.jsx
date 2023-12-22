
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";
import { useDrag } from "react-dnd";
import PropTypes from 'prop-types';

const ShowTasks = ({task,refetch}) => {

const axiosPublic=useAxios()
const [{ isDragging }, drag] = useDrag(() => ({
    type: 'task',
    item:{id:task._id},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  console.log(isDragging)

const deleteTask=(_id)=>{
console.log(_id)
Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {

    if (result.isConfirmed) {

        axiosPublic.delete(`/task/${_id}`)
        .then(res=>{
            console.log(res.data)
          
            if(res.data.deletedCount>0){
              
                refetch()
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
        
            }
        })

    }

    
})














}








    return (
        <div ref={drag}>
            
            <div className="p-3 flex items-center justify-around cursor-grab rounded-2xl shadow-md my-2 bg-gradient-to-r from-cyan-500 to-blue-500">
                
            <p>{task?.title}</p> 
             <div className="">
            <button  onClick={()=>deleteTask(task._id)} className="text-xl btn ">x</button>
            </div>
            </div>
           
        </div>
    );
};


ShowTasks.propTypes={
 task:PropTypes.object,
 refetch:PropTypes.func
        
        
     }
      
export default ShowTasks;