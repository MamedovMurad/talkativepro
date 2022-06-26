import React, { useEffect, useRef } from 'react';

export const VideoPlayer = ({ user }:any) => {
  const ref = useRef(null);
  useEffect(() => {
    user.videoTrack.play(ref.current);
  }, []);

  return (
    <div>
      Uid: {user.uid}
      <div ref={ref}
        style={{ width: '200px', height: '200px' }}
      ></div>
    </div>
  );
};