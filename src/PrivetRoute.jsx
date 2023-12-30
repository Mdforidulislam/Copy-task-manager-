import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { usecontextHook } from "./Auth/Context";


const PrivetRoute = ({children}) => {
    const {userInfo ,loading } = useContext(usecontextHook)
    console.log(userInfo);
    if(loading)<div>loadding......</div>
   if (userInfo) {
    return children;
   }
   return <Navigate to='/login'/>
};

export default PrivetRoute;