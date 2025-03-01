import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { trackDemoRequest } from "@/lib/analytics";

interface HeroSectionProps {
  subtitle?: string;
  onDemoClick?: () => void;
}

const HeroSection = ({
  subtitle,
  onDemoClick = () => {
    console.log("Demo button clicked");
    trackDemoRequest();
  },
}: HeroSectionProps) => {
  const { t, i18n } = useTranslation();
  const { resolvedTheme } = useTheme();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");

  const textLines = [t("hero.line1"), t("hero.line2"), t("hero.line3")];

  const imageUrls = [
    "/images/showcase-1.png",
    "/images/showcase-2.png",
    "/images/showcase-3.png",
    "/images/showcase-4.png",
    "/images/showcase-5.png",
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textLines.length);
    }, 4000);

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % imageUrls.length;
        setSlideDirection("left"); // Always slide from right to left
        return nextIndex;
      });
    }, 4000);

    return () => {
      clearInterval(textInterval);
      clearInterval(imageInterval);
    };
  }, [textLines.length, imageUrls.length]);

  return (
    <section className="relative w-full flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-32 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 z-0"></div>

      {/* Purple blob */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-100 dark:bg-primary-900/30 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-100 dark:bg-primary-900/30 rounded-full filter blur-3xl opacity-50"></div>

      <div className="container-auth0 relative z-10">
        <div className="flex flex-col items-center gap-12 relative">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full text-center relative z-10"
          >
            <div className="h-[220px] md:h-[240px] flex flex-col items-center justify-center mb-6">
              <AnimatePresence mode="wait">
                {textLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: currentTextIndex === index ? 1 : 0,
                      y: currentTextIndex === index ? 0 : 20,
                    }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className={`absolute w-full max-w-4xl mx-auto text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary dark:text-primary-300`}
                    style={{
                      display: currentTextIndex === index ? "block" : "none",
                    }}
                    dir={i18n.language === "ar" ? "rtl" : "ltr"}
                  >
                    {line}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Image Slider - Moved above the buttons */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-5xl mx-auto mb-8"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-200 to-primary-100 dark:from-primary-900/50 dark:to-primary-800/30 rounded-xl blur-xl opacity-50"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-auth0-lg overflow-hidden border border-gray-100 dark:border-gray-700 h-[400px] md:h-[500px]">
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={imageUrls[currentImageIndex]}
                      src={imageUrls[currentImageIndex]}
                      alt={`Financial dashboard ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      initial={{
                        x: slideDirection === "left" ? 300 : -300,
                        opacity: 0,
                      }}
                      animate={{
                        x: 0,
                        opacity: 1,
                      }}
                      exit={{
                        x: slideDirection === "left" ? -300 : 300,
                        opacity: 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        duration: 0.5,
                      }}
                    />
                  </AnimatePresence>

                  {/* Image navigation dots */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                    {imageUrls.map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all ${currentImageIndex === index ? "bg-primary dark:bg-primary-400 scale-110" : "bg-gray-300 dark:bg-gray-600"}`}
                        onClick={() => {
                          setSlideDirection(
                            index > currentImageIndex ? "left" : "right",
                          );
                          setCurrentImageIndex(index);
                        }}
                        aria-label={`Go to image ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                onClick={onDemoClick}
                className="bg-primary hover:bg-primary-600 text-white px-8 py-6 text-lg rounded-md"
              >
                {t("common.startTrial")}
              </Button>

              <Link to="/features" className="group">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-6 text-lg rounded-md flex items-center gap-2"
                >
                  {t("common.learnMore")}
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-6 mb-12">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`}
                    alt="User avatar"
                    className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-700"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t("hero.trustedBy")}{" "}
                <span className="font-semibold">10,000+</span>{" "}
                {t("hero.businesses")}
              </p>
            </div>

            {/* Subtitle text - Now below the buttons and avatars */}
            <p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto text-center"
              dir={i18n.language === "ar" ? "rtl" : "ltr"}
            >
              {subtitle || t("hero.subtitle")}
            </p>
          </motion.div>

          {/* Logos */}
          <div className="mt-12 pt-10 border-t border-gray-100 dark:border-gray-800 w-full">
            <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-6">
              {i18n.language === "ar"
                ? "موثوق به من قبل الشركات الرائدة حول العالم"
                : i18n.language === "fr"
                  ? "APPROUVÉ PAR LES ENTREPRISES LEADERS DANS LE MONDE"
                  : "TRUSTED BY LEADING COMPANIES WORLDWIDE"}
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">
              {["Microsoft", "Adobe", "Slack", "Spotify", "Airbnb"].map(
                (company) => (
                  <div
                    key={company}
                    className="flex items-center justify-center"
                  >
                    <span className="text-xl font-bold text-gray-400 dark:text-gray-500">
                      {company}
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
