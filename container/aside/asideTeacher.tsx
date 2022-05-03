import TeacherAsideComponent from "../../components/teacher/teacherAside";

type AsideTeacherProps = {}
 
const AsideTeacher:React.FC<AsideTeacherProps> = () => {
    return (
        <div style={{width:'33%'}}>
            <TeacherAsideComponent/>
        </div>
    );
}
 
 
export default AsideTeacher;