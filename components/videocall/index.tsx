import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
import { ClientConfig, IAgoraRTCRemoteUser } from "agora-rtc-sdk-ng";
import { useEffect, useState } from "react";
import { Controls } from "./control";
import { Videos } from "./videos";




type VideoCallComponentProps = {
    setInCall: React.Dispatch<React.SetStateAction<boolean>>;
    channelName: string;
}
 
const VideoCallComponent:React.FC<VideoCallComponentProps> = ({setInCall, channelName}) => {
    const config: ClientConfig = { 
        mode: "rtc", codec: "vp8",
      };
    const useClient = createClient(config);
const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();

    const [users, setUsers] = useState<IAgoraRTCRemoteUser[]>([]);
    const [start, setStart] = useState<boolean>(false);
    const client = useClient();
    const { ready, tracks } = useMicrophoneAndCameraTracks();
    
function connectVideo(){
    if (typeof window !== "undefined") {
        // function to initialise the SDK
    let init = async (name: string) => {
      client.on("user-published", async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        console.log("subscribe success");
        if (mediaType === "video") {
          setUsers((prevUsers) => {
            return [...prevUsers, user];
          });
        }
        if (mediaType === "audio") {
          user.audioTrack?.play();
        }
      });

      client.on("user-unpublished", (user, type) => {
        console.log("unpublished", user, type);
        if (type === "audio") {
          user.audioTrack?.stop();
        }
        if (type === "video") {
          setUsers((prevUsers) => {
            return prevUsers.filter((User) => User.uid !== user.uid);
          });
        }
      });

      client.on("user-left", (user) => {
        console.log("leaving", user);
        setUsers((prevUsers) => {
          return prevUsers.filter((User) => User.uid !== user.uid);
        });
      });

      await client?.join('fecd6f1f6e4a46df8d942e6a3a8291ba', 'talk_ma_channel_3', '006fecd6f1f6e4a46df8d942e6a3a8291baIACE2t2cHYzZ/VbJTH6SsydkPpiXvcisyxtWFgfT+U2OX4u0DVwAAAAAEACJVdSDNZe5YgEAAQA1l7li', null);
      if (tracks) await client?.publish([tracks[0], tracks[1]]);
      setStart(true);

    };

    if (ready && tracks) {
      console.log("init ready");
      init(channelName);
    }
      }
}
  


    return (
     
         <div className="App">
             <button onClick={connectVideo}>active et</button>
      {ready && tracks && (
        <Controls tracks={tracks} setStart={setStart} setInCall={setInCall} />
      )}
      {start && tracks && <Videos users={users} tracks={tracks} />}
    </div>
    );
}
 
 
export default VideoCallComponent;