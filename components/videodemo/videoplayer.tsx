import React, { useEffect, useRef } from 'react';
import styles from './index.module.css'
export const VideoPlayer = ({ user, userInfo }:any) => {
  const ref = useRef(null);
  useEffect(() => {
    user.videoTrack.play(ref.current);
  }, []);

  return (
    <>
    <div className={styles.item}>
       <div ref={ref} ></div>
       <p className={styles.user_info}>{userInfo}</p>
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