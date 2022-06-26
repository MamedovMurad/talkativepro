
import { createClient } from "agora-rtc-react";
import { ClientConfig } from "agora-rtc-sdk-ng";
import { useState } from "react";

export const Controls = (props: {tracks:any, setStart:any, setInCall:any}) => {
    const config: ClientConfig = { 
        mode: "rtc", codec: "vp8",
      };
    const useClient = createClient(config);
    const client = useClient();
    const { tracks, setStart, setInCall } = props;
    const [trackState, setTrackState] = useState({ video: true, audio: true });
    
    const mute = async (type: "audio" | "video") => {
      if (type === "audio") {
        await tracks[0].setEnabled(!trackState.audio);
        setTrackState((ps:any) => {
          return { ...ps, audio: !ps.audio };
        });
      } else if (type === "video") {
        await tracks[1].setEnabled(!trackState.video);
        setTrackState((ps:any) => {
          return { ...ps, video: !ps.video };
        });
      }
    };
    
    const leaveChannel = async () => {
      await client.leave();
      client.removeAllListeners();
      tracks[0].close();
      tracks[1].close();
      setStart(false);
      setInCall(false);
    };
  
    return (
      <div className="controls">
        <p className={trackState.audio ? "on" : ""}
          onClick={() => mute("audio")}>
          {trackState.audio ? "MuteAudio" : "UnmuteAudio"}
        </p>
        <p className={trackState.video ? "on" : ""}
          onClick={() => mute("video")}>
          {trackState.video ? "MuteVideo" : "UnmuteVideo"}
        </p>
        {<p onClick={() => leaveChannel()}>Leave</p>}
      </div>
    );
  };