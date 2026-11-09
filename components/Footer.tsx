import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const productLinks = [
    { label: "Job discovery", href: "#browse" },
    { label: "Worker AI", href: "#features" },
    { label: "Companies", href: "#browse" },
    { label: "Salary data", href: "#features" },
  ];

  const navigationLinks = [
    { label: "Help center", href: "#" },
    { label: "Career library", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const resourceLinks = [
    { label: "Brand Guideline", href: "#" },
    { label: "Newsroom", href: "#" },
  ];

  return (
    <footer className="w-full bg-[#010103] border-t border-zinc-900 pt-16 pb-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid matching Figma Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 pb-14 border-b border-zinc-900">
          {/* Logo & Slogan Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="hireloop"
                width={154}
                height={44}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xs leading-relaxed">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigations Column */}
          <div>
            <h4 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">
              Navigations
            </h4>
            <ul className="space-y-2.5">
              {navigationLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="text-xs font-semibold text-white tracking-wider uppercase mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    href={item.href}
                    className="text-xs text-zinc-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Line matching Figma */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          {/* Social Icons matching Figma (Facebook, Pinterest, LinkedIn) */}
          <div className="flex items-center gap-2.5">
            {/* Facebook */}
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-[#0B0B14] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            {/* Pinterest */}
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-[#0B0B14] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              aria-label="Pinterest"
            >
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.98-.13-2.5.03-3.58.14-.97.94-6.44.94-6.44s-.24-.48-.24-1.2c0-1.12.65-1.96 1.46-1.96.69 0 1.02.52 1.02 1.14 0 .7-.44 1.73-.67 2.7-.19.81.41 1.47 1.2 1.47 1.45 0 2.56-1.53 2.56-3.73 0-1.95-1.4-3.32-3.4-3.32-2.32 0-3.68 1.74-3.68 3.53 0 .7.27 1.45.61 1.86.07.08.08.15.06.24-.07.28-.21.87-.24 1-.04.16-.13.2-.3.12-1.12-.52-1.82-2.16-1.82-3.48 0-2.83 2.06-5.43 5.94-5.43 3.12 0 5.54 2.22 5.54 5.2 0 3.1-1.96 5.6-4.67 5.6-.91 0-1.77-.47-2.07-1.03l-.56 2.14c-.2 1.05-.75 2.37-1.12 3.19A12 12 0 1 0 12 0z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="#"
              className="w-8 h-8 rounded-lg bg-[#0B0B14] border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 0 0-1.45-1.45 1.45 1.45 0 0 0-1.45 1.45c0 .8.65 1.45 1.45 1.45m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
            </a>
          </div>

          {/* Copyright & Legal matching Figma */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-right">
            <span>Copyright 2024 —Programming Hero</span>
            <span className="hidden sm:inline">•</span>
            <span>Terms &amp; Policy - Privacy Guideline</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
