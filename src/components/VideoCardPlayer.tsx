"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function VideoCardPlayer({
  video,
  kicker,
  title,
  text,
}: {
  video: { src: string; poster: string; title: string; text: string };
  kicker: string;
  title: string;
  text: string;
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
    <div className="overflow-hidden rounded-[2rem] border border-[#2F5D50]/10 bg-[#1a1f1c] shadow-lg shadow-[#2F5D50]/10">
      <div className="relative aspect-[9/14]">
        {!playing && (
          <button
            onClick={handlePlay}
            aria-label={`Пусни видео: ${video.title}`}
            className="absolute inset-0 z-10 cursor-pointer"
          >
            <Image
              src={video.poster}
              alt={video.title}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-transform hover:scale-110">
                <svg className="ml-1 h-7 w-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </button>
        )}
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          controls={playing}
          playsInline
          preload="none"
          controlsList="nodownload"
        >
          <source src={video.src} type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1a1f1c]/65 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-white/60">{kicker}</p>
          <h3 className="font-heading text-2xl font-bold">{title}</h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80">{text}</p>
        </div>
      </div>
    </div>
  );
}
