import AuthTeacher from "../../container/Auth/teacher";
import AboutTeacherAuth from "../../container/Auth/teacher/aboutMe";
import withAuth from "../../Hoc/Private";
import Login from "../login";

const InfoOfTeacherPage: React.FC = ({ data }: any) => {
  return (
    <>
      {data.teacher ? (
        <AuthTeacher>
          <AboutTeacherAuth />
        </AuthTeacher>
      ) : (
        <Login />
      )}
    </>
  );
};

export default withAuth(InfoOfTeacherPage);
