import React, { useEffect, useRef, useState } from 'react';
import agent from '../../Api/agent';
import { ImeModel } from '../../Model/DTO';
import { SettingsSVG } from '../../svg/settings';
import DropDownUI from '../UI/dropDown';
import styles from './index.module.css'
export const VideoPlayer = ({ user ,chanal_id, socket, currentUser}:any) => {
   
   const [participant, setparticipant] = useState<ImeModel|null>(null);

   
  const ref = useRef(null);

  async function fetchParticpant(){
   const res = await agent.talk.checkuseronCoversation({id:chanal_id,agoraUid:user.uid})
   res&& setparticipant(res.data)
 }
 function socketEvents(id:number, event:string){
  socket.emit(event,id)
 }
  useEffect(() => {
    user?.videoTrack?.play(ref.current);
    fetchParticpant()
  }, []);

  return (
    <>
    <div className={styles.item}>
    {
      (currentUser.loggedAsTeacher )&&<span>
      <DropDownUI
      left={true}
              title={<SettingsSVG />}
              dropDownArr={[
                { title: "Səsi bağla",  cb: ()=>socketEvents(user.uid,'sound_off')},
                { title: "Görüntünü bağla",  cb: ()=>socketEvents(user.uid,'video_off')},
                { title: "Çxart", cb: ()=>socketEvents(user.uid,'force_out')},
              ]}
            />
            </span>
    } 
       <div ref={ref} ></div>
       <p className={styles.user_info}>{participant?.firstName+' '+ participant?.lastName}</p>
    </div>
    </>
  );
};