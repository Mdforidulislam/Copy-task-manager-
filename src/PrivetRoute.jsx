import { useContext } from "react";
import { shareAuth } from "./Auth/Authentication";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {userinfo ,loading } = useContext(shareAuth)
    console.log(userinfo);
    if(loading)<div>loadding......</div>
   if (userinfo) {
    return children;
   }
   return <Navigate to='/login'/>
};

export default PrivetRoute;