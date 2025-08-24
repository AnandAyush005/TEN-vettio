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
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold leading-snug">
          Enjoy the <span className="text-yellow-500">Vettio Magic</span> — <br />
          Post Your Job Ad, We Handle the Rest.
        </h2>
        <div className="mt-16 grid md:grid-cols-2 gap-20">
          {steps.map((s) => (
            <div key={s.n} className="flex flex-col text-left">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-xl">
                  {s.icon}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-6xl font-extrabold text-purple-500">{s.n}</span>
                <span className="border-l border-gray-600 h-10"></span>
                <h3 className="font-bold text-3xl">{s.title}</h3>
              </div>
              <p className="mt-4 text-gray-300 text-xl leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
