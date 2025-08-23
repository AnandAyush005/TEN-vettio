"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    n: 1,
    t: "Share Your Job Description",
    d: "Start by providing us with the essentials of your open position—your criteria, expectations, and requirements.",
    img: "https://vettio.com/assets/Images/landingAssetsR/how-it-work.svg",
  },
  {
    n: 2,
    t: "Let Us Find Ideal Candidates",
    d: "We draw on our talent pool to find individuals who match your job description and criteria.",
    img: "https://vettio.com/assets/Images/landingAssetsR/how-it-work-2.svg",
  },
  {
    n: 3,
    t: "AI-Led Candidate Interviews",
    d: "We conduct initial video interviews with each candidate, led by our domain expert. Covering technical and non-technical skills, experience, and personality fit.",
    img: "https://vettio.com/assets/Images/landingAssetsR/how-it-work-3.svg",
  },
  {
    n: 4,
    t: "AI-Powered Candidate Matching",
    d: "We utilize advanced AI algorithms to analyze interview data to match candidates perfectly suited for your role.",
    img: "https://vettio.com/assets/Images/landingAssetsR/how-it-work-4.svg",
  },
  {
    n: 5,
    t: "Review Your Shortlist with Complete Insights",
    d: "Access comprehensive profiles of your matched candidates, complete with AI-generated insights and interview recordings.",
    img: "https://vettio.com/assets/Images/landingAssetsR/how-it-work-7.svg",
  },
  {
    n: 6,
    t: "Choose Your Final Interviewees",
    d: "Select the candidates you’d like to interview in person or online.",
    img: "https://vettio.com/assets/Images/landingAssetsR/how-it-work-5.svg",
  },
  {
    n: 7,
    t: "Review Your Shortlist with Complete Insights",
    d: "Access comprehensive profiles of your matched candidates, complete with AI-generated insights and interview recordings.",
    img: "https://vettio.com/assets/Images/landingAssetsR/how-it-work-7.svg",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Let’s see how it <span className="text-yellow-500">works</span>
        </h2>
        <p className="mt-3 text-center text-gray-600">
          Follow a simple, step-by-step process to experience hiring that’s fast,
          efficient, and tailored to your needs.
        </p>

        <div className="relative mt-16">
          {/* center timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-gray-300"></div>

          <div className="space-y-16">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={s.n} className="relative flex items-center">
                  {/* Right Side Image */}
                  {!isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="w-1/2 flex justify-center"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="inline-block"
                      >
                        <Image
                          src={s.img}
                          alt={s.t}
                          width={220}
                          height={220}
                          className="object-contain"
                        />
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Text */}
                  <div
                    className={`w-1/2 ${
                      isLeft ? "pl-8 text-left" : "pr-8 text-right order-1"
                    }`}
                  >
                    <h3 className="font-bold text-lg">{s.t}</h3>
                    <p className="mt-5 text-gray-600 text-sm">{s.d}</p>
                  </div>

                  {/* Left Side Image */}
                  {isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="w-1/2 flex justify-center order-2"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="inline-block"
                      >
                        <Image
                          src={s.img}
                          alt={s.t}
                          width={220}
                          height={220}
                          className="object-contain"
                        />
                      </motion.div>
                    </motion.div>
                  )}

                  {/* Number circle */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                        s.n % 2 === 0 ? "bg-purple-600" : "bg-yellow-500"
                      }`}
                    >
                      {s.n}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
