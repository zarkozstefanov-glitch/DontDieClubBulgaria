"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function VideoPlayer({
  src,
  title,
  poster,
}: {
  src: string;
  title: string;
  poster?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function handlePlay() {
    setPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 50);
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#1E2520]">
      {poster && !playing && (
        <button
          onClick={handlePlay}
          aria-label={`Пусни видео: ${title}`}
          className="absolute inset-0 z-10 cursor-pointer"
        >
          <Image
            src={poster}
            alt={title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-transform hover:scale-110">
              <svg className="ml-1 h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </button>
      )}
      <video
        ref={videoRef}
        src={src}
        poster={!poster ? undefined : undefined}
        controls={playing || !poster}
        playsInline
        preload={poster ? "none" : "metadata"}
        className="block w-full aspect-[9/16] object-cover md:aspect-video"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 pointer-events-none">
        <p className="text-sm font-medium text-white">{title}</p>
      </div>
    </div>
  );
}
