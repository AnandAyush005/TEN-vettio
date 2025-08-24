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
    <section className="trusted-section">
      <h2 className="trusted-title">Trusted By Leading Employers</h2>

      <div className="marquee-container">
        <div className="marquee-track">
          {[...companies, ...companies].map((c, i) => (
            <div key={i} className="marquee-item">
              <Image src={c.logo} alt={c.name} width={40} height={40} />
              <span>{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
