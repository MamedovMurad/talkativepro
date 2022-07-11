import TeacherAsideComponent from "../../components/teacher/teacherAside";
import useResponsivenenessAdjuster from "../../hooks/useResponsivenenessAdjuster";

type AsideTeacherProps = {
    detail?:any
    item?:any
}
 
const AsideTeacher:React.FC<AsideTeacherProps> = ({detail, item}) => {

    const responsive =useResponsivenenessAdjuster(860)
    
    return (
        <div style={{width:responsive?'100%':'33%'}}>
            <TeacherAsideComponent detail={detail} item={item}/>
        </div>
    );
}
 
 
export default AsideTeacher;