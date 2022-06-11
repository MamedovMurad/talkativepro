import { useEffect, useState } from 'react';
import agent from '../../Api/agent';
import TeacherCotainer from '../../container/teacher';
import Aside from '../../layout/aside';
import { GenericDTO, GenericListDto, ITeacher } from '../../Model/DTO';
import styles from './index.module.css'
type TeacherProps = {}
 
const Teacher:React.FC<TeacherProps> = () => {
    const [teachers, setteachers] = useState<GenericListDto<ITeacher[]>|null>(null)
    async function fetchTeacher(){
        const res=  await agent.teacher.list()
        res&&res.data&& setteachers(res.data)
    }
    useEffect(() => {fetchTeacher()  }, [])
    
    return (
        <div className={styles.teacher}>
            <div className="wrapper">
                <div className={styles.searchForm}>
                    <form action="">
                        <input type="text"  placeholder="Müəlimin adını daxil edin"/>
                        <div className={styles.buttonParent}><button></button></div>
                    </form>
                </div>
                <h3>Bütün müəllimlər</h3>
                <div>
                 <Aside setList={setteachers}/>
                  <TeacherCotainer list={teachers?.entities} />
                </div>
            </div>
          
        </div>
    );
}
 
 
export default Teacher;