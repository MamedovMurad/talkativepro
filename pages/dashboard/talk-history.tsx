import AuthTeacher from "../../container/Auth/teacher";
import TeacherAuthHeader from "../../container/Auth/teacher/header";
import TalkHistory from "../../container/talkHistory";
import withAuth from "../../Hoc/Private";
import Login from "../login";

type TalkHIstoryProps = {};

const TalkHIstory: React.FC<TalkHIstoryProps> = ({ data }: any) => {
  return (
    <>
      {data.teacher ? (
        <>
          <AuthTeacher>
            <TalkHistory />
          </AuthTeacher>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default withAuth(TalkHIstory);
