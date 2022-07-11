import React, { useEffect, useRef, useState } from 'react';
import agent from '../../Api/agent';
import { ImeModel } from '../../Model/DTO';
import styles from './index.module.css'
export const VideoPlayer = ({ user ,chanal_id}:any) => {
   
   const [participant, setparticipant] = useState<ImeModel|null>(null);

   
  const ref = useRef(null);

  async function fetchParticpant(){
   const res = await agent.talk.checkuseronCoversation({id:chanal_id,agoraUid:user.uid})
   res&& setparticipant(res.data)
 }
  useEffect(() => {
    user?.videoTrack?.play(ref.current);
    fetchParticpant()
  }, []);

  return (
    <>
    <div className={styles.item}>
       <div ref={ref} ></div>
       <p className={styles.user_info}>{participant?.firstName+' '+ participant?.lastName}</p>
    </div>
    </>
  );
};