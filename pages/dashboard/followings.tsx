import { useEffect, useState } from "react";
import agent from "../../Api/agent";
import AuthTeacher from "../../container/Auth/teacher";
import AuthUser from "../../container/Auth/user";
import FollowingContainer from "../../container/Auth/user/followingContainer";
import QrammaticOrLecture from "../../container/Auth/user/qrammatic";
import withAuth from "../../Hoc/Private";
import { GenericListDto, IDocument } from "../../Model/DTO";
import Login from "../login";

const Followings: React.FC = ({ data }: any) => {
 /*  const [docs, setdocs] = useState<GenericListDto<IDocument[]>|null>(null)
  async function fetchApi(){
    if (data.loggedAsTeacher) {
      return 
    }
      const res = await agent.Student.grammerOrLecture(0)
      res&& setdocs(res.data)
  }
  useEffect(() => {fetchApi()}, []) */
  
  return (
    <>
      {!data.loggedAsTeacher ? (
        <AuthUser >
        <FollowingContainer />
       </AuthUser>
      ) : (
        <Login />
      )}
    </>
  );
};

export default withAuth(Followings);