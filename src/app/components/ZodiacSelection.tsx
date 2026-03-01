import { motion } from "motion/react";
import { Link, useNavigate } from "react-router";
import { ArrowLeft, Sparkles } from "lucide-react";
import { TwinklingStars } from "./TwinklingStars";
import { FloatingSparkles } from "./FloatingSparkles";
import { BottomNav } from "./BottomNav";
import { useState } from "react";

const zodiacSigns = [
  {
    name: "Aries",
    symbol: "♈",
    dates: "Mar 21 - Apr 19",
    element: "Fire",
    gradient: "from-[#FFB6D9] to-[#FF9DB8]",
  },
  {
    name: "Taurus",
    symbol: "♉",
    dates: "Apr 20 - May 20",
    element: "Earth",
    gradient: "from-[#C3F0E8] to-[#B3E5FC]",
  },
  {
    name: "Gemini",
    symbol: "♊",
    dates: "May 21 - Jun 20",
    element: "Air",
    gradient: "from-[#D6F1FF] to-[#B3E5FC]",
  },
  {
    name: "Cancer",
    symbol: "♋",
    dates: "Jun 21 - Jul 22",
    element: "Water",
    gradient: "from-[#B3E5FC] to-[#D4BAFF]",
  },
  {
    name: "Leo",
    symbol: "♌",
    dates: "Jul 23 - Aug 22",
    element: "Fire",
    gradient: "from-[#FFE5CC] to-[#FFD6E8]",
  },
  {
    name: "Virgo",
    symbol: "♍",
    dates: "Aug 23 - Sep 22",
    element: "Earth",
    gradient: "from-[#C3F0E8] to-[#D6F1FF]",
  },
  {
    name: "Libra",
    symbol: "♎",
    dates: "Sep 23 - Oct 22",
    element: "Air",
    gradient: "from-[#FFD6E8] to-[#D4BAFF]",
  },
  {
    name: "Scorpio",
    symbol: "♏",
    dates: "Oct 23 - Nov 21",
    element: "Water",
    gradient: "from-[#D4BAFF] to-[#E1D4FF]",
  },
  {
    name: "Sagittarius",
    symbol: "♐",
    dates: "Nov 22 - Dec 21",
    element: "Fire",
    gradient: "from-[#FFB6D9] to-[#FFD6E8]",
  },
  {
    name: "Capricorn",
    symbol: "♑",
    dates: "Dec 22 - Jan 19",
    element: "Earth",
    gradient: "from-[#B3E5FC] to-[#C3F0E8]",
  },
  {
    name: "Aquarius",
    symbol: "♒",
    dates: "Jan 20 - Feb 18",
    element: "Air",
    gradient: "from-[#D6F1FF] to-[#D4BAFF]",
  },
  {
    name: "Pisces",
    symbol: "♓",
    dates: "Feb 19 - Mar 20",
    element: "Water",
    gradient: "from-[#E1D4FF] to-[#FFD6E8]",
  },
];

export default function ZodiacSelection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleSignClick = (signName: string) => {
    navigate(`/zodiac/${signName.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen relative overflow-hidden pb-24">
      <TwinklingStars count={40} />
      <FloatingSparkles count={20} />

      <div className="relative z-10 max-w-md mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/">
            <motion.button
              whileHover={{ x: -5 }}
              className="mb-4 text-[#5A4570] flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back
            </motion.button>
          </Link>
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-[#5A4570] mb-2">
              ✨ Zodiac Signs ✨
            </h1>
            <p className="text-[#9B8AA8]">Choose your celestial sign</p>
          </div>
        </motion.div>

        {/* Zodiac Grid */}
        <div className="grid grid-cols-2 gap-4">
          {zodiacSigns.map((sign, index) => (
            <motion.div
              key={sign.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => handleSignClick(sign.name)}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(212, 186, 255, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-br ${sign.gradient} rounded-3xl p-6 shadow-lg border border-white/50 cursor-pointer relative overflow-hidden`}
            >
              {/* Constellation pattern background */}
              <div className="absolute inset-0 opacity-20">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="2" fill="white" />
                  <circle cx="50" cy="30" r="2" fill="white" />
                  <circle cx="80" cy="25" r="2" fill="white" />
                  <circle cx="35" cy="60" r="2" fill="white" />
                  <circle cx="70" cy="70" r="2" fill="white" />
                  <line
                    x1="20"
                    y1="20"
                    x2="50"
                    y2="30"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <line
                    x1="50"
                    y1="30"
                    x2="80"
                    y2="25"
                    stroke="white"
                    strokeWidth="1"
                  />
                  <line
                    x1="35"
                    y1="60"
                    x2="70"
                    y2="70"
                    stroke="white"
                    strokeWidth="1"
                  />
                </svg>
              </div>

              {/* Glow effect */}
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4), transparent 70%)",
                  }}
                />
              )}

              {/* Twinkling sparkle on hover */}
              {hoveredIndex === index && (
                <motion.div
                  className="absolute top-2 right-2"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                  }}
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </motion.div>
              )}

              <div className="relative z-10 text-center">
                <motion.div
                  className="text-5xl mb-2"
                  animate={
                    hoveredIndex === index
                      ? {
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0],
                        }
                      : {}
                  }
                  transition={{ duration: 0.5 }}
                >
                  {sign.symbol}
                </motion.div>
                <h3 className="text-lg text-[#5A4570] mb-1">{sign.name}</h3>
                <p className="text-xs text-[#9B8AA8] mb-1">{sign.dates}</p>
                <div className="inline-block px-3 py-1 rounded-full bg-white/40 text-xs text-[#5A4570]">
                  {sign.element}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative moon */}
        <motion.div
          className="fixed bottom-12 right-8 pointer-events-none"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="text-6xl opacity-30">🌙</div>
        </motion.div>
      </div>
      
      <BottomNav />
    </div>
  );
}