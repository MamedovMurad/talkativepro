import Link from 'next/link';
import { LogoSvg } from '../../svg/Logo';
import Nav from '../nav';
import styles from './index.module.css'
type HeaderProps = {}
 
const Header:React.FC<HeaderProps> = () => {
    return (
        <div className={styles.header}>
            <div className={`wrapper ${styles.wrapper}`}>
               <Link href="/">
                   <a ><LogoSvg/></a>
               </Link>
               <Nav/>
            </div>
        </div>
    );
}
 
 
export default Header;