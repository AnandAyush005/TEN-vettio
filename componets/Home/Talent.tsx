"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const sections = [
  {
    title: (
      <h3 className="text-4xl md:text-5xl font-bold leading-snug">
        Stop <span className="text-orange-500">Guessing</span> with CVs, Start Seeing with{" "}
      </h3>
    ),
    text: "Why make hiring decisions based solely on resumes? With us, every candidate you review has completed a video interview, allowing you to assess their expertise, confidence, and cultural fit. Move beyond the paper and hire with confidence.",
    img: "https://vettio.com/assets/Images/landingAssetsR/slide-1.png",
    reverse: false,
  },
  {
    title: (
      <h3 className="text-4xl md:text-5xl font-bold leading-snug">
        Beyond Keywords, Interviews Drive{" "}
        <span className="text-purple-600">Contextual Matches</span>
      </h3>
    ),
    text: "Our secret to smarter matches? Every candidate is interviewed, giving our AI deep insights into their skills, experiences, and unique strengths. This enables our AI to analyze the full context of their expertise and align it seamlessly with your specific needs, delivering matches that go beyond surface-level qualifications.",
    img: "https://vettio.com/assets/Images/landingAssetsR/slide-2.png",
    reverse: true,
  },
  {
    title: (
      <h3 className="text-4xl md:text-5xl font-bold leading-snug">
        Interviewed by <span className="text-orange-500">Experts</span>, Recommended for You
      </h3>
    ),
    text: "Every candidate is evaluated by AI with deep domain expertise—not generalist recruiters. Whether it’s finance, sales, or marketing, our AI conducts specialized interviews to ensure only the best reach you.",
    img: "https://vettio.com/assets/Images/landingAssetsR/slide-3.png",
    reverse: false,
  },
  {
    title: (
      <h3 className="text-4xl md:text-5xl font-bold leading-snug">
        AI Handles <span className="text-purple-600">Scheduling</span>, You Handle Hiring
      </h3>
    ),
    text: "Forget the back-and-forth of finding interview slots. Our AI automates the entire process, ensuring interviews are scheduled efficiently while you focus on choosing the right candidate.",
    img: "https://vettio.com/assets/Images/landingAssetsR/slide-4.png",
    reverse: true,
  },
  {
    title: (
      <h3 className="text-4xl md:text-5xl font-bold leading-snug">
        Gain <span className="text-orange-500">Deeper Insights</span> with Advanced Candidate Assessments
      </h3>
    ),
    text: "We provide you with comprehensive candidate profiles, featuring deep insights, detailed resume analysis, and skill evaluations. Based on our AI-led interviews and assessments, our AI evaluates technical expertise, domain knowledge, and problem-solving abilities, giving you a clear, data-driven understanding of each candidate’s strengths and fit for the role.",
    img: "https://vettio.com/assets/Images/landingAssetsR/slide-5.png",
    reverse: false,
    cta: true,
  },
];

const variantsLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const variantsRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

export default function Talent() {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          Hire Top Talent <span className="text-orange-500">Faster</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg md:text-xl">
          With expert-led AI assessments, we help you identify and hire top talent
          in record time, giving you more time to focus on growing your team.
        </p>
      </div>

      <div className="space-y-20">
        {sections.map((s, i) => (
          <div key={i}>
            <motion.div
              className={`flex flex-col md:flex-row items-center gap-10 ${
                s.reverse ? "md:flex-row-reverse" : ""
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={s.reverse ? variantsRight : variantsLeft}
            >
              <div className="flex-1">
                {s.title}
                <p className="mt-4 text-gray-600 text-lg md:text-xl">{s.text}</p>

                {s.cta && (
                  <div className="mt-6">
                    <a
                      href="#"
                      className="px-6 py-3 bg-yellow-500 text-black border-2 border-transparent hover:border-black rounded-lg font-medium hover:bg-white transition"
                    >
                      Book a demo
                    </a>
                    <div className="mt-3 flex items-center gap-4 text-sm text-gray-500">
                      <span>✔ Free</span>
                      <span>✔ No credit card needed</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col items-center w-full">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Image
                    src={s.img}
                    alt="Talent illustration"
                    width={500}
                    height={400}
                    className="rounded-xl shadow-lg"
                  />
                </motion.div>
              </div>
            </motion.div>

            {s.cta && (
              <div className="mt-10 flex flex-col md:flex-row justify-between items-start w-full gap-8">
                {[
                  "Unlock top candidates pre-vetted by our AI-powered domain expert bot",
                  "Lower your costs and save time with our efficient hiring tools",
                  "Make confident decisions with the help of our deep insights",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 flex-1">
                    <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-yellow-500 text-white text-xs font-bold">
                      ✔
                    </span>
                    <p className="text-gray-700 text-base md:text-lg">{point}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
