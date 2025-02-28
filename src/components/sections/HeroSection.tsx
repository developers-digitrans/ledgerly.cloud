import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  subtitle?: string;
  onDemoClick?: () => void;
}

const HeroSection = ({
  subtitle = "Centralize your financial data, automate processes, and gain strategic insights with our comprehensive financial management platform.",
  onDemoClick = () => console.log("Demo button clicked"),
}: HeroSectionProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const textLines = [
    "Financial management platform",
    "that transforms your business data",
    "Into Strategic Financial Insights",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textLines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full flex items-center justify-center pt-32 pb-20 md:pt-40 md:pb-32 bg-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0"></div>

      {/* Purple blob */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-100 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-100 rounded-full filter blur-3xl opacity-50"></div>

      <div className="container-auth0 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 text-center lg:text-left relative z-10"
          >
            <div className="h-[180px] md:h-[200px] lg:h-[220px] flex flex-col items-center justify-center lg:items-start mb-6">
              <AnimatePresence mode="wait">
                {textLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 20,
                      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
                    }}
                    animate={{
                      opacity: currentTextIndex === index ? 1 : 0,
                      y: currentTextIndex === index ? 0 : 20,
                      clipPath:
                        currentTextIndex === index
                          ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                          : "polygon(0 0, 100% 0, 100% 0, 0 0)",
                    }}
                    exit={{
                      opacity: 0,
                      y: -20,
                      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    className={`absolute text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${index === 2 ? "bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-400" : "text-primary"}`}
                    style={{
                      display: currentTextIndex === index ? "block" : "none",
                    }}
                  >
                    {line}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button
                size="lg"
                onClick={onDemoClick}
                className="bg-primary hover:bg-primary-600 text-white px-8 py-6 text-lg rounded-md"
              >
                Start Free Trial
              </Button>

              <Link to="/features" className="group">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-200 text-gray-700 hover:bg-gray-50 px-8 py-6 text-lg rounded-md flex items-center gap-2"
                >
                  Learn More
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=user${i}`}
                    alt="User avatar"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Trusted by <span className="font-semibold">10,000+</span>{" "}
                businesses
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 lg:absolute lg:right-0 lg:top-0 z-20"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-200 to-primary-100 rounded-xl blur-xl opacity-50"></div>
              <div className="relative bg-white rounded-xl shadow-auth0-lg overflow-hidden border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                  alt="Financial dashboard"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-lg shadow-auth0 border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Revenue up 24%
                  </p>
                  <p className="text-xs text-gray-500">
                    Compared to last month
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-auth0 border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-primary"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    Financial Analytics
                  </p>
                </div>
                <div className="flex space-x-1">
                  <div className="h-2 w-12 bg-primary rounded-full"></div>
                  <div className="h-2 w-8 bg-primary-200 rounded-full"></div>
                  <div className="h-2 w-4 bg-primary-100 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Logos */}
        <div className="mt-20 pt-10 border-t border-gray-100">
          <p className="text-center text-sm text-gray-500 mb-6">
            TRUSTED BY LEADING COMPANIES WORLDWIDE
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70">
            {["Microsoft", "Adobe", "Slack", "Spotify", "Airbnb"].map(
              (company) => (
                <div key={company} className="flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-400">
                    {company}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
