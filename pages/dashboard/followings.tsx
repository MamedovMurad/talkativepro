import { useEffect, useState } from "react";
import agent from "../../Api/agent";
import AuthTeacher from "../../container/Auth/teacher";
import AuthUser from "../../container/Auth/user";
import FollowingContainer from "../../container/Auth/user/followingContainer";
import QrammaticOrLecture from "../../container/Auth/user/qrammatic";
import withAuth from "../../Hoc/Private";
import { GenericListDto, IDocument, ITeacher } from "../../Model/DTO";
import Login from "../login";

const Followings: React.FC = ({ data }: any) => {
  const [followedTeachers, setfollowedTeachers] = useState<ITeacher[]|null>(null)
  const [updatenfetch, setupdatenfetch] = useState(false)
  async function fetchApi(){
    if (data.loggedAsTeacher) {
      return 
    }
      const res = await agent.Student.followingTeacher()
      res.data&& setfollowedTeachers(res.data?.entities)
  }

  const folloToggle = async (uuid?: string) => {
   console.log(uuid);
   
    const res =
      uuid &&
      (await agent.Student.followTeacherToggle({
        url: uuid,
        isFolledByCurrentUser: !followedTeachers?.find((item, i)=>item.uuid==uuid)?.isFollowedByCurrentUser,
      }));
      res&& setupdatenfetch(!updatenfetch)
};

  useEffect(() => {fetchApi()}, [updatenfetch])
  
  return (
    <>
      {!data.loggedAsTeacher ? (
        <AuthUser >
        <FollowingContainer callback={folloToggle}  list={followedTeachers?.map(item=>({fullname:item.firstName+item.lastName, uuid:item.uuid,  shortname: item.firstName[0]+' ' +item.lastName[0], avatar:item.avatar, star:item.rating, langs:item.languages?.map(item=>item.name)}))}/>
       </AuthUser>
      ) : (
        <Login />
      )}
    </>
  );
};

export default withAuth(Followings);