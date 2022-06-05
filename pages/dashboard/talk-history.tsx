import { useEffect, useState } from "react";
import agent from "../../Api/agent";
import AuthTeacher from "../../container/Auth/teacher";
import TeacherAuthHeader from "../../container/Auth/teacher/header";
import TalkHistory from "../../container/talkHistory";
import withAuth from "../../Hoc/Private";
import { GenericListDto, IOldDoc } from "../../Model/DTO";
import Login from "../login";

type TalkHIstoryProps = {};
// baxilcaq
const TalkHIstory: React.FC<TalkHIstoryProps> = ({ data }: any) => {
  const [oldConversations, setoldConversations] = useState<GenericListDto<IOldDoc[]>|null>(null)
  async function fetchApiCall(){
    if (data.teacher) {
      try {
        const res = await agent.teacher.oldConversations()
        res&& setoldConversations(res.data)
      } catch (error) {
        
      }
    }

  }
  console.log(oldConversations,'test');
  useEffect(() => {fetchApiCall()}, [])
  
  return (
    <>
      {data.teacher ? (
        <>
          <AuthTeacher>
            <TalkHistory list={oldConversations?.entities}/>
          </AuthTeacher>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default withAuth(TalkHIstory);
