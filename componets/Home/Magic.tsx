import { FaUserTie, FaRobot, FaBullseye, FaCalendarAlt } from "react-icons/fa";

const steps = [
  {
    n: 1,
    icon: <FaUserTie className="w-8 h-8" />,
    title: "Talent Discovery",
    desc: "Using your JD, we find the best-matched candidates from our database of billions worldwide.",
  },
  {
    n: 2,
    icon: <FaRobot className="w-8 h-8" />,
    title: "Expert AI Interviews",
    desc: "Our domain-specific AI interviews each candidate, diving deep into their skills and experience.",
  },
  {
    n: 3,
    icon: <FaBullseye className="w-8 h-8" />,
    title: "Precise Candidate Matching",
    desc: "We evaluate and match candidates exactly to the requirements you’ve shared with us.",
  },
  {
    n: 4,
    icon: <FaCalendarAlt className="w-8 h-8" />,
    title: "Effortless Interview Scheduling",
    desc: "We handle all scheduling, making it easy for you to connect with the candidates you’re interested in.",
  },
];

export default function Magic() {
  return (
    <section className="w-full bg-[#111] text-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Enjoy the <span className="text-yellow-500">Vettio Magic</span> —<br />
          Post Your Job Ad, We Handle the Rest.
        </h2>

        {/* Steps */}
        <div className="mt-16 grid md:grid-cols-2 gap-16">
          {steps.map((s) => (
            <div key={s.n} className="flex items-start gap-6">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-lg">
                  {s.icon}
                </div>
              </div>

              {/* Number + Content */}
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-bold text-purple-500">{s.n}</span>
                  <span className="border-l border-gray-600 h-8"></span>
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                </div>
                <p className="mt-2 text-gray-300 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
