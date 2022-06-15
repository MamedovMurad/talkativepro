import withAuth from "../../Hoc/Private";
import Login from "../login";
import Talks from "../talks";

const UserTalks: React.FC = ({ data }: any) => {
  return <>{data.loggedAsTeacher ? < Talks/> : <Login />}</>;
};

export default withAuth(UserTalks);
