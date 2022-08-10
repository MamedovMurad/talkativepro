import React, { useEffect, useState } from "react";
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
import StarRating from "../../container/starRating";
import { Microphone_SVG } from "../../svg/MicroPhone_";
/* import { VideoPlayer } from './VideoPlayer'; */
import io from "socket.io-client";
import ChatSocket from "../chatSocket";

const APP_ID = "735bcf7e80f54a07a135bf0d6b7e14b2";
const TOKEN =
  "006fecd6f1f6e4a46df8d942e6a3a8291baIABuaZuaUQa9Cq/iV3XIV/9d4MRDOqCcOZ9BQFkzB1CkUIf9154AAAAAEACJVdSD03e7YgEAAQDRd7ti";
const CHANNEL = "talk_channel_5";

const client = AgoraRTC.createClient({
  mode: "rtc",
  codec: "vp8",
});

const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
const VideoRoom = ({
  setjoined,
  context,
  token,
  chanal,
  chanalId,
  dispatch,
}: any) => {
  const { ready, tracks } = useMicrophoneAndCameraTracks();
  const [users, setUsers] = useState<any>([]);
  const [localTracks, setLocalTracks] = useState<any>([]);
  const [micVideo, setmicVideo] = useState({ mic: false, vid: false });
  const [chat, setchat] = useState(false);
  const [messages, setmessages] = useState<
    { message: string; date: Date; agoraUid: string | number; sender: string }[]
  >([]);
  console.log(context?.loggedAsTeacher, "context");

  const handleUserJoined = async (user: any, mediaType: any) => {
    await client.subscribe(user, mediaType);

    if (mediaType === "video") {
      console.log(users, "users fff");

      if (users?.find((item: any) => item.uid == user.uuid)) {
        return;
      }
      setUsers((previousUsers: any) =>
        [...previousUsers, user]?.map((item) => {
          item.audio = true;
          item.video = true;
          return item;
        })
      );
    }

    if (mediaType === "audio") {
      user.audioTrack.play();
    }
  };

  const handleUserLeft = async (user: any) => {
    setUsers((previousUsers: any) =>
      previousUsers.filter((u: any) => u.uid !== user.uid)
    );
  };

  useEffect(() => {
    client.on("user-published", handleUserJoined);
    client.on("user-left", handleUserLeft);
    // console.log(APP_ID,'---', token,'----',chanal,'----', user.agoraUid );

    client.on("user-unpublished", (user, type) => {
      console.log("unpublished", user, type);
      if (type === "audio") {
        user.audioTrack?.stop();
      }
      if (type === "video") {
        setUsers((prevUsers: any) => {
          return prevUsers.filter((User: any) => User.uid !== user.uid);
        });
      }
    });

    client
      .join(APP_ID, chanal, token || null, context?.agoraUid)
      .then((uid) =>
        Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(), Number(uid)])
      )
      .then(([tracks, uid]) => {
        const [audioTrack, videoTrack] = tracks;
        setLocalTracks(tracks);
        console.log("users test test tset stest etsestetsetet");

        setUsers((previousUsers: any) => [
          ...previousUsers,
          {
            video: true,
            audio: true,
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
    tracks?.forEach((item: any) => {
      item.close();
      item.stop();
    });

    // client.off("user-published", handleUserJoined);
    // client.on("user-left", handleUserLeft);
    client.unpublish().then(() => {
      client.leave();
      client.removeAllListeners();
      client.disableDualStream();
    });

    setjoined(false);
    if (context?.loggedAsTeacher) {
      const res = await agent.talk.stopTalk({ id: chanalId });
    }

    await Router.push("/");
    !context?.loggedAsTeacher &&
      dispatch({
        type: "setModalActive",
        payload: <StarRating id={chanalId} />,
      });

    // location.reload()
  }

  const mute = async (type: string, id: number | string) => {
    if (type === "audio") {
      setUsers((prevUsers: any) => {
        return prevUsers.map((user: any) => {
          if (user.uid === id) {
            setmicVideo((prev) => ({ ...prev, mic: user.audio }));
            user.audioTrack?.setEnabled(!user.audio);

            return { ...user, audio: !user.audio };
          }

          return user;
        });
      });
    } else if (type === "video") {
      setmicVideo((prev) => ({ ...prev, vid: !prev.vid }));
      setUsers((prevUsers: any) => {
        return prevUsers.map((user: any) => {
          if (user.uid === id) {
            user.videoTrack?.setEnabled(!user.video);
            return { ...user, video: !user.video };
          }
          return user;
        });
      });
    }
  };
  var socket: any = io("http://165.227.245.139:3005/chat", {
    extraHeaders: {
      uid: context?.agoraUid,
      channel_id: chanal,
      full_name: context?.firstName + " " + context?.lastName,
    },
  });
  async function FetchAllMessage(params:string) {
    const res = await agent.socket.list(params)
    console.log(res,'res');
    const additionMe = res.data?.map((item,index)=>{
      if (item.agoraUid==context.agoraUid) {
        item.me=true
        return item
      }else{
        item.me=false
        return item
      }
    })
    return res.data&&setmessages(res.data);
    
  }
  useEffect(() => {
    if (context?.agoraUid) {
      FetchAllMessage(chanal)

      socket.on(
        "new_message",
        (data: {
          message: string;
          date: Date;
          agoraUid: string | number;
          sender: string;
          me?: boolean;
        }) => {
          console.log(data, "data");

          context.agoraUid == data.agoraUid
            ? (data.me = true)
            : (data.me = false);
          console.log(data, "data");

          return setmessages((prev) => [...prev, data]);
        }
      );
    }
  }, [context?.agoraUid]);

  function setmessage(string: string) {
    console.log(string, "llll");

    socket.emit("new_message", string);
  }

  return (
    <div className={styles.parent}>
      <div className={styles.body}>
        <div className={styles.videparent}>
          {users.map((item: any) => (
            <VideoPlayer key={item.uid} user={item} chanal_id={chanalId} />
          ))}
        </div>

        <div className={styles.videbuttons}>
          <button
            onClick={() => mute("audio", context?.agoraUid)}
            style={micVideo.mic ? { background: "#FF6868" } : {}}
          >
            <Microphone_SVG />
          </button>
          <button onClick={ext} className={styles.extbutton}>
            <TelSVG />
          </button>
          <button
            onClick={() => mute("video", context?.agoraUid)}
            style={micVideo.vid ? { background: "#FF6868" } : {}}
          >
            <VideoSVG />
          </button>
          <button onClick={() => setchat(!chat)}>
            <CHatSVG />
          </button>
        </div>
      </div>
      {chat && <ChatSocket list={messages} setmessage={setmessage} />}
    </div>
  );
};

export default VideoRoom;
