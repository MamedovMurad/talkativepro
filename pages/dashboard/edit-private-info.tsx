import TeacherAuthHeader from "../../container/Auth/teacher/header";
import OwnEditTeacher from "../../container/Auth/teacher/ownEdit";
import withAuth from "../../Hoc/Private";
import React from "react";
import HeaderAuthUser from "../../container/Auth/user/header";

type EditPrivateInfoProps = {
  data?:any
};

const EditPrivateInfo: React.FC<EditPrivateInfoProps> = ({data}) => {
  console.log(data,'lll');
  
  return (
    <div>
      <div className="warpperAUth">
           {
            data?.loggedAsTeacher? <TeacherAuthHeader /> : <HeaderAuthUser/>
           } 
            <OwnEditTeacher isTeacher={data?.loggedAsTeacher}/>
      </div>
    </div>
  );
};

export default withAuth(EditPrivateInfo);
