import TeacherAuthHeader from "../../container/Auth/teacher/header";
import OwnEditTeacher from "../../container/Auth/teacher/ownEdit";
import withAuth from "../../Hoc/Private";
import React from "react";

type EditPrivateInfoProps = {};

const EditPrivateInfo: React.FC<EditPrivateInfoProps> = () => {
  return (
    <div>
      <div className="wrapperAUth">
             <TeacherAuthHeader />
            <OwnEditTeacher/>
      </div>
    </div>
  );
};

export default withAuth(EditPrivateInfo);
