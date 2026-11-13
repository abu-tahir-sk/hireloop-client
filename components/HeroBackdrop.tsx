import Image from "next/image";

export default function HeroBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-0 flex justify-center select-none overflow-hidden"
    >
      {/* Top fade: keeps Navbar, Title, and Search bar strictly on pure pitch-dark background */}
      <div className="absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-[#010103] via-[#010103]/90 to-transparent z-20 pointer-events-none" />

      {/* Atmospheric blue/purple rim glow behind the Earth globe curvature */}
      <div className="absolute top-[680px] left-1/2 -translate-x-1/2 w-[850px] sm:w-[1100px] h-[450px] bg-[#5C53FE]/25 blur-[120px] rounded-full z-0 pointer-events-none" />

      {/* Earth Globe  */}
      <div className="relative w-full max-w-[1440px] flex justify-center">
        <Image
          src="/images/earth_globe.png"
          alt="Earth Globe Horizon"
          width={1440}
          height={1882}
          priority
          className="h-auto w-full max-w-[1320px] opacity-90 relative z-10 object-top"
        />
      </div>

      {/* Bottom fade out smoothly  stats and next section */}
      <div className="absolute bottom-0 inset-x-0 h-64 bg-gradient-to-t from-[#010103] via-[#010103]/80 to-transparent z-20 pointer-events-none" />
    </div>
  );
}
