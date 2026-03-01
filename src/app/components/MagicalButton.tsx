import { motion } from "motion/react";
import { ReactNode } from "react";

interface MagicalButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

export function MagicalButton({
  children,
  onClick,
  variant = "primary",
  className = "",
}: MagicalButtonProps) {
  const variants = {
    primary: "bg-gradient-to-r from-[#D4BAFF] to-[#E1D4FF] text-[#5A4570]",
    secondary: "bg-gradient-to-r from-[#FFB6D9] to-[#FFD6E8] text-[#5A4570]",
    accent: "bg-gradient-to-r from-[#B3E5FC] to-[#D6F1FF] text-[#5A4570]",
  };

  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-3 rounded-full shadow-lg ${variants[variant]} ${className}`}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 20px rgba(212, 186, 255, 0.6)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.button>
  );
}
