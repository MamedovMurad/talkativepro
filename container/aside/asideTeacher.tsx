import TeacherAsideComponent from "../../components/teacher/teacherAside";

type AsideTeacherProps = {
    detail?:any
}
 
const AsideTeacher:React.FC<AsideTeacherProps> = ({detail}) => {
    return (
        <div style={{width:'33%'}}>
            <TeacherAsideComponent detail={detail}/>
        </div>
    );
}
 
 
export default AsideTeacher;