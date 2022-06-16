import Router from "next/router";
import { setCookie } from "react-use-cookie";
import DropDownUI from "../../../../components/UI/dropDown";
import { SettingsSVG } from "../../../../svg/settings";
import AsideTeacher from "../../../aside/asideTeacher";

type AboutTeacherAuthProps = {
    data?:any
}
 
const AboutTeacherAuth:React.FC<AboutTeacherAuthProps> = ({data}) => {
    function cb(){
        setCookie('agent', '', { days: 0 })
        Router.push('/login')
    }
    return (
        <div>
             <AsideTeacher item={data} detail={  <DropDownUI title={<SettingsSVG/>} dropDownArr={[{title:'Redaktə et',link:'/dashboard/edit-private-info'},{title:'Bizimlə əlaqə',link:'/contact'},{title:'Çıxış',cb:cb}]}/>}/>
             
        </div>
    );
}
 
 
export default AboutTeacherAuth;