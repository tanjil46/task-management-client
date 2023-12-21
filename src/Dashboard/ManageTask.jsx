
import { useEffect, useState } from "react";
import useAxios from "../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import SeparateTask from "./SeparateTask";


const ManageTask = () => {
const[todo,setTodo]=useState([])
const[ongoing,setOngoing]=useState([])
const[completed,setCompleted]=useState([])
 const[allTaks,setAllTaks]=useState([])
const axiosPublic=useAxios()

  const{data:tasks=[],refetch}=useQuery({
    queryKey:['tasks'],
    queryFn:async()=>{
     const res=await axiosPublic.get('/task')
     return res.data
    }
  })
  useEffect(()=>{
    setAllTaks(tasks)
  },[tasks])

 useEffect(()=>{

const todo=allTaks.filter(task=>task.status==='todo')
const ongoing=allTaks.filter(task=>task.status==='ongoing')
const completed=allTaks.filter(task=>task.status==='completed')

setTodo(todo)
setOngoing(ongoing)
setCompleted(completed)



 },[allTaks])

const statuses=['todo','ongoing','completed']









console.log(tasks)


    return (
        <div>
            <div className="flex justify-center gap-8 m-5">
           {
            statuses.map((sta,idx)=><SeparateTask setAllTaks={setAllTaks} allTaks={allTaks} tasks={tasks} todo={todo} ongoing={ongoing} completed={completed} key={idx} refetch={refetch} sta={sta}></SeparateTask>)
           } 
           </div>
        </div>
    );
};

export default ManageTask;