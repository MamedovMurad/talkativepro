import { BurgerSVG } from "../../svg/burgerSVG";

type ResponsiveNavProps = {}
 
const ResponsiveNav:React.FC<ResponsiveNavProps> = () => {
    return (
        <div>
           {<BurgerSVG/>}
        </div>
    );
}
 
 
export default ResponsiveNav;