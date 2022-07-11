import React, { useEffect, useRef, useState } from 'react';
import agent from '../../Api/agent';
import { ImeModel } from '../../Model/DTO';
import styles from './index.module.css'
export const VideoPlayer = ({ user ,chanal_id}:any) => {
   console.log(user,'user');
   
   const [participant, setparticipant] = useState<ImeModel|null>(null);
   console.log(user,'user');
   
  const ref = useRef(null);

  async function fetchParticpant(){
   const res = await agent.talk.checkuseronCoversation({id:chanal_id,agoraUid:user.uid})
   res&& setparticipant(res.data)
 }
  useEffect(() => {
   user.audioTrack.play(ref.current)
    user.videoTrack.play(ref.current);
    fetchParticpant()
  }, []);

  return (
    <>
    <div className={styles.item}>
       <div ref={ref} ></div>
       <p className={styles.user_info}>{participant?.firstName+' '+ participant?.lastName}</p>
    </div>
{/*     <div className={styles.item}>
       <div ref={ref} ></div>
       <p className={styles.user_info}>{userInfo}</p>
    </div>
    <div className={styles.item}>
       <div ref={ref} ></div>
       <p className={styles.user_info}>{userInfo}</p>
    </div>
    <div className={styles.item}>
       <div ref={ref} ></div>
       <p className={styles.user_info}>{userInfo}</p>
    </div>
    <div className={styles.item}>
       <div ref={ref} ></div>
       <p className={styles.user_info}>{userInfo}</p>
    </div> */}
    </>
  );
};