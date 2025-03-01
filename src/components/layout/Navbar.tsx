import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "@/components/ui/logo";
import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageSelector from "@/components/ui/LanguageSelector";
import { useTranslation } from "react-i18next";
import { trackLogin, trackSignUp } from "@/lib/analytics";
import { motion } from "framer-motion";

interface NavbarProps {
  onOpenRegister?: () => void;
  onOpenLogin?: () => void;
  isLoggedIn?: boolean;
}

const Navbar = ({
  onOpenRegister = () => {
    trackSignUp();
  },
  onOpenLogin = () => {
    trackLogin();
  },
  isLoggedIn = false,
}: NavbarProps) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // For mobile only
  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <nav className="w-full h-20 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 fixed top-0 z-50 shadow-sm">
      <div className="container-auth0 h-full flex items-center justify-between">
        {/* Logo */}
        <Logo size="medium" color="primary" />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between flex-1 ml-10">
          <div className="flex space-x-1">
            {/* Why FinanceFlow Dropdown */}
            <div className="relative group">
              <button
                className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-300 flex items-center gap-1 rounded-md transition-colors"
                onMouseEnter={() => handleMouseEnter("why")}
                onMouseLeave={handleMouseLeave}
              >
                {i18n.language === "ar" ? "لماذا ليدجرلي" : "Why Ledgerly"}{" "}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${activeDropdown === "why" ? "rotate-180" : ""}`}
                />
              </button>

              <motion.div
                key="why-dropdown"
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: activeDropdown === "why" ? 1 : 0,
                  y: activeDropdown === "why" ? 0 : -10,
                  display: activeDropdown === "why" ? "grid" : "none",
                }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-auth0-md border border-gray-100 dark:border-gray-700 p-4 grid gap-3 z-50"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <Link
                  to="/features"
                  className="flex flex-col hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-md"
                  onClick={() => setActiveDropdown(null)}
                >
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {i18n.language === "ar" ? "الميزات" : "Features"}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {i18n.language === "ar"
                      ? "استكشف ميزاتنا القوية"
                      : "Explore our powerful features"}
                  </span>
                </Link>
                <Link
                  to="/blog"
                  className="flex flex-col hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-md"
                  onClick={() => setActiveDropdown(null)}
                >
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {i18n.language === "ar" ? "الموارد" : "Resources"}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {i18n.language === "ar"
                      ? "أدلة، دروس والمزيد"
                      : "Guides, tutorials and more"}
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-300 flex items-center gap-1 rounded-md transition-colors"
                onMouseEnter={() => handleMouseEnter("solutions")}
                onMouseLeave={handleMouseLeave}
              >
                {i18n.language === "ar" ? "الحلول" : "Solutions"}{" "}
                <ChevronDown
                  size={16}
                  className={`transition-transform ${activeDropdown === "solutions" ? "rotate-180" : ""}`}
                />
              </button>

              <motion.div
                key="solutions-dropdown"
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: activeDropdown === "solutions" ? 1 : 0,
                  y: activeDropdown === "solutions" ? 0 : -10,
                  display: activeDropdown === "solutions" ? "grid" : "none",
                }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-auth0-md border border-gray-100 dark:border-gray-700 p-4 grid gap-3 z-50"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <Link
                  to="/Small-Business"
                  className="flex flex-col hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-md"
                  onClick={() => setActiveDropdown(null)}
                >
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {i18n.language === "ar"
                      ? "للشركات الصغيرة"
                      : "For Small Business"}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {i18n.language === "ar"
                      ? "تبسيط الشؤون المالية"
                      : "Streamline your finances"}
                  </span>
                </Link>
                <Link
                  to="/Enterprise"
                  className="flex flex-col hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded-md"
                  onClick={() => setActiveDropdown(null)}
                >
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {i18n.language === "ar" ? "للمؤسسات" : "For Enterprise"}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {i18n.language === "ar"
                      ? "حلول مالية متقدمة"
                      : "Advanced financial solutions"}
                  </span>
                </Link>
              </motion.div>
            </div>

            <Link
              to="/pricing"
              className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-300 rounded-md transition-colors"
            >
              {i18n.language === "ar" ? "الأسعار" : "Pricing"}
            </Link>

            <a
              href="https://docs.ledgerly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-300 rounded-md transition-colors"
            >
              {i18n.language === "ar" ? "الوثائق" : "Documentation"}
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LanguageSelector />

            {!isLoggedIn ? (
              <>
                <Button
                  variant="outline"
                  onClick={onOpenLogin}
                  className="text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  {t("common.login")}
                </Button>
                <Button
                  onClick={onOpenRegister}
                  className="bg-primary hover:bg-primary-600 text-white font-medium"
                >
                  {t("common.signUp")}
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                onClick={() => {}}
                className="text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                {i18n.language === "ar" ? "لوحة التحكم" : "Dashboard"}
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-md p-4 flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <button
                className="flex justify-between items-center px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-300"
                onClick={() => toggleDropdown("mobile-why")}
              >
                <span>Why Ledgerly</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${activeDropdown === "mobile-why" ? "rotate-180" : ""}`}
                />
              </button>

              {activeDropdown === "mobile-why" && (
                <div className="pl-4 flex flex-col space-y-2 mt-1">
                  <Link
                    to="/features"
                    className="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-300"
                  >
                    Features
                  </Link>
                  <Link
                    to="/blog"
                    className="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-300"
                  >
                    Resources
                  </Link>
                </div>
              )}

              <button
                className="flex justify-between items-center px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-300"
                onClick={() => toggleDropdown("mobile-solutions")}
              >
                <span>Solutions</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${activeDropdown === "mobile-solutions" ? "rotate-180" : ""}`}
                />
              </button>

              {activeDropdown === "mobile-solutions" && (
                <div className="pl-4 flex flex-col space-y-2 mt-1">
                  <Link
                    to="/Small-Business"
                    className="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-300"
                  >
                    For Small Business
                  </Link>
                  <Link
                    to="/Enterprise"
                    className="px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-300"
                  >
                    For Enterprise
                  </Link>
                </div>
              )}

              <Link
                to="/pricing"
                className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-300"
              >
                Pricing
              </Link>

              <a
                href="https://docs.ledgerly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-300"
              >
                Documentation
              </a>

              <div className="flex items-center gap-2 px-3 py-2">
                <ThemeToggle />
                <LanguageSelector />
              </div>
            </div>

            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100 dark:border-gray-800">
              <Button
                variant="outline"
                onClick={onOpenLogin}
                className="w-full justify-center text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                {t("common.login")}
              </Button>
              <Button
                onClick={onOpenRegister}
                className="w-full justify-center bg-primary hover:bg-primary-600 text-white font-medium"
              >
                {t("common.signUp")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
