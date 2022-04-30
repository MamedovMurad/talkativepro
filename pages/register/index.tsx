import Link from 'next/link';
import ButtonUI from '../../components/UI/Button';
import InputUI from '../../components/UI/Input';
import MapUI from '../../components/UI/map';
import styles from './../login/index.module.css'
type RegisterProps = {}
 
const Register:React.FC<RegisterProps> = () => {
    return (
        <div className="wrapper">
            <div className={styles.login}>
            <MapUI/>
            <div className={styles.formDiv}>
                <div className={styles.links}>
                    <Link href="/register" ><a className={styles.active}>Qeydiyyat</a></Link>
                    <Link href="/login"><a >Giriş</a></Link>
                </div>
                <form action="">
                    <InputUI label="Ad/ Soyad" id={1932432432}/>
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
 
 
export default Register;