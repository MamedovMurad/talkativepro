import { useContext } from "react";
import ButtonUI from "../../../../components/UI/Button";
import { UserContext } from "../../../../pages/_app";
import styles from "./index.module.css";
type DeleteAccountProps = {};

const DeleteAccount: React.FC<DeleteAccountProps> = () => {
    const [data, dispatch] = useContext(UserContext);
  return (
    <div>
      <form action="">
        <h4 className={styles.titleDeleteAccount}>{data.users.user_info.firstName + " " + data.users.user_info.lastName}</h4>
        <p className={styles.deleteAccountParagraph}>
          Getdiyinizi görmək bizim üçün üzücüdür. <br />
          E-poçt bildirişlərinizi azaltmaq, və ya sadəcə istifadəçi adınızı
          dəyişdirmək istəyirsinizsə, onları burada edə bilərsiniz. <br />{" "}
          <br />
          Hesab silinməsini bizim tərəfimizdən təsdiq edildikdən sonra
          profiliniz birdəfəlik silinəcək
        </p>

        <div style={{ marginTop: "25px" }}>
          <ButtonUI text="Təsdiqlə" width="148px" height="44px" />
        </div>
      </form>
    </div>
  );
};

export default DeleteAccount;
