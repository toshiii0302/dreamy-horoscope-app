import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft, Plus, Heart, Star, Sparkles, Smile } from "lucide-react";
import { TwinklingStars } from "./TwinklingStars";
import { FloatingSparkles } from "./FloatingSparkles";
import { MagicalButton } from "./MagicalButton";
import { BottomNav } from "./BottomNav";
import { useState } from "react";

const moodStickers = ["💖", "✨", "🌙", "🔮", "⭐", "🌸", "💫", "🦋"];

interface JournalEntry {
  id: number;
  date: string;
  mood: string;
  note: string;
  stickers: string[];
}

export default function Journal() {
  const [entries, setEntries] = useState<JournalEntry[]>([
    {
      id: 1,
      date: "March 1, 2026",
      mood: "💖",
      note: "Today was filled with magic and good vibes! Feeling grateful for all the love in my life.",
      stickers: ["✨", "💖", "🌙"],
    },
    {
      id: 2,
      date: "February 28, 2026",
      mood: "🌸",
      note: "Manifesting abundance and joy. The universe is on my side!",
      stickers: ["⭐", "🔮"],
    },
  ]);

  const [showNewEntry, setShowNewEntry] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [selectedMood, setSelectedMood] = useState("💖");
  const [selectedStickers, setSelectedStickers] = useState<string[]>([]);

  const addEntry = () => {
    if (newNote.trim()) {
      const newEntry: JournalEntry = {
        id: Date.now(),
        date: "March 1, 2026",
        mood: selectedMood,
        note: newNote,
        stickers: selectedStickers,
      };
      setEntries([newEntry, ...entries]);
      setNewNote("");
      setSelectedStickers([]);
      setShowNewEntry(false);
    }
  };

  const toggleSticker = (sticker: string) => {
    setSelectedStickers((prev) =>
      prev.includes(sticker)
        ? prev.filter((s) => s !== sticker)
        : [...prev, sticker]
    );
  };

  return (
    <div className="min-h-screen relative overflow-hidden pb-24">
      <TwinklingStars count={35} />
      <FloatingSparkles count={15} />

      {/* Background doodles */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 text-4xl">🌙</div>
        <div className="absolute top-40 right-16 text-3xl">✨</div>
        <div className="absolute bottom-32 left-20 text-4xl">💫</div>
        <div className="absolute bottom-48 right-12 text-3xl">🔮</div>
        <div className="absolute top-60 left-1/2 text-3xl">⭐</div>
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
          <div className="text-center mb-6">
            <h1 className="text-3xl font-semibold text-[#5A4570] mb-2">
              ✨ My Magical Journal ✨
            </h1>
            <p className="text-[#9B8AA8]">Capture your cosmic moments</p>
          </div>

          {/* Add Entry Button */}
          {!showNewEntry && (
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <MagicalButton
                variant="primary"
                className="w-full"
                onClick={() => setShowNewEntry(true)}
              >
                <span className="flex items-center justify-center gap-2">
                  <Plus className="w-5 h-5" />
                  New Entry
                </span>
              </MagicalButton>
            </motion.div>
          )}
        </motion.div>

        {/* New Entry Form */}
        {showNewEntry && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50"
          >
            <h3 className="text-[#5A4570] mb-4">Create New Entry</h3>

            {/* Mood Selection */}
            <div className="mb-4">
              <label className="text-sm text-[#9B8AA8] mb-2 block">
                How are you feeling?
              </label>
              <div className="flex gap-2 flex-wrap">
                {moodStickers.map((mood) => (
                  <motion.button
                    key={mood}
                    onClick={() => setSelectedMood(mood)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-3xl p-2 rounded-full ${
                      selectedMood === mood
                        ? "bg-gradient-to-br from-[#FFB6D9] to-[#D4BAFF]"
                        : "bg-white/40"
                    }`}
                  >
                    {mood}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Note Input */}
            <div className="mb-4">
              <label className="text-sm text-[#9B8AA8] mb-2 block">
                What's on your mind?
              </label>
              <textarea
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                className="w-full bg-white/60 backdrop-blur-sm rounded-2xl p-4 text-[#5A4570] border border-white/50 resize-none focus:outline-none focus:ring-2 focus:ring-[#D4BAFF]"
                rows={4}
                placeholder="Write your thoughts here..."
              />
            </div>

            {/* Sticker Selection */}
            <div className="mb-4">
              <label className="text-sm text-[#9B8AA8] mb-2 block">
                Add stickers
              </label>
              <div className="flex gap-2 flex-wrap">
                {moodStickers.map((sticker) => (
                  <motion.button
                    key={sticker}
                    onClick={() => toggleSticker(sticker)}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className={`text-2xl p-2 rounded-full ${
                      selectedStickers.includes(sticker)
                        ? "bg-gradient-to-br from-[#B3E5FC] to-[#D6F1FF]"
                        : "bg-white/40"
                    }`}
                  >
                    {sticker}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <MagicalButton
                variant="primary"
                className="flex-1"
                onClick={addEntry}
              >
                Save
              </MagicalButton>
              <MagicalButton
                variant="secondary"
                className="flex-1"
                onClick={() => {
                  setShowNewEntry(false);
                  setNewNote("");
                  setSelectedStickers([]);
                }}
              >
                Cancel
              </MagicalButton>
            </div>
          </motion.div>
        )}

        {/* Journal Entries */}
        <div className="space-y-4">
          {entries.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-white/70 to-white/50 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white/50 relative overflow-hidden"
            >
              {/* Sparkle decoration */}
              <motion.div
                className="absolute top-3 right-3"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-5 h-5 text-[#D4BAFF]/40" />
              </motion.div>

              <div className="flex items-start gap-3 mb-3">
                <div className="text-4xl">{entry.mood}</div>
                <div className="flex-1">
                  <p className="text-sm text-[#9B8AA8] mb-1">{entry.date}</p>
                  <p className="text-[#5A4570] leading-relaxed">{entry.note}</p>
                </div>
              </div>

              {/* Stickers */}
              {entry.stickers.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {entry.stickers.map((sticker, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 * idx }}
                      className="text-xl"
                    >
                      {sticker}
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      <BottomNav />
    </div>
  );
}