import Link from 'next/link';
import { nav } from '../../Model/utils/nav';
import styles from './index.module.css'
type MainNavProps = {}
 
const MainNav:React.FC<MainNavProps> = () => {
    return (
        <ul className={styles.nav}>
        {
            nav.map(item=>(
                <li key={item.id}><Link href={item.path}>
             <a > {item['title_AZ']}</a>
              </Link></li>
            ))
        }
        
    </ul>
    );
}
 
 
export default MainNav;