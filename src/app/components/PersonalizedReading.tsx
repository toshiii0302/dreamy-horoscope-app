import { motion } from "motion/react";
import { Link, useParams } from "react-router";
import { ArrowLeft, Heart, Briefcase, DollarSign, Sparkles } from "lucide-react";
import { TwinklingStars } from "./TwinklingStars";
import { FloatingSparkles } from "./FloatingSparkles";
import { MagicalButton } from "./MagicalButton";
import { BottomNav } from "./BottomNav";
import { useState } from "react";

// Zodiac sign data
const zodiacData = {
  aries: {
    name: "Aries",
    symbol: "♈",
    dates: "Mar 21 - Apr 19",
    element: "Fire",
    gradient: "from-[#FFB6D9] to-[#FF9DB8]",
  },
  taurus: {
    name: "Taurus",
    symbol: "♉",
    dates: "Apr 20 - May 20",
    element: "Earth",
    gradient: "from-[#C3F0E8] to-[#B3E5FC]",
  },
  gemini: {
    name: "Gemini",
    symbol: "♊",
    dates: "May 21 - Jun 20",
    element: "Air",
    gradient: "from-[#D6F1FF] to-[#B3E5FC]",
  },
  cancer: {
    name: "Cancer",
    symbol: "♋",
    dates: "Jun 21 - Jul 22",
    element: "Water",
    gradient: "from-[#B3E5FC] to-[#D4BAFF]",
  },
  leo: {
    name: "Leo",
    symbol: "♌",
    dates: "Jul 23 - Aug 22",
    element: "Fire",
    gradient: "from-[#FFE5CC] to-[#FFD6E8]",
  },
  virgo: {
    name: "Virgo",
    symbol: "♍",
    dates: "Aug 23 - Sep 22",
    element: "Earth",
    gradient: "from-[#C3F0E8] to-[#D6F1FF]",
  },
  libra: {
    name: "Libra",
    symbol: "♎",
    dates: "Sep 23 - Oct 22",
    element: "Air",
    gradient: "from-[#FFD6E8] to-[#D4BAFF]",
  },
  scorpio: {
    name: "Scorpio",
    symbol: "♏",
    dates: "Oct 23 - Nov 21",
    element: "Water",
    gradient: "from-[#D4BAFF] to-[#E1D4FF]",
  },
  sagittarius: {
    name: "Sagittarius",
    symbol: "♐",
    dates: "Nov 22 - Dec 21",
    element: "Fire",
    gradient: "from-[#FFB6D9] to-[#FFD6E8]",
  },
  capricorn: {
    name: "Capricorn",
    symbol: "♑",
    dates: "Dec 22 - Jan 19",
    element: "Earth",
    gradient: "from-[#B3E5FC] to-[#C3F0E8]",
  },
  aquarius: {
    name: "Aquarius",
    symbol: "♒",
    dates: "Jan 20 - Feb 18",
    element: "Air",
    gradient: "from-[#D6F1FF] to-[#D4BAFF]",
  },
  pisces: {
    name: "Pisces",
    symbol: "♓",
    dates: "Feb 19 - Mar 20",
    element: "Water",
    gradient: "from-[#E1D4FF] to-[#FFD6E8]",
  },
};

// Horoscope content data
const horoscopeContent: Record<
  string,
  Record<string, { title: string; content: string; advice: string }>
