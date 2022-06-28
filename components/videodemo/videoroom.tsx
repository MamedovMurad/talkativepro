import React, {  useEffect, useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import { VideoPlayer } from "./videoplayer";
import styles from "./index.module.css";
import { TelSVG } from "../../svg/telSVG";
import { MicrophoneSVG } from "../../svg/microphone";
import { VideoSVG } from "../../svg/vodeoSVG";
import { CHatSVG } from "../../svg/chatSVG";
import { UserContext } from "../../pages/_app";
/* import { VideoPlayer } from './VideoPlayer'; */

const APP_ID = "fecd6f1f6e4a46df8d942e6a3a8291ba";
const TOKEN ="006fecd6f1f6e4a46df8d942e6a3a8291baIABuaZuaUQa9Cq/iV3XIV/9d4MRDOqCcOZ9BQFkzB1CkUIf9154AAAAAEACJVdSD03e7YgEAAQDRd7ti";
const CHANNEL = "talk_channel_5";

const client = AgoraRTC.createClient({
  mode: "rtc",
  codec: "vp8",
});

const VideoRoom = ({ setjoined , user}: any) => {
  const user_info = user.firstName+ ' '+ user.lastName
  const [users, setUsers] = useState<any>([]);
  const [localTracks, setLocalTracks] = useState<any>([]);

console.log(user.agoraUid,'uid');


  const handleUserJoined = async (user: any, mediaType: any) => {
    await client.subscribe(user, mediaType);

    if (mediaType === "video") {
      setUsers((previousUsers: any) => [...previousUsers, user]);
    }

    if (mediaType === "audio") {
      // user.audioTrack.play()
    }
  };

  const handleUserLeft = (user: any) => {
    setUsers((previousUsers: any) =>
      previousUsers.filter((u: any) => u.uid !== user.uid)
    );
  };

  useEffect(() => {
    client.on("user-published", handleUserJoined);
    client.on("user-left", handleUserLeft);

    client
      .join(APP_ID, CHANNEL, TOKEN || null, user.agoraUid)
      .then((uid) =>
        Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), Number(uid)])
      )
      .then(([tracks, uid]) => {
        const [audioTrack, videoTrack] = tracks;
        setLocalTracks(tracks);
        setUsers((previousUsers: any) => [
          ...previousUsers,
          {
            uid,
            videoTrack,
            audioTrack,
          },
        ]);
        client.publish(tracks);
      });

    return () => {
      for (let localTrack of localTracks) {
        localTrack.stop();
        localTrack.close();
      }
      client.off("user-published", handleUserJoined);
      client.off("user-left", handleUserLeft);
      client.unpublish().then(() => client.leave());
    };
  }, []);

  function ext() {
    for (let localTrack of localTracks) {
      localTrack.stop();
      localTrack.close();
    }
    client.off("user-published", handleUserJoined);
    client.off("user-left", handleUserLeft);
    client.unpublish().then(() => client.leave());
    setjoined(false);
  }

  return (
    <div className={styles.body}>
      <div className={styles.videparent}>
        {users.map((user: any) => (
          <VideoPlayer key={user.uid} user={user} userInfo={user_info}/>
        ))}
      </div>

      <div className={styles.videbuttons}>
        <button><MicrophoneSVG/></button>
        <button onClick={ext} className={styles.extbutton}>
          <TelSVG />
        </button>
        <button><VideoSVG/></button>
        <button><CHatSVG/></button>
      </div>
    </div>
  );
};

export default VideoRoom;
