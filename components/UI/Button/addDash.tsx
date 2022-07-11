import styles from './index.module.css'
interface IButtonDash{
    onClick?:any
}
const ButtonDash =({onClick=()=>''}:IButtonDash) => {
  return <div className={styles.buttonDash} onClick={onClick}>
    <button> <span>+</span> Əlavə et</button>
  </div>;
};

export default ButtonDash;
