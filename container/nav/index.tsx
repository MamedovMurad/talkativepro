import MainNav from "../../components/main_nav";
import RightNav from "../../components/right_nav";
import useResponsivenenessAdjuster from "../../hooks/useResponsivenenessAdjuster";
import useWindowDimensions from "../../hooks/windowDimensions";
import { nav } from "../../Model/utils/nav";
import styles from './index.module.css'
import ResponsiveNav from "./responsiveNav";

type NavProps = {}
 
const Nav:React.FC<NavProps> = () => {
  
    return (
        !useResponsivenenessAdjuster(920)?  <>
        <MainNav/>
        <RightNav/>
        </> : <ResponsiveNav/>
    );
}
 
 
export default Nav;