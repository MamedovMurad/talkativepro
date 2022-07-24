import React, {  useEffect, useState } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";
import { VideoPlayer } from "./videoplayer";
import styles from "./index.module.css";
import { TelSVG } from "../../svg/telSVG";
import { MicrophoneSVG } from "../../svg/microphone";
import { VideoSVG } from "../../svg/vodeoSVG";
import { CHatSVG } from "../../svg/chatSVG";
import { UserContext } from "../../pages/_app";
import { createMicrophoneAndCameraTracks } from "agora-rtc-react";
import Router from "next/router";
import agent from "../../Api/agent";
/* import { VideoPlayer } from './VideoPlayer'; */

const APP_ID = "fecd6f1f6e4a46df8d942e6a3a8291ba";
const TOKEN ="006fecd6f1f6e4a46df8d942e6a3a8291baIABuaZuaUQa9Cq/iV3XIV/9d4MRDOqCcOZ9BQFkzB1CkUIf9154AAAAAEACJVdSD03e7YgEAAQDRd7ti";
const CHANNEL = "talk_channel_5";

const client = AgoraRTC.createClient({
  mode: "rtc",
  codec: "vp8",
});

const VideoRoom = ({ setjoined , context, token, chanal,chanalId}: any) => {
  const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
  const { ready, tracks } = useMicrophoneAndCameraTracks();
  const [users, setUsers] = useState<any>([]);
  const [localTracks, setLocalTracks] = useState<any>([]);

console.log(context?.loggedAsTeacher,'context');

  const handleUserJoined = async (user: any, mediaType: any) => {
    await client.subscribe(user, mediaType);


    if (mediaType === "video") {
      console.log(users,'users fff');
      
      
      
      if (users?.find((item:any)=> item.uid==user.uuid)) {
        return 
      }
      setUsers((previousUsers: any) => [...previousUsers, user ]?.map(item=>{
        item.audio = true
        item.video=true
        return item
      }));
    }

    if (mediaType === "audio") {
       user.audioTrack.play()
    }
  };





  const handleUserLeft = async(user: any) => {
    setUsers((previousUsers: any) =>
      previousUsers.filter((u: any) => u.uid !== user.uid)
    );
 
  };

  useEffect(() => {
    client.on("user-published", handleUserJoined);
    client.on("user-left", handleUserLeft);
      // console.log(APP_ID,'---', token,'----',chanal,'----', user.agoraUid );
      
    client
      .join(APP_ID, chanal, token || null, context?.agoraUid)
      .then((uid) =>
        Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), Number(uid)])
      )
      .then(([tracks, uid]) => {
        const [audioTrack, videoTrack] = tracks;
        setLocalTracks(tracks);
        console.log('users test test tset stest etsestetsetet');
        
        setUsers((previousUsers: any) => [
          ...previousUsers,
          {
            video:true,
            audio:true,
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

  async function ext() {
    for (let localTrack of localTracks) {
      localTrack.stop();
      localTrack.close();
    }
    // client.off("user-published", handleUserJoined);
    // client.on("user-left", handleUserLeft);
    client.unpublish().then(() => {
      client.leave()
      client.removeAllListeners()
    });
    setjoined(false);
    if (context?.loggedAsTeacher) {
      const res = await agent.talk.stopTalk({id:chanalId})
    }
 
    // await Router.push('/')
    // location.reload()
  }


  
  const mute = async(type:string, id:number|string) => {
    if (type === 'audio') {
      setUsers((prevUsers:any) => {
        return (prevUsers.map((user:any) => {
         
          
          if (user.uid === id) {
           user.audioTrack?.setEnabled(!user.audio)
            
            return { ...user, audio: !user.audio }
          }
          return user
        }))
      })
    }
    else if (type === 'video') {
      console.log(users,'users nnnn');
      
      users[0].videoTrack?.setEnabled(!users[0].video)
    }
  }
  console.log(users,'users');
  

  return (
    <div className={styles.body}>
      <div className={styles.videparent}>
        {users.map((item: any) => (
          <VideoPlayer key={item.uid} user={item} chanal_id={chanalId} />
        ))}
      </div>

      <div className={styles.videbuttons}>
        <button onClick={()=>mute('audio',context?.agoraUid)}><MicrophoneSVG/></button>
        <button onClick={ext} className={styles.extbutton}>
          <TelSVG />
        </button>
        <button onClick={()=>mute('video',context?.agoraUid)}><VideoSVG/></button>
        <button><CHatSVG/></button>
      </div>
    </div>
  );
};

export default VideoRoom;
