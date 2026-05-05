import logoSrc from "@/assets/sabrina-logo.png";

const ASPECT = 597 / 886; // native PNG dimensions

export function LogoMark({ height = 44, className = "" }: { height?: number; className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="Sabrina Myers"
      width={Math.round(height * ASPECT)}
      height={height}
      className={className}
      draggable={false}
    />
  );
}

export function Logo({ height = 120, className = "" }: { height?: number; className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="Sabrina Myers — Companionship Care, Lancashire"
      width={Math.round(height * ASPECT)}
      height={height}
      className={className}
      draggable={false}
    />
  );
}
