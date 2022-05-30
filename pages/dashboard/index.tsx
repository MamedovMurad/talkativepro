import CustomCalendar from "../../container/Auth/calendar";
import AuthTeacher from "../../container/Auth/teacher";
import AuthUser from "../../container/Auth/user";
import withAuth from "../../Hoc/Private";

type DashboradProps = {};
const Dashborad: React.FC<DashboradProps> = ({ data }: any) => {
  return (
    <>
      {data.teacher ? (
        <AuthTeacher>
          <CustomCalendar />
        </AuthTeacher>
      ) : (
        <AuthUser />
      )}
    </>
  );
};

export default withAuth(Dashborad);
