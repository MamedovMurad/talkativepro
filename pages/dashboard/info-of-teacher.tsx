import { useContext } from "react";
import AuthTeacher from "../../container/Auth/teacher";
import AboutTeacherAuth from "../../container/Auth/teacher/aboutMe";
import withAuth from "../../Hoc/Private";
import Login from "../login";
import { UserContext } from "../_app";

const InfoOfTeacherPage: React.FC = ({ data }: any) => {
  const [item, dispatch] = useContext(UserContext);
  console.log(item,'item');
  
  return (
    <>
      {data.loggedAsTeacher ? (
        <AuthTeacher>
          <AboutTeacherAuth data={item?.users?.user_info}/>
        </AuthTeacher>
      ) : (
        <Login />
      )}
    </>
  );
};

export default withAuth(InfoOfTeacherPage);
