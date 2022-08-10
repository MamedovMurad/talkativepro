import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import styles from './index.module.css'
type ChatSocketProps = {
    setmessage:(string:string)=>void,
    list:{_id?:string,message:string, date:Date, agoraUid:string|number,sender:string, me?:boolean}[]
}
 
const ChatSocket:React.FC<ChatSocketProps> = ({list,setmessage}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
      } = useForm();
      const messageRef=   useRef<any>(null)
      const scrollToBottom = async () => {
          console.log('testttttt');
          
         messageRef.current.scrollTop=messageRef.current.scrollHeight
      }

      async function onsubmitHandle(params:any) {
          console.log(params);
          
          setmessage(params.message)
            reset()

      }
      useEffect(() => {
        scrollToBottom()
      }, [list])
      
    return (
        <div className={styles.chat}>
          <header className={styles.header}>
              <span>X</span>
            </header>
            <main>
                <ul ref={messageRef} >
                    {
                        list.map((item, index)=>(
                            <li className={item.me?styles.ChatMe:styles.chatother} key={index}> 
                             {!item.me&&<p>{item.sender}</p>} {item.message}
                             </li>
                        ))
                    }
                   
                </ul>
            </main>
            <footer >
                <form action="" onSubmit={handleSubmit(onsubmitHandle)}>
                    <div>
                      <textarea  id="" {...register('message')}></textarea>
                        <button><img src="/uploads/chatTelegram.png" alt="" /></button>
                    </div>
                    
                </form>
            </footer>
        </div>
    );
}
 
 
export default ChatSocket;