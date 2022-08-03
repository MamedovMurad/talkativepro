import { createChannel, createClient, RtmMessage } from 'agora-rtm-react'
import React from "react";
import styles from './index.module.css'
type ChatAgora = {
    chanalId?:any
}
const APP_ID = "735bcf7e80f54a07a135bf0d6b7e14b2";
const uid = 'fdsgsdgsdfgsdgdfs'

const useClient = createClient(APP_ID);
export default function ChatAgora( {chanalId}:ChatAgora) {
 console.log(chanalId,'testttttt');
 
    const useChannel = createChannel(chanalId+'')


    const token = null||''


    const client = useClient();
    const testChannel = useChannel(client)
  
    const login = async () => {
      await client.login({ uid: uid ,token})
      await testChannel.join()
    }
    
    const sendMsg = async (text: string) => {
      const message = client.createMessage({ text, messageType: 'TEXT' })
      await testChannel.sendMessage(message)
    }

  return <div>
    <form action="">
    <button type='button' onClick={login}>button</button>
        <button type='button' onClick={()=>sendMsg('dfgdsgdsfgfd')}>send messaege</button>
    </form>
  </div>;
}
