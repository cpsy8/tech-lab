const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export default function RhinoMark({ size = 20 }: { size?: number }) {
  return (
    <span className="rhino-mark" aria-hidden="true" style={{ width: size, height: size }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="rhino-mark__light"
        src={`${BASE}/assets/rhino-black.svg`}
        alt=""
        width={size}
        height={size}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="rhino-mark__dark"
        src={`${BASE}/assets/rhino-white.svg`}
        alt=""
        width={size}
        height={size}
      />
    </span>
  );
}
