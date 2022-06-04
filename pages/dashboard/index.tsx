import CustomCalendar from "../../container/Auth/calendar";
import AuthTeacher from "../../container/Auth/teacher";
import AuthUser from "../../container/Auth/user";
import TalksContainer from "../../container/talks";
import withAuth from "../../Hoc/Private";
import Aside from "../../layout/aside";

type DashboradProps = {};
const Dashborad: React.FC<DashboradProps> = ({ data }: any) => {
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
           <TalksContainer width="79%" />
           </>
          </AuthUser>
      )}
    </>
  );
};

export default withAuth(Dashborad);
