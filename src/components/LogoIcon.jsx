import logo from "../assets/HAVANA66-PAYA.png";

export default function LogoIcon({ size = 60 }) {
  return (
    <img
      src={logo}
      alt="Havana 66 Logo"
      style={{ width: size, height: size }}
      className="
        object-contain
        drop-shadow-[0_0_12px_rgba(29,78,216,0.8)]
        hover:drop-shadow-[0_0_16px_rgba(46,107,255,0.4)]
        transition-all brightness-150
      "
    />
  );
}
