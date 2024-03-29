import Router  from 'next/router';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import agent, { baseImageUrl } from '../../Api/agent';
import { UserContext } from '../../pages/_app';
import { ColorRateSvg } from '../../svg/ColorRateSVG';
import { TimeSVG } from '../../svg/timeSVG';
import TalkVIewModalBody from '../modal/talkView';
import ButtonUI from '../UI/Button';
import styles from './index.module.css'
type BodySliderItemProps = {
    width:string;
    item?:any,
    cb?:any
}
 
const BodySliderItem:React.FC<BodySliderItemProps> = ({width, item,cb}) => {
    const [data, dispatch] = useContext(UserContext);
    const connecttoConversation= async (uuid:string) => {
        if (data.users.user_info&&!data.users.user_info?.loggedAsTeacher) {
            try {
                const res = await agent.talk.connect({url:uuid,joinHidden:false})
                if (res?.data?.continueWithCall) {

                    res?.data&& sessionStorage.setItem('agora_token',res?.data?.token)
                    Router.push('/video-call?token='+res?.data?.token+'&chanal='+res.data?.channelId+'&conversation_id='+item?.id)
                  

                }else{

                    toast.success('Söhbətə qoşuldunuz')
                    cb&&cb()
                }
               
            } catch (error) {
                
            }
            
        }else if(data.users.user_info?.loggedAsTeacher){
            toast.error('Tələbə kimi daxil olun')
        }else{
            Router.push('/login')
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
                   <div className={styles.label}><span style={{letterSpacing:'-1px', fontSize:'16px', fontWeight:'500', color:'#333', marginRight:'10px'}}>{item.rating} <ColorRateSvg/></span> 
                   <span>{item?.language?.name}</span></div>
               </div>
           </header>
           <main className={styles.main}>
               <h5>{item?.title}</h5>
               <div>
                   <div><img src="uploads/Shape.svg" alt="" /> <span>  {item?.startDate?.split(' ')[0]}</span></div>
                   <div><TimeSVG/>  <span>{item?.startDate?.split(' ')[1]}</span></div>
               </div>
             
           </main>
           <footer className={styles.footer}>
            <div>
            <div className={styles.imgs}>
                {
                    item?.participants?.map((item:any,index:number)=>(
                        <div key={index}>
                            {!item.avatar? <label htmlFor="" className='avatar-sm' >{item.firstName[0]+' '+item.lastName[0]}</label>
                           : <img src={baseImageUrl+ item.avatar} alt="" />}
                        </div>
                    ))
                }
                  
               </div>
            <p className={styles.card_bottom_length}>{5-item?.participants?.length} boş yer</p>
            </div>
         
               {
                !data.users.user_info?.loggedAsTeacher&& !item.buttonHIde&&  <div className={styles.buttonArea}>
                 <button onClick={(e:any)=>{connecttoConversation(item?.id); e.stopPropagation()}} className={item?.currentUserJoined?styles.activeButton:''}> {item?.currentUserJoined?'Qoşulmusunuz':'Sən də qoşul'}</button>
             </div>
               }
             
           </footer>
        </div>
    );
}
 
 
export default BodySliderItem;