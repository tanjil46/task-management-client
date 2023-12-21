import axios from "axios";
import { useEffect, useState } from "react";
import Showunique from "./Showunique";

const Unique = () => {
const[reviews,setReview]=useState([])
 useEffect(()=>{
axios.get('/task.json')
.then(res=>setReview(res.data))

 },[])





    return (
        <div>
            <p className="text-center my-5 md:text-2xl">How Benefits Our Websites</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {
            reviews.map(review=><Showunique key={review.id} review={review}></Showunique>)
            }
            </div>
        </div>
    );
};

export default Unique;