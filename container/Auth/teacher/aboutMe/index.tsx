import { setCookie } from "react-use-cookie";
import DropDownUI from "../../../../components/UI/dropDown";
import { SettingsSVG } from "../../../../svg/settings";
import AsideTeacher from "../../../aside/asideTeacher";

type AboutTeacherAuthProps = {}
 
const AboutTeacherAuth:React.FC<AboutTeacherAuthProps> = () => {
    function cb(){
        setCookie('agent', '', { days: 0 })
    }
    return (
        <div>
             <AsideTeacher />
             <DropDownUI title={<SettingsSVG/>} dropDownArr={[{title:'Redaktə et',link:'/dashboard/info-of-teacher'},{title:'Bizimlə əlaqə',link:'/ddsafads'},{title:'Çıxış',cb:cb}]}/>
        </div>
    );
}
 
 
export default AboutTeacherAuth;