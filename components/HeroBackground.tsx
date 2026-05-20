'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

export function HeroBackground() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      void video.play().catch(() => {
        setVideoEnded(true);
      });
    };

    if (video.readyState >= 3) {
      handlePlay();
    } else {
      video.addEventListener('canplay', handlePlay, { once: true });
    }

    return () => {
      video.removeEventListener('canplay', handlePlay);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      {!videoEnded && (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={() => setVideoEnded(true)}
          onLoadedData={() => setVideoLoaded(true)}
          onError={() => setVideoEnded(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source src="/images/mainVedio.mp4" type="video/mp4" />
        </video>
      )}

      <Image
        src="/images/25_jet_ski_sblp_header_2100x1045_f_domestic.jpg"
        alt="Jet ski rental Toronto - Sea-Doo on Lake Ontario"
        fill
        priority
        quality={85}
        sizes="100vw"
        className={`object-cover transition-opacity duration-1000 ${
          videoEnded || !videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/40 via-cyan-800/30 to-sky-900/60" />
    </div>
  );
}
