"use client";

import { useEffect, useMemo, useRef } from "react";
import type { SkillIcon } from "../utils/skills";

const STAGE_SIZE = 660;
const CENTER = STAGE_SIZE / 2;

export type RingConfig = {
  label: string;
  color: string;
  glow: string;
  radius: number;
  speed: number;
  skills: SkillIcon[];
};

type OrbitalNode = {
  id: string;
  name: string;
  Icon: SkillIcon["Icon"];
  color: string;
  glow: string;
  baseAngle: number;
  radius: number;
  speed: number;
  bobOffset: number;
};

function buildNodes(rings: RingConfig[]): OrbitalNode[] {
  return rings.flatMap((ring, ri) =>
    ring.skills.map((skill, si) => ({
      id: `${ring.radius}-${skill.name}-${ri}-${si}`,
      name: skill.name,
      Icon: skill.Icon,
      color: ring.color,
      glow: ring.glow,
      baseAngle: (si / ring.skills.length) * Math.PI * 2 - Math.PI / 2,
      radius: ring.radius,
      speed: ring.speed,
      bobOffset: (si / ring.skills.length) * Math.PI * 4,
    }))
  );
}

interface SkillsOrbitalStageProps {
  rings: RingConfig[];
}

export default function SkillsOrbitalStage({ rings }: SkillsOrbitalStageProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const nodes = useMemo(() => buildNodes(rings), [rings]);

  useEffect(() => {
    let start: number | null = null;
    let rafId: number;

    function animate(ts: number) {
      if (!start) start = ts;
      const t = (ts - start) / 1000;

      nodeRefs.current.forEach((nodeEl, i) => {
        if (!nodeEl) return;
        const node = nodes[i];
        const angle = node.baseAngle + t * node.speed * 1000;
        const bob = Math.sin(t * 2.1 + node.bobOffset) * 3.5;
        const cx = CENTER + node.radius * Math.cos(angle);
        const cy = CENTER + node.radius * Math.sin(angle) + bob;
        const px = (cx / STAGE_SIZE) * 100;
        const py = (cy / STAGE_SIZE) * 100;
        /* eslint-disable no-param-reassign -- intentional DOM mutation for 60fps orbit */
        nodeEl.style.left = `${px}%`;
        nodeEl.style.top = `${py}%`;
        /* eslint-enable no-param-reassign */
      });

      rafId = requestAnimationFrame(animate);
    }

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [rings, nodes]);

  return (
    <div
      ref={stageRef}
      className="relative mx-auto hidden aspect-square w-full opacity-0 animate-orbital-fade-in md:block"
    >
      <svg
        className="absolute inset-0 h-full w-full overflow-visible"
        viewBox={`0 0 ${STAGE_SIZE} ${STAGE_SIZE}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="orbital-ng" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD369" stopOpacity="0.25" />
            <stop offset="55%" stopColor="#61DAFB" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#C084FC" stopOpacity="0" />
          </radialGradient>
          <filter id="orbital-gblur">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        <circle
          cx={CENTER}
          cy={CENTER}
          r="300"
          fill="url(#orbital-ng)"
        />
        {/* Ring 1 – Core Stack */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r="118"
          stroke="#FFD369"
          strokeWidth="2"
          strokeOpacity="0.1"
          fill="none"
          filter="url(#orbital-gblur)"
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          r="118"
          stroke="#FFD369"
          strokeWidth="0.75"
          strokeOpacity="0.22"
          fill="none"
          strokeDasharray="3 9"
        />
        {/* Ring 2 – Mobile */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r="200"
          stroke="#61DAFB"
          strokeWidth="2"
          strokeOpacity="0.1"
          fill="none"
          filter="url(#orbital-gblur)"
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          r="200"
          stroke="#61DAFB"
          strokeWidth="0.75"
          strokeOpacity="0.22"
          fill="none"
          strokeDasharray="3 9"
        />
        {/* Ring 3 – Tools */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r="288"
          stroke="#C084FC"
          strokeWidth="2"
          strokeOpacity="0.1"
          fill="none"
          filter="url(#orbital-gblur)"
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          r="288"
          stroke="#C084FC"
          strokeWidth="0.75"
          strokeOpacity="0.22"
          fill="none"
          strokeDasharray="3 9"
        />
        {/* Nucleus circles */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r="52"
          fill="rgba(255,211,105,0.04)"
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          r="36"
          fill="rgba(255,255,255,0.04)"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
        />
        <circle
          cx={CENTER}
          cy={CENTER}
          r="20"
          fill="rgba(255,211,105,0.12)"
          stroke="rgba(255,211,105,0.35)"
          strokeWidth="1"
        />
      </svg>

      {/* Orbital nodes */}
      {nodes.map((node, i) => {
        const initialX =
          (CENTER + node.radius * Math.cos(node.baseAngle)) / STAGE_SIZE;
        const initialY =
          (CENTER + node.radius * Math.sin(node.baseAngle)) / STAGE_SIZE;
        return (
        <div
          key={node.id}
          ref={(el) => {
            nodeRefs.current[i] = el;
          }}
          className="node group/node absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          style={{
            left: `${initialX * 100}%`,
            top: `${initialY * 100}%`,
          }}
        >
          <div
            className="flex h-14 w-14 min-h-14 min-w-14 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.05] shadow-none backdrop-blur-md transition-[transform,border-color,box-shadow,background] duration-200 group-hover/node:scale-[1.35] md:h-16 md:w-16 md:min-h-16 md:min-w-16"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget;
              target.style.borderColor = node.color;
              target.style.boxShadow = `0 0 22px 6px ${node.glow}`;
              target.style.background = `linear-gradient(135deg,${node.glow.replace("0.4", "0.12")},rgba(0,0,0,0.8))`;
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget;
              target.style.borderColor = "";
              target.style.boxShadow = "";
              target.style.background = "";
            }}
          >
            <span className="flex h-9 w-9 min-h-9 min-w-9 items-center justify-center md:h-10 md:w-10 md:min-h-10 md:min-w-10">
              <node.Icon size={36} className="h-9 w-9 [&>svg]:h-9 [&>svg]:w-9 [&>svg]:max-h-full [&>svg]:max-w-full [&>svg]:object-contain md:h-10 md:w-10 md:[&>svg]:h-10 md:[&>svg]:w-10" />
            </span>
          </div>
          <span
            className="pointer-events-none absolute left-1/2 top-[50px] z-20 w-max -translate-x-1/2 whitespace-nowrap rounded-lg border bg-[rgba(8,8,12,0.92)] px-2.5 py-1 font-bold text-[11px] tracking-wide opacity-0 backdrop-blur-sm transition-all duration-150 group-hover/node:translate-y-0 group-hover/node:scale-100 group-hover/node:opacity-100"
            style={{
              color: node.color,
              borderColor: `${node.color}55`,
              transform: "translateX(-50%) translateY(-6px) scale(0.85)",
            }}
          >
            {node.name}
          </span>
        </div>
      );
      })}

      {/* Legend */}
      <div className="absolute bottom-[-52px] left-1/2 flex -translate-x-1/2 gap-7">
        {rings.map((ring) => (
          <div key={ring.label} className="flex items-center gap-2">
            <span
              className="h-0.5 w-5 rounded-sm"
              style={{ background: ring.color }}
            />
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/30">
              {ring.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
