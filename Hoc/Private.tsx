import Router from "next/router";
import { useEffect, useState } from "react";
import agent from "../Api/agent";
import SpinnerLOader from "../components/UI/spinner";

const withAuth = (Component:React.FC) => {

    const CheckUser = async () => {
        try {
          const data = await agent.Auth.getMe();
          if (!data) {
            Router.replace("/login");
          } else{
              return {teacher:data.data?.teacher}
          }
        } catch (error) {  Router.replace("/login")
             return false}
      };
    

   

      const Wrapped = (props:any)=>{
          const [componentn_custom, setcomponentn_custom] = useState(<div style={{minHeight:'110vh', minWidth:'90%', display:'flex', justifyContent:'center', alignItems:'center'}}><SpinnerLOader/></div>)
          async function generateFunction() {
             const data = await CheckUser();
             data &&   setcomponentn_custom(<Component {...props} data={data}/>)
          }
        useEffect(() => {
            generateFunction()
            
          }, []);
        return componentn_custom
      }
     return Wrapped
}

export default withAuth