import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, BookmarkPlus, Heart, Sparkles, Star } from "lucide-react";
import { TwinklingStars } from "./TwinklingStars";
import { FloatingSparkles } from "./FloatingSparkles";
import { MagicalButton } from "./MagicalButton";
import { BottomNav } from "./BottomNav";
import { useState } from "react";

const horoscopeData = [
  {
    category: "Love",
    icon: "💕",
    gradient: "from-[#FFB6D9] to-[#FFD6E8]",
    reading:
      "Romance sparkles in the air today! Open your heart to new connections and cherish the ones you have. A sweet surprise awaits you.",
  },
  {
    category: "Career",
    icon: "⭐",
    gradient: "from-[#D4BAFF] to-[#E1D4FF]",
    reading:
      "Your creativity is at its peak! This is the perfect time to share your innovative ideas. Success is written in the stars for you.",
  },
  {
    category: "Wellness",
    icon: "🌸",
    gradient: "from-[#B3E5FC] to-[#D6F1FF]",
    reading:
      "Take time for self-care today. Your body and mind need gentle nurturing. A peaceful walk under the moonlight will restore your energy.",
  },
  {
    category: "Finances",
    icon: "✨",
    gradient: "from-[#FFE5CC] to-[#FFD6E8]",
    reading:
      "Abundance flows toward you! Stay mindful of your spending but don't be afraid to invest in things that bring you joy and growth.",
  },
];

export default function DailyReading() {
  const [saved, setSaved] = useState<number[]>([]);

  const toggleSave = (index: number) => {
    setSaved((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden pb-24">
      <TwinklingStars count={35} />
      <FloatingSparkles count={15} />

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
              ✨ Daily Reading ✨
            </h1>
            <p className="text-[#9B8AA8]">March 1, 2026</p>
          </div>
        </motion.div>

        {/* Horoscope Cards */}
        <div className="space-y-6">
          {horoscopeData.map((item, index) => (
            <motion.div
              key={item.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${item.gradient} rounded-3xl p-6 shadow-xl border border-white/50 relative overflow-hidden`}
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 70% 30%, rgba(255, 255, 255, 0.9), transparent 60%)",
                }}
              />

              {/* Floating sparkles in card */}
              <motion.div
                className="absolute top-4 right-4"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-6 h-6 text-white/60" />
              </motion.div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{item.icon}</span>
                    <h3 className="text-xl text-[#5A4570]">{item.category}</h3>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleSave(index)}
                    className={`${
                      saved.includes(index)
                        ? "text-[#FF9DB8]"
                        : "text-[#5A4570]"
                    }`}
                  >
                    {saved.includes(index) ? (
                      <Heart className="w-6 h-6" fill="currentColor" />
                    ) : (
                      <Heart className="w-6 h-6" />
                    )}
                  </motion.button>
                </div>

                <p className="text-[#5A4570] mb-4 leading-relaxed">
                  {item.reading}
                </p>

                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-[#FFD700]" fill="#FFD700" />
                  <Star className="w-4 h-4 text-[#FFD700]" fill="#FFD700" />
                  <Star className="w-4 h-4 text-[#FFD700]" fill="#FFD700" />
                  <Star className="w-4 h-4 text-[#FFD700]" fill="#FFD700" />
                  <Star className="w-4 h-4 text-[#FFD700]" fill="#FFD700" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Save to Journal Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Link to="/journal">
            <MagicalButton variant="primary" className="w-full">
              <span className="flex items-center justify-center gap-2">
                <BookmarkPlus className="w-5 h-5" />
                Save to Journal
              </span>
            </MagicalButton>
          </Link>
        </motion.div>
      </div>
      
      <BottomNav />
    </div>
  );
}