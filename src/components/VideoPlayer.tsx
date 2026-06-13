export default function VideoPlayer({
  src,
  title,
  poster,
}: {
  src: string;
  title: string;
  poster?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[#1E2520]">
      <video
        src={src}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        className="block w-full aspect-[9/16] object-cover md:aspect-video"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 pointer-events-none">
        <p className="text-sm font-medium text-white">{title}</p>
      </div>
    </div>
  );
}
