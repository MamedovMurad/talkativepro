import ButtonUI from "../../../../components/UI/Button";
import InputUI from "../../../../components/UI/Input";
import styles from './index.module.css'
type PasswordEditProps = {};

const PasswordEdit: React.FC<PasswordEditProps> = () => {
  return (
    <div>
      <form action="">
        <InputUI id={9075223} name="" label="Əvvəlki şifrə" type="password" />
        <InputUI id={9075123} name="" label="Yeni şifrə" type="password" />
        <div className={styles.forgetPass}><span>Şifrənizi unutmusunuz?</span></div>
        <div style={{ marginTop: "15px" }}>
          <ButtonUI text="Yadda saxla" width="148px" height="44px" />
        </div>
      </form>
    </div>
  );
};

export default PasswordEdit;
