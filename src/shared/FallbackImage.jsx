import { useState } from "react";

const fallbackSvg =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1400' height='900' viewBox='0 0 1400 900'%3E%3Cdefs%3E%3ClinearGradient id='bg' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%230f2c52'/%3E%3Cstop offset='100%25' stop-color='%2313a07e'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1400' height='900' fill='url(%23bg)'/%3E%3Ccircle cx='1080' cy='170' r='220' fill='rgba(255,255,255,0.10)'/%3E%3Ccircle cx='220' cy='760' r='260' fill='rgba(255,255,255,0.08)'/%3E%3Ctext x='700' y='430' text-anchor='middle' fill='white' font-family='Arial,sans-serif' font-size='54' font-weight='700'%3ECareerSpring Training%3C/text%3E%3Ctext x='700' y='500' text-anchor='middle' fill='white' font-family='Arial,sans-serif' font-size='28'%3EProfessional Development and Placement Support%3C/text%3E%3C/svg%3E";

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
