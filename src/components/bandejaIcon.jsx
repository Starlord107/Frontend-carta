export default function BandejaIcon({ cantidad , size = 48, color = "#1f40ff" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Línea de la bandeja */}
      <path
        d="M14 44H50"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Cúpula */}
      <path
        d="M22 44C22 33.5 29.5 26 36 26C42.5 26 50 33.5 50 44"
        stroke={color}
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Pomo */}
      <circle cx="36" cy="20" r="2.2" fill={color} />

      {/* Badge */}
      <circle cx="52" cy="12" r="12" fill={color} />
      <text
        x="52"
        y="15"
        textAnchor="middle"
        fontSize="14"
        fill="white"
        fontFamily="Arial"
        fontWeight="bold"
      >
        {cantidad}
      </text>
    </svg>
  );
}
