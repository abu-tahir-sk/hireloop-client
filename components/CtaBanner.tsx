import Image from "next/image";
import Link from "next/link";

/**
 * CTA background art from Figma ("BG Grid" wireframe line-art globe dome).
 */
export function CtaBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-0 flex justify-center select-none overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#5C53FE]/20 rounded-full blur-[140px] pointer-events-none" />
      <Image
        src="/images/cta_grid.png"
        alt=""
        width={1024}
        height={685}
        className="h-auto w-full max-w-[1280px] opacity-80 object-top"
      />
    </div>
  );
}

export default function CtaBanner() {
  return (
    <section className="relative z-10 pt-[120px] lg:pt-[170px]">
      <div className="mx-auto w-full max-w-[792px] px-4 text-center">
        {/* Rethink Sans Medium 64, two lines */}
        <h2 className="font-rethink text-3xl font-medium leading-snug text-white sm:text-5xl lg:text-[64px] lg:leading-[77px]">
          Your next role is
          <br />
          already looking for you
        </h2>
        <p className="mt-4 font-sans text-base text-white/70 sm:text-xl lg:leading-[32px]">
          Build a profile in three minutes. The matches start arriving tomorrow morning.
        </p>

        {/* Buttons — 58px tall, radius 12 */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:mt-12">
          <Link
            href="/signup"
            className="flex h-[58px] items-center justify-center rounded-xl border border-[#090a15]/10 bg-white px-7 font-sans text-base font-semibold text-[#0B0B14] shadow-lg shadow-white/5 transition-all hover:bg-zinc-200 hover:shadow-white/10 sm:text-lg"
          >
            Create a free account
          </Link>
          <Link
            href="#pricing"
            className="flex h-[58px] items-center justify-center rounded-xl border border-[#d7d7d7]/30 bg-[#0E0B16] px-7 font-sans text-base font-medium text-white transition-colors hover:bg-[#1a1526] sm:text-lg"
          >
            View pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
