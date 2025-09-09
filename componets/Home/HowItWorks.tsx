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
    t: "Review Your Shortlist with Complete ",
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
    t: "Seamless Interview Setup",
    d: "We handle the interview arrangements, making it easy for you to connect with your top picks.",
    img: "https://vettio.com/assets/Images/landingAssetsR/how-it-work-7.svg",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2 className="text-4xl sm:text-5xl font-semibold text-center">
          Let’s see how it <span className="text-yellow-500">works</span>
        </h2>
        <p className="mt-3 text-center text-gray-700 font-semibold">
          Follow a simple, step-by-step process to experience hiring that’s fast,
          efficient, and tailored to your needs.
        </p>

        <div className="relative mt-16">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-gray-300"></div>

          <div className="space-y-16">
            {steps.map((s, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={s.n} className="relative flex flex-col md:flex-row items-center">
                  {!isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
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
                  <div
                    className={`w-full md:w-1/2 flex flex-col justify-center
                      ${isLeft ? "md:pr-20 md:items-start md:text-right" : "md:pl-20 md:items-start md:text-left"}`}
                  >
                    <div className="flex items-center gap-3 md:block">
                      <div
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-white
                          md:absolute md:left-1/2 md:-translate-x-1/2 z-10
                          ${s.n % 2 === 0 ? "bg-purple-700" : "bg-yellow-500"}`}
                      >
                        {s.n}
                      </div>
                      <h3
                        className={`font-semibold text-xl sm:text-2xl text-gray-900 
                          ${isLeft ? "text-right md:text-right" : "text-left md:text-left"}`}
                      >
                        {s.t}
                      </h3>
                    </div>
                    <p className="mt-4 text-gray-600 leading-relaxed max-w-md text-left">
                      {s.d}
                    </p>
                  </div>
                  {isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0 order-2 md:order-none"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
