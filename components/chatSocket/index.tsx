import { useForm } from 'react-hook-form';
import styles from './index.module.css'
type ChatSocketProps = {
    setmessage:(string:string)=>void,
    list:{message:string, date:Date, agora_uid:string|number,sender:string, me?:boolean}[]
}
 
const ChatSocket:React.FC<ChatSocketProps> = ({list,setmessage}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
        reset,
      } = useForm();

      async function onsubmitHandle(params:any) {
          console.log(params);
          
          setmessage(params.message)
            reset({})

      }
    return (
        <div className={styles.chat}>
          <header className={styles.header}>
              <span>X</span>
            </header>
            <main>
                <ul>
                    {
                        list.map((item, index)=>(
                            <li className={item.me?styles.ChatMe:styles.chatother} key={index}>  {!item.me&&<p>user name</p>} {item.message}</li>
                        ))
                    }
                   
                </ul>
            </main>
            <footer>
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