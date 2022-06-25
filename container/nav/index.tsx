import MainNav from "../../components/main_nav";
import RightNav from "../../components/right_nav";
import useResponsivenenessAdjuster from "../../hooks/useResponsivenenessAdjuster";
import useWindowDimensions from "../../hooks/windowDimensions";
import { nav } from "../../Model/utils/nav";
import { BurgerSVG } from "../../svg/burgerSVG";
import Link from "next/link";

type NavProps = {
    settoggle?:any
}
 
const Nav:React.FC<NavProps> = ({settoggle}) => {
  
    return (
        !useResponsivenenessAdjuster(920)?  <>
        <MainNav/>
        <RightNav/>
        </> :/*  <ResponsiveNav /> */ <div onClick={()=>settoggle((item:boolean)=>!item)}>{<BurgerSVG/>}</div>
    );
}
 
 
export default Nav;