export default function LogoInstagramHavana66({ size = 120}) {
  return (
    <div
      style={{ width: size, height: size }}
      className="
        relative
        drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]
        hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.7)]
        transition-all
      "
    >
      <img
        src="icons/instagramHavana66.png"
        alt="Instagram"
        className="w-full h-full object-contain"
      />
    </div>
  );
}