> = {
  aries: {
    love: {
      title: "Love & Romance",
      content:
        "Your passionate energy is magnetic today! The stars align to bring exciting romantic opportunities. If you're in a relationship, expect heartwarming moments and deeper connection. Single Aries may encounter someone special in an unexpected place.",
      advice:
        "Open your heart to vulnerability and let your authentic self shine through. Your confidence is your greatest charm.",
    },
    career: {
      title: "Career & Success",
      content:
        "Your leadership qualities shine brightly in the workplace! This is an excellent time to take initiative on new projects. Your bold ideas will be well-received, and recognition for your hard work is coming your way.",
      advice:
        "Don't be afraid to speak up in meetings. Your innovative approach could be the solution everyone's been searching for.",
    },
    money: {
      title: "Money & Finances",
      content:
        "Financial opportunities are blooming! The universe supports your money goals. Consider investing in yourself or exploring new income streams. Your natural risk-taking ability could lead to profitable ventures.",
      advice:
        "Balance your impulsive nature with careful planning. That exciting opportunity may be worth pursuing, but do your research first.",
    },
    wellness: {
      title: "Wellness & Health",
      content:
        "Your energy levels are high! Channel this vitality into physical activities you love. Whether it's dance, sports, or adventure, movement will bring you joy and clarity. Your fiery spirit needs an outlet.",
      advice:
        "Remember to balance activity with rest. Your go-go-go nature is admirable, but even warriors need time to recharge.",
    },
  },
  taurus: {
    love: {
      title: "Love & Romance",
      content:
        "Romance flourishes in the simple pleasures! Your steady and sensual nature creates a warm, inviting atmosphere for love. Expect cozy moments and meaningful conversations that deepen your bonds.",
      advice:
        "Express your affection through thoughtful gestures. A homemade meal or a heartfelt note will speak volumes to your loved one.",
    },
    career: {
      title: "Career & Success",
      content:
        "Your reliable work ethic continues to build your professional reputation. Patience pays off as long-term projects begin showing results. Your practical approach solves problems others overlook.",
      advice:
        "Trust your instincts about timing. While others rush, your methodical approach ensures lasting success.",
    },
    money: {
      title: "Money & Finances",
      content:
        "Financial stability is your focus, and the stars support your sensible approach. Your natural ability to build wealth steadily serves you well. Consider investments in tangible assets.",
      advice:
        "Treat yourself to something beautiful, but maintain your practical outlook. Quality over quantity is your financial mantra.",
    },
    wellness: {
      title: "Wellness & Health",
      content:
        "Ground yourself in nature and nourishing routines. Your body craves wholesome foods, gentle movement, and connection to the earth. A walk in the park or gardening will restore your spirit.",
      advice:
        "Create a sanctuary space at home where you can relax and recharge. Your well-being thrives in comfortable, beautiful environments.",
    },
  },
  gemini: {
    love: {
      title: "Love & Romance",
      content:
        "Communication is the key to your heart! Engaging conversations and intellectual connection spark romantic chemistry. Your wit and charm are irresistible, attracting admirers who appreciate your brilliant mind.",
      advice:
        "Share your thoughts and listen deeply. The exchange of ideas with your partner or potential love interest creates magical moments.",
    },
    career: {
      title: "Career & Success",
      content:
        "Your versatility shines in the workplace! Juggling multiple projects comes naturally to you. Networking opportunities abound, and your communication skills open doors to exciting collaborations.",
      advice:
        "Focus your scattered energy on one priority task. Your multitasking ability is a gift, but depth requires sustained attention.",
    },
    money: {
      title: "Money & Finances",
      content:
        "Multiple income streams align with your dual nature! The universe supports your creative financial strategies. Your adaptability helps you navigate economic changes with ease.",
      advice:
        "Keep track of all your ventures. Your quick-moving mind might forget details, so organization is key to financial success.",
    },
    wellness: {
      title: "Wellness & Health",
      content:
        "Mental stimulation is essential for your well-being! Feed your curious mind with books, podcasts, and interesting conversations. Variety in your wellness routine keeps you engaged and motivated.",
      advice:
        "Try breathwork or meditation to calm your busy mind. Balance mental activity with moments of stillness and presence.",
    },
  },
  cancer: {
    love: {
      title: "Love & Romance",
      content:
        "Your nurturing heart creates a sanctuary of love! Emotional intimacy deepens, and you feel safe expressing your true feelings. Home-based romantic moments bring the greatest joy.",
      advice:
        "Trust your intuition about relationships. Your emotional wisdom guides you toward genuine connections that honor your sensitive nature.",
    },
    career: {
      title: "Career & Success",
      content:
        "Your empathetic approach makes you invaluable to your team! Creating a supportive work environment comes naturally. Your intuitive understanding of people's needs leads to harmonious collaborations.",
      advice:
        "Set boundaries to protect your energy. Your caring nature is beautiful, but remember to prioritize your own needs too.",
    },
    money: {
      title: "Money & Finances",
      content:
        "Building financial security for your loved ones motivates you! The stars support investments in home and family. Your cautious approach to money serves you well.",
      advice:
        "Balance saving with enjoying the present. Creating a cozy, beautiful home is a worthy investment in your happiness.",
    },
    wellness: {
      title: "Wellness & Health",
      content:
        "Emotional well-being is foundational to your health! Water-based activities soothe your soul - try swimming, baths, or being near the ocean. Self-care rituals nurture your sensitive spirit.",
      advice:
        "Honor your need for alone time. Retreating into your shell to recharge isn't selfish; it's essential for your wellness.",
    },
  },
  leo: {
    love: {
      title: "Love & Romance",
      content:
        "Your radiant heart draws love like sunshine! Generous affection and grand romantic gestures express your passionate nature. You deserve a love that celebrates your magnificent spirit.",
      advice:
        "Remember that true love appreciates you for who you are, not just what you do. Let yourself be adored as much as you adore.",
    },
    career: {
      title: "Career & Success",
      content:
        "Your natural charisma commands attention in professional settings! Leadership opportunities align with your royal essence. Your creative vision inspires others to reach for greatness.",
      advice:
        "Share the spotlight generously. Your light shines brightest when you help others shine too.",
    },
    money: {
      title: "Money & Finances",
      content:
        "Abundance flows toward your confident energy! The universe rewards your bold financial moves. Your generosity comes back to you multiplied, creating a cycle of prosperity.",
      advice:
        "Invest in quality experiences and items that bring lasting joy. Your regal taste deserves the best, but balance luxury with wise planning.",
    },
    wellness: {
      title: "Wellness & Health",
      content:
        "Your vitality thrives in the spotlight! Joyful movement like dance or performance arts energizes your spirit. Creative expression is medicine for your soul.",
      advice:
        "Protect your heart center with self-love practices. Your generous nature needs to include generosity toward yourself.",
    },
  },
  virgo: {
    love: {
      title: "Love & Romance",
      content:
        "Love reveals itself in thoughtful details! Your attentive nature shows care through acts of service. A partner who appreciates your devoted heart creates a beautiful connection.",
      advice:
        "Perfection isn't required for love to flourish. Allow yourself and your partner space to be beautifully imperfect.",
    },
    career: {
      title: "Career & Success",
      content:
        "Your meticulous attention to detail sets you apart! Analytical skills and practical solutions make you indispensable. Your modest approach hides incredible competence.",
      advice:
        "Recognize your own expertise. Stepping up and sharing your knowledge benefits everyone, including you.",
    },
    money: {
      title: "Money & Finances",
      content:
        "Your organized approach to finances creates stability! Budgeting comes naturally, and your practical nature ensures long-term security. Smart, careful planning leads to prosperity.",
      advice:
        "Allow some flexibility in your financial plans. A small splurge on self-care or pleasure isn't wasteful—it's necessary.",
    },
    wellness: {
      title: "Wellness & Health",
      content:
        "Healthy routines are your foundation! Your body responds beautifully to consistent self-care practices. Clean eating, regular exercise, and adequate rest optimize your well-being.",
      advice:
        "Be gentle with yourself about wellness goals. Progress, not perfection, is the path to sustainable health.",
    },
  },
  libra: {
    love: {
      title: "Love & Romance",
      content:
        "Harmony and romance dance together in your heart! Your charm and diplomatic nature create beautiful relationships. Partnership feels natural to you, and love brings out your best qualities.",
      advice:
        "Maintain your identity within relationships. True partnership celebrates two whole individuals choosing to unite.",
    },
    career: {
      title: "Career & Success",
      content:
        "Your ability to see all perspectives makes you an excellent mediator! Collaborative projects flourish under your guidance. Your aesthetic eye and fair judgment are highly valued.",
      advice:
        "Make decisions confidently. Your tendency to weigh all options is wise, but trust yourself to choose.",
    },
    money: {
      title: "Money & Finances",
      content:
        "Balance in finances mirrors your desire for equilibrium! The stars support fair exchanges and mutually beneficial partnerships. Your refined taste attracts quality investments.",
      advice:
        "Invest in beauty that lasts. Your appreciation for aesthetics is valid, but choose quality pieces over fleeting trends.",
    },
    wellness: {
      title: "Wellness & Health",
      content:
        "Balance is your wellness mantra! Finding equilibrium between activity and rest, social time and solitude, serves your health. Beautiful environments uplift your spirit.",
      advice:
        "Create harmony in your physical space. A balanced, aesthetically pleasing environment supports your mental and physical well-being.",
    },
  },
  scorpio: {
    love: {
      title: "Love & Romance",
      content:
        "Intense emotional depth defines your romantic nature! You crave transformative connections that touch the soul. Passion and loyalty create powerful bonds with those who earn your trust.",
      advice:
        "Vulnerability is strength, not weakness. Opening your guarded heart allows for the profound intimacy you desire.",
    },
    career: {
      title: "Career & Success",
      content:
        "Your determination and strategic mind overcome any obstacle! You excel at uncovering hidden information and solving complex problems. Your intensity drives remarkable achievements.",
      advice:
        "Channel your powerful energy into constructive pursuits. Your transformative nature can reshape entire industries.",
    },
    money: {
      title: "Money & Finances",
      content:
        "Financial transformation is in the stars! Your instincts about investments are sharp. You have a talent for turning resources into greater wealth through strategic planning.",
      advice:
        "Trust your gut about money matters, but also gather facts. Your combination of intuition and research is unbeatable.",
    },
    wellness: {
      title: "Wellness & Health",
      content:
        "Deep healing practices resonate with your soul! Explore transformative wellness modalities that address body, mind, and spirit. Your emotional intensity needs healthy outlets.",
      advice:
        "Release what no longer serves you. Letting go—physically, emotionally, and energetically—creates space for renewal.",
    },
  },
  sagittarius: {
    love: {
      title: "Love & Romance",
      content:
        "Adventure and freedom flavor your romantic life! You need a partner who shares your zest for exploration and growth. Honesty and humor create the connections that capture your heart.",
      advice:
        "Commitment doesn't mean losing freedom. The right relationship expands your world rather than limiting it.",
    },
    career: {
      title: "Career & Success",
      content:
        "Your optimistic vision inspires others! Big-picture thinking and philosophical approach bring fresh perspectives. International connections or educational pursuits advance your career.",
      advice:
        "Follow your passion for meaning. Work that aligns with your beliefs and allows for growth fulfills your ambitious spirit.",
    },
    money: {
      title: "Money & Finances",
      content:
        "Abundance follows your positive mindset! The universe supports your generous nature and adventurous financial spirit. Opportunities often come through travel or education.",
      advice:
        "Balance spontaneity with planning. Your lucky streak is real, but a financial safety net allows for more adventures.",
    },
    wellness: {
      title: "Wellness & Health",
      content:
        "Freedom of movement energizes your spirit! Outdoor adventures, travel, and exploration keep you vibrant. Your optimistic outlook is itself a powerful health tonic.",
      advice:
        "Stay active in ways that feel like play. When exercise is an adventure, you naturally maintain wellness.",
    },
  },
  capricorn: {
    love: {
      title: "Love & Romance",
      content:
        "Steady, committed love suits your loyal nature! You build relationships like you build everything—with patience, dedication, and care. Traditional romance and long-term partnership appeal to you.",
      advice:
        "Let your walls down gradually. The right person will appreciate both your strength and your softer side.",
    },
    career: {
      title: "Career & Success",
      content:
        "Your ambition and discipline create unstoppable momentum! Leadership comes naturally, and your practical wisdom guides others. Long-term goals manifest through your persistent effort.",
      advice:
        "Celebrate milestones along the journey. Success is sweeter when you acknowledge progress, not just final achievements.",
    },
    money: {
      title: "Money & Finances",
      content:
        "Financial mastery is your natural territory! Your disciplined approach to money builds lasting wealth. Conservative investments and strategic planning ensure security.",
      advice:
        "Invest in your future self wisely. Your practical nature knows that today's sacrifices create tomorrow's abundance.",
    },
    wellness: {
      title: "Wellness & Health",
      content:
        "Structure supports your well-being! Consistent routines, disciplined self-care, and achievable goals maintain your health. Your body appreciates the stability you create.",
      advice:
        "Balance work with rest. Even the most ambitious Capricorn needs downtime to maintain peak performance.",
    },
  },
  aquarius: {
    love: {
      title: "Love & Romance",
      content:
        "Unique connections captivate your heart! You need intellectual stimulation and friendship in romance. Unconventional relationships or unexpected connections bring joy to your independent spirit.",
      advice:
        "Emotional expression enhances connection. Balance your intellectual approach with heartfelt vulnerability.",
    },
    career: {
      title: "Career & Success",
      content:
        "Innovation is your superpower! Your original ideas and humanitarian vision change the world. Collaborative projects and technology-related fields align with your futuristic thinking.",
      advice:
        "Don't be discouraged if others don't immediately grasp your vision. Your ideas are ahead of their time.",
    },
    money: {
      title: "Money & Finances",
      content:
        "Unconventional financial strategies intrigue you! The stars support your unique approach to money. Technology investments or group ventures align with your innovative nature.",
      advice:
        "Balance idealism with practicality. Your vision for the future is important, but present-day security matters too.",
    },
    wellness: {
      title: "Wellness & Health",
      content:
        "Your brilliant mind needs care too! Mental health is as important as physical health. Social connections and intellectual pursuits feed your well-being.",
      advice:
        "Ground yourself regularly. Your forward-thinking mind sometimes needs to reconnect with your physical body.",
    },
  },
  pisces: {
    love: {
      title: "Love & Romance",
      content:
        "Dreamy, romantic love flows naturally to you! Your compassionate heart and intuitive understanding create deep emotional bonds. You deserve a love as magical as you imagine.",
      advice:
        "Maintain boundaries while remaining open-hearted. Your empathy is beautiful, but protect your sensitive energy.",
    },
    career: {
      title: "Career & Success",
      content:
        "Creative and healing professions showcase your gifts! Your imagination and compassion make a difference in whatever field you choose. Trust your artistic or spiritual vision.",
      advice:
        "Structure supports your dreams. Pair your creative inspiration with practical steps to manifest your visions.",
    },
    money: {
      title: "Money & Finances",
      content:
        "The universe provides for your generous spirit! Your intuitive approach to finances sometimes defies logic but often works out. Creative money-making aligns with your nature.",
      advice:
        "Balance giving with receiving. Creating financial boundaries doesn't diminish your compassionate nature.",
    },
    wellness: {
      title: "Wellness & Health",
      content:
        "Spiritual and creative practices heal your soul! Water, music, art, and meditation restore your sensitive spirit. Your emotional well-being directly impacts your physical health.",
      advice:
        "Protect your energy from overwhelming environments. Your empathic nature absorbs others' emotions, so regular cleansing is essential.",
    },
  },
};

