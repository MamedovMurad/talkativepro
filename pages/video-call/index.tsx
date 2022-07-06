import dynamic from 'next/dynamic';
import { useContext, useEffect, useState } from 'react';
import { VideoCall } from 'react-agora';
import { UserContext } from '../_app';
import styles from './index.module.css'
import { useRouter } from 'next/router'


type VideoPageProps = {}
 
const VideoPage:React.FC<VideoPageProps> = () => {
    const router = useRouter()
  
  
    
    const [inCall, setInCall] = useState(false);
  const [channelName, setChannelName] = useState("talk_ma_channel_5");
  const [joined, setjoined] = useState(false)
  const [data, dispatch] = useContext(UserContext);
    const VideoCallComponent = dynamic(() => import('../../components/videocall'), { ssr: false });
    const VideoRoom = dynamic(()=>  import('../../components/videodemo/videoroom'), { ssr: false })
    useEffect(() => {
   setjoined(true)
    }, []);
    
    return (
        <div className={styles.body}>
           {/*  <VideoCallComponent setInCall={setInCall}  channelName={channelName}/> */}

            {
               joined&&(<VideoRoom setjoined={setjoined} user={data.users.user_info} token={sessionStorage.getItem('agora_token')} chanal={router.query?.chanal} chanalId={router.query?.conversation_id}/>)
           }
        </div>
    );
}
 
 
export default VideoPage;