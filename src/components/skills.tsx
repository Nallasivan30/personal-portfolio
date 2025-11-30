/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const eceSkills = [
  {
    title: "Circuit Design",
    image:
      "/cir.jpg",
  },
  
  {
    title: "Embedded Systems",
    image:
      "/ras.svg",
  },
  {
    title: "PCB Design",
    image:
      "/motherboard.png",
  },
  

  {
    title: "MATLAB / Simulink",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Matlab_Logo.png/512px-Matlab_Logo.png",
  },
  {
    title: "VHDL / Verilog",
    image:
      "/developer.png",
  },
  
  {
    title: "Microcontrollers",
    image:
      "/ard.png",
  },
  {
    title: "IoT Systems",
    image:
      "/microchip.png",
  },
  
];


const itSkills = [
  {
    title: "React / Next.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    title: "Node.js",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
  },
  {
    title: "TypeScript",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
  },
  {
    title: "AWS / Cloud",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    title: "PostgreSQL",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
  },
  {
    title: "Python",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    title: "Docker",
    image:
      "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
  },
  {
    title: "Linux",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg",
  },
];




const SkillCard = ({ skill, variant }: { skill: any; variant: "ece" | "it" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className="mx-2 xs:mx-3 sm:mx-4 md:mx-6 flex-shrink-0 flex flex-col items-center"
    >
      <div className={`rounded-lg w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24  shadow-md backdrop-blur-md border flex items-center justify-center
        ${
          variant === "ece"
            ? "bg-primary/10 border-primary/20"
            : "bg-accent/10 border-accent/20"
        }`}
      >
        <div className="relative w-10 h-10 xs:w-12 xs:h-12 sm:w-18 sm:h-18 ">
          <Image
            src={skill.image}
            alt={skill.title}
            fill
            className="object-contain p-1"
          />
        </div>
      </div>
      <p className="text-[10px] xs:text-xs sm:text-sm font-medium text-center mt-1 sm:mt-2 max-w-16 xs:max-w-20 sm:max-w-24 leading-tight">
        {skill.title}
      </p>
    </motion.div>
  );
};


export function Skills() {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-gradient-to-b from-background via-muted/40 to-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 sm:-top-20 left-1/4 sm:left-1/3 w-32 h-32 sm:w-72 sm:h-72 bg-primary/10 blur-2xl sm:blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 sm:right-1/3 w-32 h-32 sm:w-72 sm:h-72 bg-accent/10 blur-2xl sm:blur-3xl rounded-full animate-pulse"></div>
      </div>

      <div className="container relative z-10 mx-auto px-2 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4"
          >
            Technical <span className="text-primary">Expertise</span>
          </motion.h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto px-4">
            A blend of <span className="text-primary font-medium">electronics</span> and{" "}
            <span className="text-accent font-medium">modern software technologies</span>.
          </p>
        </div>

        {/* ECE Row */}
        <div className="relative w-full overflow-hidden py-3 sm:py-4 md:py-6">
          <div className="flex animate-scroll-horizontal whitespace-nowrap">
            {[...eceSkills, ...eceSkills].map((skill, index) => (
              <SkillCard key={`ece-${index}`} skill={skill} variant="ece" />
            ))}
          </div>
        </div>

        {/* IT Row */}
        <div className="relative w-full overflow-hidden py-3 sm:py-4 md:py-6">
          <div className="flex animate-scroll-horizontal-reverse whitespace-nowrap">
            {[...itSkills, ...itSkills].map((skill, index) => (
              <SkillCard key={`it-${index}`} skill={skill} variant="it" />
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes scroll-horizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-horizontal-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-horizontal {
          animation: scroll-horizontal 15s linear infinite;
          display: inline-flex;
        }
        .animate-scroll-horizontal-reverse {
          animation: scroll-horizontal-reverse 15s linear infinite;
          display: inline-flex;
        }
        @media (max-width: 640px) {
          .animate-scroll-horizontal {
            animation: scroll-horizontal 20s linear infinite;
          }
          .animate-scroll-horizontal-reverse {
            animation: scroll-horizontal-reverse 20s linear infinite;
          }
        }
      `}</style>
    </section>
  )
}

