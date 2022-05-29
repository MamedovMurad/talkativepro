import ButtonUI from '../../components/UI/Button';
import InputUI from '../../components/UI/Input';
import Links from '../../components/UI/links';
import { MailSvg } from '../../svg/mail';
import { TelSvg } from '../../svg/tel';
import styles from './index.module.css'
type ContactProps = {}
 
const Contact:React.FC<ContactProps> = () => {
    return (
        <div className={styles.contact}>
            <div className="wrapper">
            <h3>Bizimlə əlaqə</h3>
            <div className={styles.content}>
                <div className={styles.info}>
                   <div>
                   <h3>Sual və ya təkliflərinizibizə yaza bilərsiniz</h3>
                   <div className={styles.mail}>
                       <span><MailSvg/></span>
                       <span>info@talkative.com</span>
                   </div>
                   <div className={styles.tel}>
                       <span><TelSvg/></span>
                       <span>+994 50 123 45 67</span>
                   </div >
                    <div className={styles.linksarea}><Links/></div>
                   </div>
                </div>
                <div className={styles.form}>
                    <form action="">
                        <InputUI id={1} label="Ad/ Soyad" name="fsd"/>
                        <InputUI id={2} label="Email" name="fsd"/>
                        <InputUI id={3} label="Mövzu" name="fsd"/>
                        <InputUI id={4} label="Mesajınız" height="112px" name="fsd"/>
                        <div className={styles.buttonArea}><ButtonUI text="Göndər" height="44px"/></div>
                    </form>
                </div>
            </div>
            </div>
           
          
        </div>
    );
}
 
 
export default Contact;