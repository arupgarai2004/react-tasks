import { useRef } from 'react';
import videoSrc from '../assets/video.mp4';

export default function ReffPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const playVideo = () => {
    videoRef.current?.play();
  };

  const pauseVideo = () => {
    videoRef.current?.pause();
  };

  return (
    <div>
      <video
        ref={videoRef}
        controls
        style={{ maxWidth: '100%', height: 'auto' }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div style={{ marginTop: 8 }}>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo} style={{ marginLeft: 8 }}>
          Pause
        </button>
      </div>
    </div>
  );
}