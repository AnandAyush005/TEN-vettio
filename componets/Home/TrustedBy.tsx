import Image from "next/image";

const companies = [
  { name: "Web Affinity", logo: "https://vettio.com/assets/Images/landingAssetsR/webaffinity-logo.svg" },
  { name: "Pure2", logo: "https://vettio.com/assets/Images/landingAssetsR/pure2-logo.svg" },
  { name: "Zignaly", logo: "https://vettio.com/assets/Images/landingAssetsR/zignaly-logo.svg" },
  { name: "Wellows", logo: "https://vettio.com/assets/Images/landingAssetsR/wellows-logo.svg" },
  { name: "Gaditek", logo: "https://vettio.com/assets/Images/landingAssetsR/gaditek-logo.svg" },
  { name: "Squatwolf", logo: "https://vettio.com/assets/Images/landingAssetsR/squatwolf-logo.svg" },
];

export default function TrustedBy() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
        Trusted By Leading Employers
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex space-x-16 animate-marquee">
          {[...companies, ...companies].map((c, i) => (
            <div
              key={i}
              className="flex items-center space-x-2 min-w-[200px] justify-center"
            >
              <Image
                src={c.logo}
                alt={c.name}
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-lg font-medium text-gray-700">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
