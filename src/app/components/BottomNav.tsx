import { motion } from "motion/react";
import { Link, useLocation } from "react-router";
import { Home, BookOpen, Stars, BookHeart, User } from "lucide-react";

const navItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/daily-reading", icon: BookOpen, label: "Reading" },
  { path: "/zodiac", icon: Stars, label: "Zodiac" },
  { path: "/journal", icon: BookHeart, label: "Journal" },
  { path: "/profile", icon: User, label: "Profile" },
];

export function BottomNav() {
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 z-50 pb-safe"
    >
      <div className="max-w-md mx-auto px-4 pb-4">
        <div className="bg-white/80 backdrop-blur-lg rounded-full shadow-2xl border border-white/50 px-4 py-3">
          <div className="flex items-center justify-around">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;

              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    className="relative flex flex-col items-center gap-1"
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      className={`p-2 rounded-full ${
                        isActive
                          ? "bg-gradient-to-br from-[#D4BAFF] to-[#FFB6D9]"
                          : ""
                      }`}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isActive ? "text-white" : "text-[#9B8AA8]"
                        }`}
                      />
                    </motion.div>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-1 w-1 h-1 rounded-full bg-gradient-to-r from-[#D4BAFF] to-[#FFB6D9]"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
