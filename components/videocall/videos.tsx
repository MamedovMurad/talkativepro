
import { AgoraVideoPlayer } from "agora-rtc-react";
import { IAgoraRTCRemoteUser, ICameraVideoTrack, IMicrophoneAudioTrack } from "agora-rtc-sdk-ng";

export const Videos = (props: {
    users: IAgoraRTCRemoteUser[];
    tracks: [IMicrophoneAudioTrack, ICameraVideoTrack];
  }) => {
    const { users, tracks } = props;
  
    console.log(users, tracks,'hello');
    
    return (
      <div>
        <div id="videos">
          <AgoraVideoPlayer className='vid' videoTrack={tracks[1]} />
          {users.length > 0 &&
            users.map((user) => {
                console.log(user.videoTrack,'videotrack');
                
              if (user.videoTrack) {
                return (
             <AgoraVideoPlayer style={{minWidth:'200px', minHeight:'200px', position:'relative'}} videoTrack={user.videoTrack} key={user.uid} />
                );
              } else return null;
            })}
        </div>
      </div>
    );
  };