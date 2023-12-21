import { Link, Outlet } from "react-router-dom";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const Dashboard = () => {
    return (
        <div className="flex w-full">
             <div className="flex flex-col space-y-6 bg-cyan-600 w-[20%]  p-4 h-screen">
               <Link to='/dashboard/profile' className="text-white text-lg hover:bg-slate-400 hover:p-2 hover:rounded-lg">Profile</Link>
               <Link to='/dashboard/create' className="text-white text-lg hover:bg-slate-400 hover:p-2 hover:rounded-lg">Create Task</Link>
               <Link to='/dashboard/manage'  className="text-white text-lg hover:bg-slate-400 hover:p-2 hover:rounded-lg">Manage Task</Link>
              <div className="">
                <Link className="text-lg" to='/'>Home</Link>
              </div>
             </div>

 <div className="w-[80%]">
 <DndProvider backend={HTML5Backend}>
    <Outlet></Outlet>
    </DndProvider>
 </div>







        </div>
    );
};

export default Dashboard;