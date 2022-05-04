import Link from "next/link";
import { nav } from "../../Model/utils/nav";
import styles from "./index.module.css";
import { useRouter } from 'next/router'
type MainNavProps = {};

const MainNav: React.FC<MainNavProps> = () => {
    const router = useRouter()
  return (
    <ul className={styles.nav}>
      {nav.map((item) => (
        <li key={item.id} className={router.pathname==item.path?styles.activeNav:styles.nafv}>
          <Link href={item.path}>
            <a> {item["title_AZ"]}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MainNav;
