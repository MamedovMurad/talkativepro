import Link from 'next/link';
import useResponsivenenessAdjuster from '../../hooks/useResponsivenenessAdjuster';
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
               {
                     useResponsivenenessAdjuster(920)&& <div className={styles.BGSearch}></div>
               }
            </div>
        </div>
    );
}
 
 
export default Header;