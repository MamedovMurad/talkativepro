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
  async function fetchApi(){
    if (data.loggedAsTeacher) {
      return 
    }
      const res = await agent.Student.followingTeacher()
      res.data&& setfollowedTeachers(res.data?.entities)
  }
  useEffect(() => {fetchApi()}, [])
  
  return (
    <>
      {!data.loggedAsTeacher ? (
        <AuthUser >
        <FollowingContainer  list={followedTeachers?.map(item=>({fullname:item.firstName+item.lastName, shortname: item.firstName[0]+' ' +item.lastName[0], avatar:item.avatar, star:item.rating, langs:item.languages?.map(item=>item.name)}))}/>
       </AuthUser>
      ) : (
        <Login />
      )}
    </>
  );
};

export default withAuth(Followings);