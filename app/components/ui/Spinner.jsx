export default function Spinner({ size = 40, color = "currentColor" }) {

  const px = typeof size === "number" ? `${size}px` : size;

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 100 100"
      style={{ color }}
      className="spin-slow"
    >
      <circle cx="50" cy="10" r="8" fill="currentColor" />
      <circle cx="78" cy="22" r="8" fill="currentColor" />
      <circle cx="90" cy="50" r="8" fill="currentColor" />
      <circle cx="78" cy="78" r="8" fill="currentColor" />
      <circle cx="50" cy="90" r="8" fill="currentColor" />
      <circle cx="22" cy="78" r="8" fill="currentColor" />
      <circle cx="10" cy="50" r="8" fill="currentColor" />
      <circle cx="22" cy="22" r="8" fill="currentColor" />
    </svg>
  );
}
