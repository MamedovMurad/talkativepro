import TeacherAsideComponent from "../../components/teacher/teacherAside";

type AsideTeacherProps = {
    detail?:any
    item?:any
}
 
const AsideTeacher:React.FC<AsideTeacherProps> = ({detail, item}) => {
    return (
        <div style={{width:'33%'}}>
            <TeacherAsideComponent detail={detail} item={item}/>
        </div>
    );
}
 
 
export default AsideTeacher;