import Router  from 'next/router';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import agent, { baseImageUrl } from '../../Api/agent';
import { UserContext } from '../../pages/_app';
import TalkVIewModalBody from '../modal/talkView';
import ButtonUI from '../UI/Button';
import styles from './index.module.css'
type BodySliderItemProps = {
    width:string;
    item?:any
}
 
const BodySliderItem:React.FC<BodySliderItemProps> = ({width, item}) => {
    const [data, dispatch] = useContext(UserContext);
    const connecttoConversation= async (uuid:string) => {
        if (data.users.user_info&&!data.users.user_info?.loggedAsTeacher) {
            try {
                const res = await agent.talk.connect(uuid)
                if (res?.data?.continueWithCall) {
                    sessionStorage.setItem('agora_token',res.data.token)
                    Router.push('/video-call?token='+res.data.token+'&chanal='+res.data.channelId)
                }else{
                    toast.success('Söhbətə qoşuldunuz')
                }
               
            } catch (error) {
                
            }
            
        }else if(data.users.user_info?.loggedAsTeacher){
            toast.error('Tələbə kimi daxil olun')
        }else{
            toast.error('Giriş edin')
        }
        
    }
    
    return (
        <div className={styles.bodySliderItem} style={{width}} onClick={()=>  dispatch({type:'setModalActive', payload:<TalkVIewModalBody item={item}/>})}>
           <header className={styles.header}>
               <div className={styles.imageArea}>
               {
            item?.teacher?.avatar? <img src={baseImageUrl+item.teacher.avatar} alt="" />:   <div style={{background:item?.teacher?.bgColor}} className="avatar">{item?.teacher?.firstName[0] +' '+ item?.teacher?.lastName[0]}</div>
          }
               </div>
               <div className={styles.content}>
                   <p>{item?.teacher?.firstName + ' '+ item?.teacher?.lastName}</p>
                   <div className={styles.label}><span></span> <span>{item?.language?.name}</span></div>
               </div>
           </header>
           <main className={styles.main}>
               <h5>{item?.title}</h5>
               <div>
                   <div><img src="/uploads/shape.svg" alt="" /> <span>  {item?.startDate?.split(' ')[0]}</span></div>
                   <div><img src="/uploads/shape.svg" alt="" />   <span>{item?.startDate?.split(' ')[1]}</span></div>
               </div>
             
           </main>
           <footer className={styles.footer}>
               <div className={styles.imgs}>
                   <div><img src="/uploads/portiret.png" alt="" /></div>
                   <div><img src="/uploads/portiret.png" alt="" /></div>
                   <div><img src="/uploads/portiret.png" alt="" /></div>
                   <div><img src="/uploads/portiret.png" alt="" /></div>
               </div>
               <div className={styles.buttonArea}>
                  <button onClick={(e:any)=>{connecttoConversation(item?.id); e.stopPropagation()}}>Sən də qoşul</button>
               </div>
           </footer>
        </div>
    );
}
 
 
export default BodySliderItem;