import dynamic from 'next/dynamic';
import { useState } from 'react';
import { VideoCall } from 'react-agora';




type VideoPageProps = {}
 
const VideoPage:React.FC<VideoPageProps> = () => {
    const [inCall, setInCall] = useState(false);
  const [channelName, setChannelName] = useState("talk_ma_channel_3");
  const [joined, setjoined] = useState(false)
    const VideoCallComponent = dynamic(() => import('../components/videocall'), { ssr: false });
    const VideoRoom = dynamic(()=>  import('../components/videodemo/videoroom'), { ssr: false })
    return (
        <div>
           {/*  <VideoCallComponent setInCall={setInCall}  channelName={channelName}/> */}

           {
               !joined&&(<button onClick={()=>setjoined(true)}>qosul</button>)
           }
            {
               joined&&(<VideoRoom setjoined={setjoined}/>)
           }
        </div>
    );
}
 
 
export default VideoPage;