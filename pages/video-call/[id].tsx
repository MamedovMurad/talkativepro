import dynamic from 'next/dynamic';
import { useContext, useEffect, useState } from 'react';
import { VideoCall } from 'react-agora';
import { UserContext } from '../_app';
import styles from './index.module.css'



type VideoPageProps = {}
 
const VideoPage:React.FC<VideoPageProps> = () => {
    const [inCall, setInCall] = useState(false);
  const [channelName, setChannelName] = useState("talk_ma_channel_5");
  const [joined, setjoined] = useState(false)
  const [data, dispatch] = useContext(UserContext);
    const VideoCallComponent = dynamic(() => import('../../components/videocall'), { ssr: false });
    const VideoRoom = dynamic(()=>  import('../../components/videodemo/videoroom'), { ssr: false })
    useEffect(() => {
  setjoined(true)
    }, []);
    
    console.log(joined,'llll');
    
    return (
        <div className={styles.body}>
           {/*  <VideoCallComponent setInCall={setInCall}  channelName={channelName}/> */}

           {
               !joined&&(<button onClick={()=>setjoined(true)}>qosul</button>)
           }
            {
               joined&&(<VideoRoom setjoined={setjoined} user={data.users.user_info}/>)
           }
        </div>
    );
}
 
 
export default VideoPage;