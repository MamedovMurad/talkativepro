import Link from "next/link";
import { useContext } from "react";
import { getCookie } from "react-use-cookie";
import { UserContext } from "../../pages/_app";
import ButtonUI from "../UI/Button";
import styles from "./index.module.css";

type RightNavProps = {};

const RightNav: React.FC<RightNavProps> = () => {
  const [data, dispatch] = useContext(UserContext);

const check=() => !!getCookie("agent")
  console.log({check});
  
  const CheckLoad = () => {
  
    
  if (check()&&data.users.user_info?.uuid) {
      return (
        <Link href="/dashboard">
          <a>
            <ButtonUI
            width = {'160px'}
              text={data.users.user_info.firstName + " " + data.users.user_info.lastName}
            />
          </a>
        </Link>
      );
    }
    return (
   <>
        <Link href="/login">
            <a>Giriş</a>
          </Link>
          <Link href="/register">
            <a>
              <ButtonUI text="Qeydiyyat" />
            </a>
          </Link>
   </>
    )
  };
  return <div className={styles.rightNav}>{CheckLoad()}</div>;
};

export default RightNav;
