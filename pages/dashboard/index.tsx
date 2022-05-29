import Router from "next/router";
import { useContext, useEffect, useState } from "react";
import { getCookie } from "react-use-cookie";
import agent from "../../Api/agent";
import SpinnerLOader from "../../components/UI/spinner";
import AuthTeacher from "../../container/Auth/teacher";
import AuthUser from "../../container/Auth/user";
import Login from "../login";
import { UserContext } from "../_app";

type DashboradProps = {};
const Dashborad: React.FC<DashboradProps> = () => {
  const [dashboardUI, setDashboardUI] = useState<any>(<SpinnerLOader/>)

  const CheckUser = async () => {
    try {
      const data = await agent.Auth.getMe();
      console.log(data, "fasdfjksadgfjsdgafjsafhksdahsadkjhfghduasfoisd");
      if (!data) {
        Router.replace("/login");
      } else if (data) {
        if (data.data?.teacher) {
          setDashboardUI( <AuthTeacher />);
        } else {      
        setDashboardUI(<AuthUser />) ;
        }
      }
    } catch (error) {  Router.replace("/login");}
  };

  useEffect(() => {
    CheckUser();
  }, []);

  return <>{dashboardUI}</>;
};

export default Dashborad;
