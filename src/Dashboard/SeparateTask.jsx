import { useDrop } from "react-dnd";
import ShowTasks from "./ShowTasks";
import { useState } from "react";
import useAxios from "../Hooks/useAxios";


const SeparateTask = ({sta,tasks,todo,completed,ongoing,refetch,setAllTaks, allTaks }) => {
    const axiosPublic=useAxios()
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'task',
        drop:(item)=>addItem(item.id),
        collect: (monitor) => ({
          isOver: !!monitor.isOver()
        })
      }))

      console.log(isOver)






let bg='bg-green-500'
let text='TODO'
let taskmap=todo

if(sta==='ongoing'){
    bg='bg-pink-500'
    text='ONGOING'
    taskmap=ongoing
}
if(sta==='completed'){
    bg='bg-purple-500'
    text='COMPLETED'
    taskmap=completed
}

const addItem=(id)=>{
console.log('status now',sta)
 setAllTaks((prev)=>{
const modifiedTask=prev.map(pre=>{
    if(pre._id===id){
        return{...pre,status:sta}
    }
    return pre
})


// axiosPublic.post(`/task`,modifiedTask)
// .then(res=>{
//     console.log(res.data)
// })


console.log(prev)



return modifiedTask

 })
}







// const mTaks=prev.map(pre=>{
//     if(pre.id===id){
//         return{...pre,status:sta}
//     }
//     return pre
// })



    return (
        <div ref={drop} className={`${isOver?'bg-slate-400':''}`}>
            <p className={`${bg} p-2 w-[160px] rounded-2xl text-center text-white`}>{text}<span className="bg-white rounded-full  text-black">{taskmap.length}</span></p>
           <div  className="">
            {
                taskmap.map(task=><ShowTasks refetch={refetch} key={task._Id} task={task}></ShowTasks>)
            }
           </div>
        </div>
    );
};

export default SeparateTask;