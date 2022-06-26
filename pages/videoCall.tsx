import dynamic from 'next/dynamic';
import { useState } from 'react';
import { VideoCall } from 'react-agora';


type VideoPageProps = {}
 
const VideoPage:React.FC<VideoPageProps> = () => {
    const [inCall, setInCall] = useState(false);
  const [channelName, setChannelName] = useState("");
    const VideoCallComponent = dynamic(() => import('../components/videocall'), { ssr: false });
    return (
        <div>
            <VideoCallComponent setInCall={setInCall}  channelName={channelName}/>
        </div>
    );
}
 
 
export default VideoPage;