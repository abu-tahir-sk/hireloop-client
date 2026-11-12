import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const productLinks = [
    { label: "Job discovery", href: "#browse" },
    { label: "Worker AI", href: "#company" },
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

  const columns = [
    { title: "Product", links: productLinks },
    { title: "Navigations", links: navigationLinks },
    { title: "Resources", links: resourceLinks },
  ];

  return (
    <footer className="relative z-10 pt-[100px] pb-10 lg:pt-[118px]">
      <div className="mx-auto w-full max-w-[1320px] px-4">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-[288px]">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/logo.png"
                alt="hireloop"
                width={154}
                height={44}
                className="h-8 w-auto object-contain sm:h-11"
              />
            </Link>
            <p className="mt-6 font-sans text-base leading-[30px] text-white/50">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>
          <div className="flex flex-wrap gap-12 md:gap-[72px]">
            {columns.map((col, idx) => (
              <div key={idx}>
                <h4 className="font-inter-tight text-lg font-medium text-[#5C53FE]">{col.title}</h4>
                <ul className="mt-6 space-y-2">
                  {col.links.map((item, lIdx) => (
                    <li key={lIdx}>
                      <Link
                        href={item.href}
                        className="font-sans text-base leading-[30px] text-[#D0D5DD]/70 transition-colors hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white transition-colors hover:bg-white/10"
              aria-label="Facebook"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#5C53FE] text-white transition-colors hover:bg-[#4E45E8]"
              aria-label="Pinterest"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.98-.13-2.5.03-3.58.14-.97.94-6.44.94-6.44s-.24-.48-.24-1.2c0-1.12.65-1.96 1.46-1.96.69 0 1.02.52 1.02 1.14 0 .7-.44 1.73-.67 2.7-.19.81.41 1.47 1.2 1.47 1.45 0 2.56-1.53 2.56-3.73 0-1.95-1.4-3.32-3.4-3.32-2.32 0-3.68 1.74-3.68 3.53 0 .7.27 1.45.61 1.86.07.08.08.15.06.24-.07.28-.21.87-.24 1-.04.16-.13.2-.3.12-1.12-.52-1.82-2.16-1.82-3.48 0-2.83 2.06-5.43 5.94-5.43 3.12 0 5.54 2.22 5.54 5.2 0 3.1-1.96 5.6-4.67 5.6-.91 0-1.77-.47-2.07-1.03l-.56 2.14c-.2 1.05-.75 2.37-1.12 3.19A12 12 0 1 0 12 0z" />
              </svg>
            </a>
            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white transition-colors hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 0 0-1.45-1.45 1.45 1.45 0 0 0-1.45 1.45c0 .8.65 1.45 1.45 1.45m1.39 9.74v-8.37H5.07v8.37h2.78z" />
              </svg>
            </a>
          </div>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <span className="font-sans text-base leading-[30px] text-[#ACABB2]/70">
              Copyright 2024  Programming Hero
            </span>
            <Link
              href="#"
              className="font-sans text-base leading-[30px] text-[#ACABB2] transition-colors hover:text-white"
            >
              Terms &amp; Policy - Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}