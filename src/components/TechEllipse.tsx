"use client";

import React from "react";

type Props = { className?: string };

/* ------------- LOOP-WISE LOGO LISTS (only change is here) ------------- */

// Loop 1 – React / Next / Node / etc.
const LOOP1_LOGOS = [
  "/tech/react_logo.png",          // React
  "/tech/P-icons/nextjs.png",      // Next.js
  "/tech/P-icons/Node.js_logo.svg",// Node.js
  "/tech/P-icons/expressjs.svg",   // Express.js
  "/tech/P-icons/MongoDB-Logo.jpg",// MongoDB
  "/tech/P-icons/progres.png",     // PostgreSQL
  "/tech/P-icons/tailwind.png",    // Tailwind CSS
  "/tech/P-icons/typescript.png",  // TypeScript
  "/tech/P-icons/javascript.png",  // JavaScript
  "/tech/P-icons/html5.png",       // HTML5  (add this file)
  "/tech/P-icons/css3-logo.png",   // CSS3
  "/tech/P-icons/redux.jpg",       // Redux
];

// Loop 2 – Python / ML / Data
const LOOP2_LOGOS = [
  "/tech/P-icons/python.jpg",      // Python
  "/tech/P-icons/Tensor.png",      // TensorFlow
  "/tech/P-icons/Pytorch_logo.png",// PyTorch
  "/tech/P-icons/openai.png",      // OpenAI      (add file)
  "/tech/P-icons/huggingface.png", // HuggingFace (add file)
  "/tech/P-icons/langchain.webp",   // LangChain   (add file)
  "/tech/P-icons/pinecone.jpg",    // Pinecone    (add file)
  "/tech/P-icons/scikit.png",      // Scikit-learn
  "/tech/P-icons/Jupyter_logo.png",// Jupyter
  "/tech/P-icons/pandas.png",      // Pandas
  "/tech/P-icons/Numpy.png",       // NumPy
];

// Loop 3 – Cloud / DevOps
const LOOP3_LOGOS = [
  "/tech/P-icons/AWS.png",             // AWS
  "/tech/P-icons/Azur.jpg",            // Azure
  "/tech/P-icons/google-cloud.jpg",    // Google Cloud
  "/tech/P-icons/Docker.png",          // Docker
  "/tech/P-icons/kubernetes-Logo.png", // Kubernetes
  "/tech/P-icons/github-logo.jpg",     // GitHub
  "/tech/P-icons/gitlab.png",          // GitLab     (add file)
  "/tech/P-icons/jenkins.jpg",         // Jenkins
  "/tech/P-icons/firebase.png",        // Firebase
  "/tech/P-icons/vercel.png",          // Vercel     (add file)
  "/tech/P-icons/cloudflare-logo.webp",      // Cloudflare (add file)
  "/tech/P-icons/terraform.png",       // Terraform  (add file)
];

const TechInfinity: React.FC<Props> = ({ className = "" }) => {
  const duration = 24; // seconds

  // choose logos based on loop index (0,1,2)
  const getLogosForLoop = (loopIndex: number) => {
    if (loopIndex === 0) return LOOP1_LOGOS;
    if (loopIndex === 1) return LOOP2_LOGOS;
    return LOOP3_LOGOS;
  };

  return (
    <section className={`bg-[#f4f7fb] py-6 ${className}`}>
      <div className="text-center max-w-4xl mx-auto px-6">
        <p className="text-sm font-semibold text-sky-600">
          TECHNOLOGIES WE WORK WITH
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mt-2">
          Powering Your Product With Cutting-Edge Tech
        </h2>
        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
          A dynamic infinity loop showcasing the technologies behind our web,
          AI, and cloud solutions.
        </p>
      </div>

      {/* THREE infinity loops in a horizontal row */}
      <div className="flex flex-row flex-nowrap justify-center gap-1 overflow-x-auto">
        {[0, 1, 2].map((loopIndex) => {
          const logos = getLogosForLoop(loopIndex);
          const count = logos.length;

          return (
            <div
              key={loopIndex}
              className="relative w-[640px] max-w-full h-[340px]"
            >
              {logos.map((src, i) => {
                const delay = -(duration / count) * i;
                return (
                  <div
                    key={`${loopIndex}-${i}`}
                    className="infinity-item w-14 h-14 md:w-16 md:h-16 rounded-full bg-white shadow-md flex items-center justify-center"
                    style={{ animationDelay: `${delay}s` }}
                  >
                    <img
                      src={src}
                      alt={`tech-${i}`}
                      className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <style jsx>{`
        /* Infinity symbol path (two connected circles) */
        .infinity-item {
          position: absolute;
          top: 0;
          left: 0;
          offset-path: path(
            "M 220 170 a 80 80 0 1 1 -160 0 a 80 80 0 1 1 160 0 a 80 80 0 1 1 160 0 a 80 80 0 1 1 -160 0"
          );
          -webkit-offset-path: path(
            "M 220 170 a 80 80 0 1 1 -160 0 a 80 80 0 1 1 160 0 a 80 80 0 1 1 160 0 a 80 80 0 1 1 -160 0"
          );
          offset-rotate: 0deg;
          -webkit-offset-rotate: 0deg;
          animation: moveAlong ${duration}s linear infinite;
          -webkit-animation: moveAlong ${duration}s linear infinite;
        }

        @keyframes moveAlong {
          0% {
            offset-distance: 0%;
            -webkit-offset-distance: 0%;
          }
          100% {
            offset-distance: 100%;
            -webkit-offset-distance: 100%;
          }
        }

        @-webkit-keyframes moveAlong {
          0% {
            offset-distance: 0%;
            -webkit-offset-distance: 0%;
          }
          100% {
            offset-distance: 100%;
            -webkit-offset-distance: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default TechInfinity;
