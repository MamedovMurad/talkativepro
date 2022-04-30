import Link from "next/link";
import ButtonUI from "../UI/Button";
import styles from './index.module.css'

type RightNavProps = {}
 
const RightNav:React.FC<RightNavProps> = () => {
    return (
        <div className={styles.rightNav}>
            <Link href="/login">
                <a >Giriş</a>
            </Link>
            <Link href="/register">
            <a ><ButtonUI text="Qeydiyyat"/></a>
            </Link>
            
        </div>
    );
}
 
 
export default RightNav;