import React, { useEffect, useRef } from 'react';
import styles from './index.module.css'
export const VideoPlayer = ({ user }:any) => {
  const ref = useRef(null);
  useEffect(() => {
    user.videoTrack.play(ref.current);
  }, []);

  return (
    <div className={styles.item}>
      Uid: {user.uid}
      <div ref={ref}
        
      ></div>
    </div>
  );
};