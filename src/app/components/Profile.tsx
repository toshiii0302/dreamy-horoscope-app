import { motion } from "motion/react";
import { Link } from "react-router";
import {
  ArrowLeft,
  User,
  Moon,
  Bell,
  Palette,
  Star,
  Sparkles,
  Heart,
} from "lucide-react";
import { TwinklingStars } from "./TwinklingStars";
import { FloatingSparkles } from "./FloatingSparkles";
import { MagicalButton } from "./MagicalButton";
import { BottomNav } from "./BottomNav";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Profile() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [dailyReminder, setDailyReminder] = useState(true);

  return (
    <div className="min-h-screen relative overflow-hidden pb-24">
      <TwinklingStars count={35} />
      <FloatingSparkles count={15} />

      {/* Magical background decorations */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 left-8 text-5xl">🔮</div>
        <div className="absolute top-32 right-12 text-4xl">✨</div>
        <div className="absolute bottom-40 left-16 text-5xl">💫</div>
        <div className="absolute bottom-24 right-20 text-4xl">🌙</div>
      </div>

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
              ✨ Profile & Settings ✨
            </h1>
            <p className="text-[#9B8AA8]">Customize your cosmic experience</p>
          </div>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-6 bg-gradient-to-br from-[#FFD6E8]/80 to-[#D4BAFF]/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50 relative overflow-hidden"
        >
          {/* Glow effect */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.9), transparent 60%)",
            }}
          />

          <div className="relative z-10 text-center">
            {/* Avatar */}
            <motion.div
              className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#FFB6D9] to-[#B3E5FC] flex items-center justify-center shadow-lg relative"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <User className="w-12 h-12 text-white" />
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Star className="w-6 h-6 text-[#FFD700]" fill="#FFD700" />
              </motion.div>
            </motion.div>

            <h2 className="text-xl text-[#5A4570] mb-1">Stardust Dreamer</h2>
            <p className="text-[#9B8AA8] mb-4">Pisces ♓ • Water Element</p>

            {/* Edit Profile Button */}
            <MagicalButton variant="secondary" className="text-sm px-4 py-2">
              Edit Profile
            </MagicalButton>
          </div>
        </motion.div>

        {/* Preferences Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h3 className="text-[#5A4570] mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            Preferences
          </h3>

          <div className="space-y-3">
            {/* Birth Info */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-white/50">
              <label className="text-sm text-[#9B8AA8] mb-2 block">
                Birth Date
              </label>
              <input
                type="date"
                defaultValue="2000-03-15"
                className="w-full bg-white/60 backdrop-blur-sm rounded-xl p-3 text-[#5A4570] border border-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4BAFF]"
              />
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-white/50">
              <label className="text-sm text-[#9B8AA8] mb-2 block">
                Birth Time
              </label>
              <input
                type="time"
                defaultValue="14:30"
                className="w-full bg-white/60 backdrop-blur-sm rounded-xl p-3 text-[#5A4570] border border-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4BAFF]"
              />
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-white/50">
              <label className="text-sm text-[#9B8AA8] mb-2 block">
                Birth Location
              </label>
              <input
                type="text"
                placeholder="Enter your birth city"
                defaultValue="Los Angeles, CA"
                className="w-full bg-white/60 backdrop-blur-sm rounded-xl p-3 text-[#5A4570] border border-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4BAFF] placeholder:text-[#9B8AA8]/50"
              />
            </div>
          </div>
        </motion.div>

        {/* Settings Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <h3 className="text-[#5A4570] mb-4 flex items-center gap-2">
            <Moon className="w-5 h-5" />
            Settings
          </h3>

          <div className="space-y-3">
            {/* Notifications Toggle */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-white/50 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFB6D9] to-[#D4BAFF] flex items-center justify-center">
                  <Bell className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[#5A4570]">Notifications</p>
                  <p className="text-xs text-[#9B8AA8]">
                    Daily horoscope alerts
                  </p>
                </div>
              </div>
              <motion.button
                onClick={() => setNotifications(!notifications)}
                className={`w-14 h-8 rounded-full relative ${
                  notifications
                    ? "bg-gradient-to-r from-[#D4BAFF] to-[#E1D4FF]"
                    : "bg-[#E0E0E0]"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-6 h-6 bg-white rounded-full shadow-md absolute top-1"
                  animate={{
                    left: notifications ? "calc(100% - 28px)" : "4px",
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.button>
            </motion.div>

            {/* Daily Reminder Toggle */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-white/50 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#B3E5FC] to-[#D6F1FF] flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[#5A4570]">Daily Reminder</p>
                  <p className="text-xs text-[#9B8AA8]">9:00 AM reminder</p>
                </div>
              </div>
              <motion.button
                onClick={() => setDailyReminder(!dailyReminder)}
                className={`w-14 h-8 rounded-full relative ${
                  dailyReminder
                    ? "bg-gradient-to-r from-[#B3E5FC] to-[#D6F1FF]"
                    : "bg-[#E0E0E0]"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="w-6 h-6 bg-white rounded-full shadow-md absolute top-1"
                  animate={{
                    left: dailyReminder ? "calc(100% - 28px)" : "4px",
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </motion.button>
            </motion.div>

            {/* Theme Setting */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-md border border-white/50 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FFE5CC] to-[#FFD6E8] flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[#5A4570]">Theme</p>
                  <p className="text-xs text-[#9B8AA8]">
                    Dreamy pastel colors
                  </p>
                </div>
              </div>
              <Heart className="w-5 h-5 text-[#FFB6D9]" fill="#FFB6D9" />
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative Crystal */}
        <motion.div
          className="fixed bottom-8 right-8 pointer-events-none"
          animate={{
            y: [0, -10, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1666556277774-ff9b3876bd72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBjcnlzdGFsJTIwZ2VtcyUyMG1hZ2ljYWx8ZW58MXx8fHwxNzcyMzUwNjc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Crystal"
            className="w-16 h-16 object-contain opacity-40"
          />
        </motion.div>
      </div>
      
      <BottomNav />
    </div>
  );
}