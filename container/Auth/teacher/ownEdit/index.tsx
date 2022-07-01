type OwnEditTeacherProps = {
    isTeacher?:boolean
}
import { useState } from 'react';
import DeleteAccount from './deleteAccount';
 import styles from './index.module.css'
import PasswordEdit from './password';
import PrivateInfoEdit from './privateInfo';
import UserInfoEdit from './privateInfoUser';
const OwnEditTeacher:React.FC<OwnEditTeacherProps> = ({isTeacher}) => {
    console.log(isTeacher,'is');
    
    const [tab, settab] = useState({
        info:true,
        password:false,
        delete:false
    })
    function handleTab(param:string){
       const res = {info:false, password:false, delete:false}
        settab({...res,[param]:true })
    }
    return (
        <div className={styles.ownTeacheredit}>
             <div className={styles.aside}>
                <ul>
                    <li className={tab.info?styles.activeli:styles.null} onClick={()=>handleTab('info')} >Şəxsi məlumatlar</li>
                    <li className={tab.password?styles.activeli:styles.null} onClick={()=>handleTab('password')}>Şifrə</li>
                    <li >Bildirişlər</li>
                    <li className={tab.delete?styles.activeli:styles.null} onClick={()=>handleTab('delete')}>Hesabı sil</li>
                </ul>
             </div>

            <div className={styles.maincontent}>
                {tab.info&&(isTeacher? <PrivateInfoEdit/>: <UserInfoEdit/>)}
                {tab.password&&  <PasswordEdit/> }
                 {tab.delete&& <DeleteAccount/>}
            </div>
        </div>
    );
}
 
 
export default OwnEditTeacher;