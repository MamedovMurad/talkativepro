import styles from './index.module.css'
type TeacherCartItemProps = {
    id:number,
    UCdegree?:string,
    title:string,
    desc:string
}
 
const TeacherCartItem:React.FC<TeacherCartItemProps> = ({id,UCdegree,desc, title}) => {
    return (
        <div className={styles.TeacherCartItem}>
           <h5>{UCdegree}</h5>
           <h4>{title}</h4>
           <p>{desc}</p>
        </div>
    );
}
 
 
export default TeacherCartItem;