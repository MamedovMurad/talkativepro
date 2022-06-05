import TeacherAuthHeader from "../../container/Auth/teacher/header";
import OwnEditTeacher from "../../container/Auth/teacher/ownEdit";
import withAuth from "../../Hoc/Private";

type EditPrivateInfoProps = {};

const EditPrivateInfo: React.FC<EditPrivateInfoProps> = () => {
  return (
    <div>
      <div className="warpperAUth">
             <TeacherAuthHeader />
            <OwnEditTeacher/>
      </div>
    </div>
  );
};

export default withAuth(EditPrivateInfo);
