import Image from "next/image";
import Link from "next/link";

/**
 * CTA background art exported from Figma ("BG Grid" wireframe line-art globe
 * with the fade-to-black gradient baked in).
 */
export function CtaBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 z-0 flex justify-center select-none"
    >
      <Image
        src="/images/cta-bg.png"
        alt=""
        width={1440}
        height={964}
        className="h-auto w-full max-w-[1440px]"
      />
    </div>
  );
}

export default function CtaBanner() {
  return (
    <section className="relative z-10 pt-[100px] lg:pt-[153px]">
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
            className="flex h-[58px] items-center justify-center rounded-xl border border-[#090a15]/10 bg-white px-6 font-sans text-base font-semibold text-[#0B0B14] transition-colors hover:bg-zinc-200 sm:text-lg"
          >
            Create a free account
          </Link>
          <Link
            href="#pricing"
            className="flex h-[58px] items-center justify-center rounded-xl border border-[#d7d7d7]/30 bg-[#0E0B16] px-6 font-sans text-base font-medium text-white transition-colors hover:bg-[#1a1526] sm:text-lg"
          >
            View pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
