import Image from "next/image";

interface Company {
  name: string;
  logo: string;
}

const companies: Company[] = [
  { name: "Google", logo: "/images/companies/google.png" },
  { name: "Meta", logo: "/images/companies/meta.png" },
  { name: "Apple", logo: "/images/companies/apple.png" },
  { name: "Microsoft", logo: "/images/companies/microsoft.png" },
  { name: "Amazon", logo: "/images/companies/amazon.png" },
  { name: "Netflix", logo: "/images/companies/netflix.png" },
  { name: "Nvidia", logo: "/images/companies/nvidia.png" },
  { name: "Spotify", logo: "/images/companies/spotify.png" },
  { name: "Airbnb", logo: "/images/companies/airbnb.png" },
  { name: "Adobe", logo: "/images/companies/adobe.png" },
  { name: "Tesla", logo: "/images/companies/tesla.png" },
  { name: "Uber", logo: "/images/companies/uber.png" },
];

export default function CompanyLogos() {
  return (
    <section className="relative z-10 py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto w-full max-w-[1320px] px-4 text-center">
        <p className="font-sans text-xs sm:text-sm font-medium uppercase tracking-widest text-white/50">
          Trusted by talent & hiring managers at leading companies
        </p>

        {/* Company Logos Grid / Infinite Marquee */}
        <div className="mt-8 relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex w-max animate-marquee items-center gap-8 sm:gap-12 py-3">
            {[...companies, ...companies].map((company, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-3 rounded-2xl border border-white/5 bg-[#101012] px-5 py-3 transition-all duration-200 hover:border-white/20 hover:bg-[#18181c]"
              >
                <div className="relative flex h-8 w-8 shrink-0 items-center justify-center">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    width={32}
                    height={32}
                    className="max-h-7 max-w-7 object-contain transition-transform duration-200 group-hover:scale-110"
                  />
                </div>
                <span className="font-sans text-sm sm:text-base font-medium text-white/80 group-hover:text-white">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

