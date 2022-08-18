import dynamic from 'next/dynamic';
import { useContext, useEffect, useState } from 'react';
import { VideoCall } from 'react-agora';
import { UserContext } from '../_app';
import styles from './index.module.css'
import { useRouter } from 'next/router'
import { io } from 'socket.io-client';
// import ChatAgora from '../../components/chat';


type VideoPageProps = {}
 
const VideoPage:React.FC<VideoPageProps> = () => {
    const router = useRouter()
  
  
    
    const [inCall, setInCall] = useState(false);
  const [channelName, setChannelName] = useState("talk_ma_channel_5");
  const [joined, setjoined] = useState(false)
  const [data, dispatch] = useContext(UserContext);
    const VideoCallComponent = dynamic(() => import('../../components/videocall'), { ssr: false });
    const VideoRoom = dynamic(()=>  import('../../components/videodemo/videoroom'), { ssr: false })
    const ChatAgora = dynamic(()=>  import('../../components/chat'), { ssr: false })
    useEffect(() => {
   !joined&&setjoined(true)
    }, []);
    

    var socket: any = io("https://ws.talkative.az/chat", {
      extraHeaders: {
        uid: data.users.user_info?.agoraUid,
        channel_id: router.query?.chanal+'',
        full_name: data.users.user_info?.firstName + " " + data.users.user_info?.lastName,
      },
    });

    return (
        <div className={styles.body}>
            {
               joined&&(<VideoRoom setjoined={setjoined} context={data.users.user_info} socket={socket}
                token={sessionStorage.getItem('agora_token')} chanal={router.query?.chanal} chanalId={router.query?.conversation_id} dispatch={dispatch}/>)
           }
    {/*         {
              joined&&   <ChatAgora chanalId={router.query?.chanal}  token={sessionStorage.getItem('agora_token')}/>
            } */}
        
        </div>
    );
}
 
 
export default VideoPage;