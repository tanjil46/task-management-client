import { useContext } from "react";
import { AuthContext } from "../General Components/Authprovider";


const useAuth = () => {
    const auth=useContext(AuthContext)
    return auth
};

export default useAuth;