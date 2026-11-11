interface SectionBadgeProps {
  label: string;
}

/**
 * Section badge row from Figma:
 * 8x8 purple square + Space Mono 20 label (#ffffff @80%) + 8x8 purple square, gap 16
 */
export default function SectionBadge({ label }: SectionBadgeProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className="h-2 w-2 rounded-[2px] bg-[#5C53FE]" />
      <span className="font-mono text-xl text-white/80">{label}</span>
      <span className="h-2 w-2 rounded-[2px] bg-[#5C53FE]" />
    </div>
  );
}
