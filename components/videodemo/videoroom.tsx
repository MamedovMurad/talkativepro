import React, { useEffect, useState } from 'react';
import AgoraRTC from 'agora-rtc-sdk-ng';
import { VideoPlayer } from './videoplayer';
/* import { VideoPlayer } from './VideoPlayer'; */

const APP_ID = 'fecd6f1f6e4a46df8d942e6a3a8291ba';
const TOKEN =
  '006fecd6f1f6e4a46df8d942e6a3a8291baIACE2t2cHYzZ/VbJTH6SsydkPpiXvcisyxtWFgfT+U2OX4u0DVwAAAAAEACJVdSDNZe5YgEAAQA1l7li';
const CHANNEL = 'talk_ma_channel_3';

const client = AgoraRTC.createClient({
  mode: 'rtc',
  codec: 'vp8',
});

 const VideoRoom = ({setjoined}:any) => {
  const [users, setUsers] = useState<any>([]);
  const [localTracks, setLocalTracks] = useState<any>([]);

  const handleUserJoined = async (user:any, mediaType:any) => {
    await client.subscribe(user, mediaType);

    if (mediaType === 'video') {
      setUsers((previousUsers:any) => [...previousUsers, user]);
    }

    if (mediaType === 'audio') {
      // user.audioTrack.play()
    }
  };

  const handleUserLeft = (user:any) => {
    setUsers((previousUsers:any) =>
      previousUsers.filter((u:any) => u.uid !== user.uid)
    );
  };

  useEffect(() => {
    client.on('user-published', handleUserJoined);
    client.on('user-left', handleUserLeft);

    client
      .join(APP_ID, CHANNEL, TOKEN||null,  2222222222)
      .then((uid) =>
        Promise.all([
          AgoraRTC.createMicrophoneAndCameraTracks(),
          Number(uid),
        ])
      )
      .then(([tracks, uid]) => {
        const [audioTrack, videoTrack] = tracks;
        setLocalTracks(tracks);
        setUsers((previousUsers:any) => [
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
      client.off('user-published', handleUserJoined);
      client.off('user-left', handleUserLeft);
      client.unpublish().then(() => client.leave());
    };
  }, []);

  function ext(){
    for (let localTrack of localTracks) {
        localTrack.stop();
        localTrack.close();
      }
      client.off('user-published', handleUserJoined);
      client.off('user-left', handleUserLeft);
      client.unpublish().then(() => client.leave());
      setjoined(false)
    };
  
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 200px)',
        }}
      >
          <div onClick={ext}> cixis</div>
        {users.map((user:any) => (
          <VideoPlayer key={user.uid} user={user} />
        ))}
      </div>
    </div>
  );
};

export default VideoRoom