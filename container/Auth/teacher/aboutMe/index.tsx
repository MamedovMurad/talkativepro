import DropDownUI from "../../../../components/UI/dropDown";
import { SettingsSVG } from "../../../../svg/settings";
import AsideTeacher from "../../../aside/asideTeacher";

type AboutTeacherAuthProps = {}
 
const AboutTeacherAuth:React.FC<AboutTeacherAuthProps> = () => {
    return (
        <div>
             <AsideTeacher />
             <DropDownUI title={<SettingsSVG/>} dropDownArr={[]}/>
        </div>
    );
}
 
 
export default AboutTeacherAuth;