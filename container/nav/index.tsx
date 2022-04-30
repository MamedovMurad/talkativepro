import MainNav from "../../components/main_nav";
import RightNav from "../../components/right_nav";
import { nav } from "../../Model/utils/nav";
import styles from './index.module.css'

type NavProps = {}
 
const Nav:React.FC<NavProps> = () => {

    return (
        <>
        <MainNav/>
        <RightNav/>
        </>
    );
}
 
 
export default Nav;