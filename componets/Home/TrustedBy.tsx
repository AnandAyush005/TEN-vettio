import Image from "next/image";

const companies = [
  {
    name: "Web Affinity",
    logo: "https://vettio.com/assets/Images/landingAssetsR/webaffinity-logo.svg",
  },
  {
    name: "Pure2",
    logo: "https://vettio.com/assets/Images/landingAssetsR/pure2-logo.svg",
  },
  {
    name: "Zignaly",
    logo: "https://vettio.com/assets/Images/landingAssetsR/zignaly-logo.svg",
  },
  {
    name: "Wellows",
    logo: "https://vettio.com/assets/Images/landingAssetsR/wellows-logo.svg",
  },
  {
    name: "Gaditek",
    logo: "https://vettio.com/assets/Images/landingAssetsR/gaditek-logo.svg",
  },
  {
    name: "Squatwolf",
    logo: "https://vettio.com/assets/Images/landingAssetsR/squatwolf-logo.svg",
  },
];

export default function TrustedBy() {
  return (
    <section className="trusted-section text-center py-10">
      <h2 className="trusted-title text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center leading-snug break-words">
        Trusted By Leading <br className="sm:hidden" />  Employers
      </h2>

      <div className="marquee-container overflow-hidden">
        <div className="marquee-track flex gap-8 animate-marquee">
          {[...companies, ...companies].map((c, i) => (
            <div key={i} className="marquee-item flex flex-col items-center">
              <Image src={c.logo} alt={c.name} width={40} height={40} />
              <span className="text-sm sm:text-base mt-2">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
