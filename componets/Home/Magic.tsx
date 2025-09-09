"use client";

import { FaUserTie, FaRobot, FaBullseye, FaCalendarAlt } from "react-icons/fa";

const steps = [
  {
    n: 1,
    icon: <FaUserTie className="w-10 h-10" />,
    title: "Talent Discovery",
    desc: "Using your JD, we find the best-matched candidates from our database of billions worldwide.",
  },
  {
    n: 2,
    icon: <FaRobot className="w-10 h-10" />,
    title: "Expert AI Interviews",
    desc: "Our domain-specific AI interviews each candidate, diving deep into their skills and experience.",
  },
  {
    n: 3,
    icon: <FaBullseye className="w-10 h-10" />,
    title: "Precise Candidate Matching",
    desc: "We evaluate and match candidates exactly to the requirements you’ve shared with us.",
  },
  {
    n: 4,
    icon: <FaCalendarAlt className="w-10 h-10" />,
    title: "Effortless Interview Scheduling",
    desc: "We handle all scheduling, making it easy for you to connect with the candidates you’re interested in.",
  },
];

export default function Magic() {
  return (
    <section className="w-full bg-[#111] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold leading-snug text-center">
          Enjoy the <span className="text-yellow-500">Vettio Magic</span> — <br />
          Post Your Job Ad, We Handle the Rest.
        </h2>

        <div className="mt-16 grid md:grid-cols-2 gap-16">
          {steps.map((s) => (
            <div key={s.n} className="flex flex-col gap-6">
              <div className="flex justify-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-xl">
                  {s.icon}
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="flex items-center gap-4">
                  <span className="text-8xl font-bold text-purple-600">{s.n}</span>
                  <div className="border-2 border-white h-25 mt-2"></div>
                </div>

                <div>
                  <h3 className="font-bold text-2xl mb-2">{s.title}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