const readingTypes = [
  {
    id: "love",
    name: "Love",
    icon: Heart,
    gradient: "from-[#FFB6D9] to-[#FFD6E8]",
    emoji: "💖",
  },
  {
    id: "career",
    name: "Career",
    icon: Briefcase,
    gradient: "from-[#D4BAFF] to-[#E1D4FF]",
    emoji: "✨",
  },
  {
    id: "money",
    name: "Money",
    icon: DollarSign,
    gradient: "from-[#C3F0E8] to-[#B3E5FC]",
    emoji: "💰",
  },
  {
    id: "wellness",
    name: "Wellness",
    icon: Sparkles,
    gradient: "from-[#FFE5CC] to-[#FFD6E8]",
    emoji: "🌸",
  },
];

export default function PersonalizedReading() {
  const { zodiacSign } = useParams();
  const [selectedReading, setSelectedReading] = useState<string | null>(null);
  const [showContent, setShowContent] = useState(false);

  const sign = zodiacSign ? zodiacData[zodiacSign.toLowerCase() as keyof typeof zodiacData] : null;
  const readings = zodiacSign
    ? horoscopeContent[zodiacSign.toLowerCase() as keyof typeof horoscopeContent]
    : null;

  if (!sign || !readings) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-[#5A4570] mb-4">Zodiac sign not found</h2>
          <Link to="/zodiac">
            <MagicalButton>Back to Zodiac Selection</MagicalButton>
          </Link>
        </div>
      </div>
    );
  }

  const handleReadingSelect = (readingId: string) => {
    setSelectedReading(readingId);
    setShowContent(false);
    setTimeout(() => setShowContent(true), 100);
  };

  const currentReading = selectedReading ? readings[selectedReading] : null;

  return (
    <div className="min-h-screen relative overflow-hidden pb-24">
      <TwinklingStars count={50} />
      <FloatingSparkles count={25} />

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link to="/zodiac">
            <motion.button
              whileHover={{ x: -5 }}
              className="mb-4 text-[#5A4570] flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Zodiac Signs
            </motion.button>
          </Link>

          {/* Zodiac Sign Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className={`bg-gradient-to-br ${sign.gradient} rounded-3xl p-8 shadow-2xl border border-white/50 mb-8 relative overflow-hidden`}
          >
            {/* Soft glow overlay */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6), transparent 60%)",
              }}
            />

            {/* Constellation background */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="20" cy="20" r="2" fill="white" />
                <circle cx="50" cy="30" r="2" fill="white" />
                <circle cx="80" cy="25" r="2" fill="white" />
                <circle cx="35" cy="60" r="2" fill="white" />
                <circle cx="70" cy="70" r="2" fill="white" />
                <line x1="20" y1="20" x2="50" y2="30" stroke="white" strokeWidth="1" />
                <line x1="50" y1="30" x2="80" y2="25" stroke="white" strokeWidth="1" />
                <line x1="35" y1="60" x2="70" y2="70" stroke="white" strokeWidth="1" />
              </svg>
            </div>

            <div className="relative z-10 text-center">
              <motion.div
                className="text-7xl mb-4"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {sign.symbol}
              </motion.div>
              <h1 className="text-4xl text-[#5A4570] mb-2">{sign.name}</h1>
              <p className="text-[#9B8AA8] mb-2">{sign.dates}</p>
              <div className="inline-block px-4 py-2 rounded-full bg-white/40 text-[#5A4570]">
                {sign.element} Element
              </div>
            </div>
          </motion.div>

          <div className="text-center mb-6">
            <h2 className="text-2xl text-[#5A4570] mb-2">
              ✨ Choose Your Reading ✨
            </h2>
            <p className="text-[#9B8AA8]">
              Select a category to reveal your personalized horoscope
            </p>
          </div>
        </motion.div>

        {/* Reading Type Selection */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {readingTypes.map((type, index) => {
            const Icon = type.icon;
            const isSelected = selectedReading === type.id;

            return (
              <motion.button
                key={type.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleReadingSelect(type.id)}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(212, 186, 255, 0.7)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`bg-gradient-to-br ${type.gradient} rounded-3xl p-6 shadow-lg border-2 transition-all relative overflow-hidden ${
                  isSelected
                    ? "border-white shadow-2xl"
                    : "border-white/50"
                }`}
              >
                {/* Glow effect for selected */}
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.5), transparent 70%)",
                    }}
                  />
                )}

                {/* Twinkling sparkles */}
                {isSelected && (
                  <motion.div
                    className="absolute top-2 right-2"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <Sparkles className="w-5 h-5 text-white" />
                  </motion.div>
                )}

                <div className="relative z-10 text-center">
                  <motion.div
                    className="text-4xl mb-3"
                    animate={
                      isSelected
                        ? {
                            scale: [1, 1.2, 1],
                            rotate: [0, 10, -10, 0],
                          }
                        : {}
                    }
                    transition={{
                      duration: 1,
                      repeat: isSelected ? Infinity : 0,
                    }}
                  >
                    {type.emoji}
                  </motion.div>
                  <Icon className="w-8 h-8 mx-auto mb-2 text-[#5A4570]" />
                  <h3 className="text-lg text-[#5A4570]">{type.name}</h3>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Reading Content */}
        {currentReading && (
          <motion.div
            key={selectedReading}
            initial={{ opacity: 0, y: 20 }}
            animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 relative overflow-hidden"
          >
            {/* Soft magical glow */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, rgba(212, 186, 255, 0.5), transparent 70%)",
              }}
            />

            {/* Floating sparkles inside card */}
            <motion.div
              className="absolute top-4 right-4"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <Sparkles className="w-6 h-6 text-[#D4BAFF]" />
            </motion.div>

            <motion.div
              className="absolute bottom-4 left-4"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                delay: 1,
                repeat: Infinity,
              }}
            >
              <Sparkles className="w-6 h-6 text-[#FFB6D9]" />
            </motion.div>

            <div className="relative z-10">
              <h3 className="text-2xl text-[#5A4570] mb-6 text-center">
                {currentReading.title}
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg text-[#5A4570] mb-3 flex items-center gap-2">
                    <span className="text-2xl">🌟</span>
                    Your Reading
                  </h4>
                  <p className="text-[#5A4570] leading-relaxed">
                    {currentReading.content}
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#F5E6FF] to-[#FFE5F5] rounded-2xl p-6 border border-[#D4BAFF]/30">
                  <h4 className="text-lg text-[#5A4570] mb-3 flex items-center gap-2">
                    <span className="text-2xl">💫</span>
                    Mystical Advice
                  </h4>
                  <p className="text-[#5A4570] leading-relaxed italic">
                    {currentReading.advice}
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="flex justify-center gap-4 mt-8">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-3xl opacity-60"
                >
                  ✨
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="text-3xl opacity-60"
                >
                  🌙
                </motion.div>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-3xl opacity-60"
                >
                  ✨
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Decorative moon */}
        <motion.div
          className="fixed bottom-32 right-8 pointer-events-none"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="text-7xl opacity-20">🔮</div>
        </motion.div>

        <motion.div
          className="fixed top-32 left-8 pointer-events-none"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -10, 10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="text-6xl opacity-20">💫</div>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
}
