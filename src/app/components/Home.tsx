import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Sparkles,
  BookOpen,
  Stars,
  BookHeart,
  User,
  Moon,
  Heart,
  Smile,
  Zap,
} from "lucide-react";
import { TwinklingStars } from "./TwinklingStars";
import { FloatingSparkles } from "./FloatingSparkles";
import { MagicalButton } from "./MagicalButton";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BottomNav } from "./BottomNav";

const zodiacSigns = [
  { name: "♈", label: "Aries" },
  { name: "♉", label: "Taurus" },
  { name: "♊", label: "Gemini" },
  { name: "♋", label: "Cancer" },
  { name: "♌", label: "Leo" },
  { name: "♍", label: "Virgo" },
  { name: "♎", label: "Libra" },
  { name: "♏", label: "Scorpio" },
  { name: "♐", label: "Sagittarius" },
  { name: "♑", label: "Capricorn" },
  { name: "♒", label: "Aquarius" },
  { name: "♓", label: "Pisces" },
];

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden pb-24">
      <TwinklingStars count={40} />
      <FloatingSparkles count={20} />

      <div className="relative z-10 max-w-md mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-3">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Moon className="w-12 h-12 text-[#D4BAFF]" fill="#D4BAFF" />
            </motion.div>
          </div>
          <h1 className="text-3xl font-semibold text-[#5A4570] mb-2">
            ✨ Cosmic Vibes ✨
          </h1>
          <p className="text-[#9B8AA8]">Your mystical journey awaits</p>
        </motion.div>

        {/* Zodiac Wheel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 bg-white/40 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50"
        >
          <h3 className="text-center text-[#5A4570] mb-4 flex items-center justify-center gap-2">
            <Stars className="w-5 h-5" />
            Zodiac Wheel
            <Stars className="w-5 h-5" />
          </h3>
          <div className="grid grid-cols-6 gap-3">
            {zodiacSigns.map((sign, index) => (
              <motion.div
                key={sign.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  transition: { duration: 0.5 },
                }}
                className="aspect-square rounded-full bg-gradient-to-br from-[#FFB6D9] to-[#D4BAFF] flex items-center justify-center text-2xl cursor-pointer shadow-md"
                style={{
                  boxShadow: "0 4px 15px rgba(212, 186, 255, 0.4)",
                }}
              >
                {sign.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Daily Vibe Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8 bg-gradient-to-br from-[#FFD6E8]/80 to-[#B3E5FC]/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.8), transparent 50%)",
            }}
          />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#5A4570] flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Your Daily Vibe
              </h3>
              <span className="text-sm text-[#9B8AA8]">March 1, 2026</span>
            </div>
            <p className="text-[#5A4570] mb-4 leading-relaxed">
              Today's energy is filled with creative possibilities and magical
              moments. Trust your intuition and let your inner light shine! ✨
            </p>
            <div className="flex gap-3 justify-center">
              <motion.button
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl"
              >
                💖
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl"
              >
                ✨
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl"
              >
                🌙
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
                className="text-3xl"
              >
                🔮
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <Link to="/daily-reading">
            <MagicalButton variant="primary" className="w-full">
              <span className="flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                Daily Reading
              </span>
            </MagicalButton>
          </Link>

          <Link to="/zodiac">
            <MagicalButton variant="secondary" className="w-full">
              <span className="flex items-center justify-center gap-2">
                <Stars className="w-5 h-5" />
                Zodiac Signs
              </span>
            </MagicalButton>
          </Link>

          <Link to="/journal">
            <MagicalButton variant="accent" className="w-full">
              <span className="flex items-center justify-center gap-2">
                <BookHeart className="w-5 h-5" />
                My Journal
              </span>
            </MagicalButton>
          </Link>

          <Link to="/profile">
            <MagicalButton variant="primary" className="w-full">
              <span className="flex items-center justify-center gap-2">
                <User className="w-5 h-5" />
                Profile & Settings
              </span>
            </MagicalButton>
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 pointer-events-none">
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1666556277774-ff9b3876bd72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBjcnlzdGFsJTIwZ2VtcyUyMG1hZ2ljYWx8ZW58MXx8fHwxNzcyMzUwNjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Mystical Crystal"
              className="w-20 h-20 object-contain opacity-30"
            />
          </motion.div>
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}