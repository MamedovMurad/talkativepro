
import { useEffect, useState } from "react";
import agent from "../../Api/agent";
import CustomCalendar from "../../container/Auth/calendar";
import AuthTeacher from "../../container/Auth/teacher";
import AuthUser from "../../container/Auth/user";
import TalksContainer from "../../container/talks";
import withAuth from "../../Hoc/Private";
import Aside from "../../layout/aside";


type DashboradProps = {};
const Dashborad: React.FC<DashboradProps> = ({ data }: any) => {
  const [talks, settalks] = useState<any>(null)

  async function fetchTalks() {
    const res = await agent.talk.list()
    res.data&& settalks(res.data)
  }
  useEffect(() => {!data.teacher&& fetchTalks()}, [])
  
  return (
    <>
      {data.teacher ? (
        <AuthTeacher>
          <CustomCalendar />
        </AuthTeacher>
      ) : (
        <AuthUser >
          <>
          <Aside width="20%" />
           <TalksContainer width="79%" list={talks?.entities}/>
           </>
          </AuthUser>
      )}
    </>
  );
};

export default withAuth(Dashborad);
