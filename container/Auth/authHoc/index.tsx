import { useRouter } from "next/router";
import Login from "../../../pages/login";
import * as React from "react";
import agent from "../../../Api/agent";
import redirect from "../../../Lib/redirect";
export const withAuth = <T extends object>(C: any) => {
    return class AuthComponent extends React.Component<T> {
      static async getInitialProps({
      
              ...ctx
      }: any) {
             const response = await agent.Auth.getMe();
            console.log(response,'asfsadasd');
            
            if (!response || !response.data || !response.data.uuid) {
              redirect(ctx, "/login");
              return {
                me: null,
              };
            }
      
            return {
              me: response.data,
            };
              
         
    
      }
  
      render() {
        return <C  />;
      }
    };
  };