import Link from 'next/link';
import { useEffect, useState } from 'react';
import useResponsivenenessAdjuster from '../../hooks/useResponsivenenessAdjuster';
import { LogoSvg } from '../../svg/Logo';
import Nav from '../nav';
import styles from './index.module.css'
import { nav } from "../../Model/utils/nav";
type HeaderProps = {}
 
const Header:React.FC<HeaderProps> = () => {
    const [toggle, settoggle] = useState(false)
    const [color, setcolor] = useState('');
    
    const changeBackground = () => {
     
        
        console.log(window.scrollY)
        if (window.scrollY >= 26) {
            setcolor('active')
        } else {
            setcolor('')
        }
      }
console.log('fasdfsdfdsafsd');

      useEffect(() => {
        window.addEventListener("scroll", changeBackground)
      })
    return (
        <div className={`${styles.header} ${styles['header'+color]}`}>
            <div className={`wrapper ${styles.wrapper}`}>
               <Link href="/">
                   <a ><LogoSvg/></a>
               </Link>
              <Nav settoggle={settoggle}/>
               {
                     useResponsivenenessAdjuster(920)&& <div className={styles.BGSearch}></div>
               }
            </div>

            <div className={`${styles.responsiveMenu}  ${toggle?styles.responsiceActive: styles.responsiveDeActive}`}>
                <ul>
                    {
                        nav.map(item=>(
                            <li key={item.id}><Link href={item.path}>
                            <a> {item["title_AZ"]}</a>
                          </Link></li>
                        ))
                    }
                   
           
                </ul>
            </div>
        </div>
    );
}
 
 
export default Header;