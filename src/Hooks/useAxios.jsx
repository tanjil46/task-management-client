import axios from "axios";

const axiosPublic=axios.create({
    baseURL:'https://task-server-eosin.vercel.app'
})
const useAxios = () => {
    return axiosPublic
};

export default useAxios;