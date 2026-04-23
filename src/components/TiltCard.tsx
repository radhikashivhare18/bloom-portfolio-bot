import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Maximum tilt in degrees on each axis */
  max?: number;
  /** Lift translation in px on hover */
  lift?: number;
  /** Render as a different element (default div). Use 'article' for semantic articles. */
  as?: "div" | "article" | "section";
}

/**
 * A subtle 3D tilt + lift card. Tracks pointer position and applies
 * rotateX/rotateY with a soft sheen highlight. Falls back gracefully
 * (no transform) when pointer leaves.
 */
export const TiltCard = ({
  children,
  className,
  max = 6,
  lift = 6,
  as: Tag = "div",
}: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 2 * max;
    const rotateX = -(y - 0.5) * 2 * max;
    el.style.setProperty("--rx", `${rotateX}deg`);
    el.style.setProperty("--ry", `${rotateY}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  return (
    <div className="perspective-1000">
      <Tag
        ref={ref as never}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          transform: `translateY(var(--ty,0px)) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))`,
          transformStyle: "preserve-3d",
          transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s cubic-bezier(0.22,1,0.36,1)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.setProperty("--ty", `-${lift}px`);
        }}
        onMouseOut={(e) => {
          (e.currentTarget as HTMLElement).style.setProperty("--ty", `0px`);
        }}
        className={cn(
          "relative will-change-transform",
          // Soft sheen following pointer
          "before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500",
          "before:[background:radial-gradient(400px_circle_at_var(--mx,50%)_var(--my,50%),hsl(var(--background)/0.35),transparent_45%)]",
          className,
        )}
      >
        {children}
      </Tag>
    </div>
  );
};
