import Image from "next/image";

/**
 * Hero background art exported from Figma ("Group 1" flattened):
 * pink/magenta top glow, star dust (image 15), dark globe horizon with
 * purple rim light. Transparent PNG composites over #010103.
 */
export default function HeroBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-0 flex justify-center select-none"
    >
      <Image
        src="/images/globe.png"
        alt=""
        width={1440}
        height={1882}
        priority
        className="h-auto w-full max-w-[1440px]"
      />
    </div>
  );
}
