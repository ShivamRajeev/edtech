import { useState } from "react";

const fallbackSvg =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1400' height='900' viewBox='0 0 1400 900'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%230f2c52'/%3E%3Cstop offset='100%25' stop-color='%2313a07e'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1400' height='900' fill='url(%23bg)'/%3E%3Ccircle cx='1080' cy='170' r='220' fill='rgba(255,255,255,0.10)'/%3E%3Ccircle cx='220' cy='760' r='260' fill='rgba(255,255,255,0.08)'/%3E%3C/svg%3E";

export default function FallbackImage({ src, alt, className = "" }) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => setCurrentSrc(fallbackSvg)}
      loading="lazy"
    />
  );
}
