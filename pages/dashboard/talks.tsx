import withAuth from "../../Hoc/Private";
import Talks from "../talks";

const UserTalks: React.FC = ({ data }: any) => {
  return <>{data.teacher ? <p></p> : 
     <Talks/>}</>;
};

export default withAuth(UserTalks);
