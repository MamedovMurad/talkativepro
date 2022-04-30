import Link from 'next/link';
import ButtonUI from '../../components/UI/Button';
import InputUI from '../../components/UI/Input';
import MapUI from '../../components/UI/map';
import styles from './index.module.css'
type LoginProps = {}
 
const Login:React.FC<LoginProps> = () => {
    return (
      <div className="wrapper">
            <div className={styles.login}>
                <MapUI/>
            <div className={styles.formDiv}>
                <div className={styles.links}>
                    <Link href="/register" ><a >Qeydiyyat</a></Link>
                    <Link href="/register"><a className={styles.active}>Giriş</a></Link>
                </div>
                <form action="">
                    <InputUI label="Email" id={323453453432432}/>
                    <InputUI label="Şifrə" id={134342932432432}/>
               <div className={styles.accesArea}>
               <input type="checkbox" id="chekcboxeslogin"/> <label htmlFor="chekcboxeslogin" className={styles.labelForCheckbox}><span>Məxfilik Siyasəti </span> və <span>İstifadə Şərtləri</span> ilə razılaşıram</label>
               </div>
               <ButtonUI text={'Qeydiyyatdan keç'} width="360px" height="56px"/>
                </form>
            </div>
        </div>
      </div>
    );
}
 
 
export default Login;