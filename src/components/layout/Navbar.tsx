import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "@/components/ui/logo";
import { motion } from "framer-motion";

interface NavbarProps {
  onOpenRegister?: () => void;
  onOpenLogin?: () => void;
  isLoggedIn?: boolean;
}

const Navbar = ({
  onOpenRegister = () => {},
  onOpenLogin = () => {},
  isLoggedIn = false,
}: NavbarProps) => {
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
    <nav className="w-full h-20 border-b border-gray-100 bg-white fixed top-0 z-50 shadow-sm">
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
                className="px-3 py-2 text-gray-700 hover:text-primary flex items-center gap-1 rounded-md transition-colors"
                onMouseEnter={() => handleMouseEnter("why")}
                onMouseLeave={handleMouseLeave}
              >
                Why Ledgerly{" "}
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
                className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-auth0-md border border-gray-100 p-4 grid gap-3 z-50"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <Link
                  to="/features"
                  className="flex flex-col hover:bg-gray-50 p-2 rounded-md"
                  onClick={() => setActiveDropdown(null)}
                >
                  <span className="font-medium text-gray-800">Features</span>
                  <span className="text-sm text-gray-500">
                    Explore our powerful features
                  </span>
                </Link>
                <Link
                  to="/blog"
                  className="flex flex-col hover:bg-gray-50 p-2 rounded-md"
                  onClick={() => setActiveDropdown(null)}
                >
                  <span className="font-medium text-gray-800">Resources</span>
                  <span className="text-sm text-gray-500">
                    Guides, tutorials and more
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Solutions Dropdown */}
            <div className="relative group">
              <button
                className="px-3 py-2 text-gray-700 hover:text-primary flex items-center gap-1 rounded-md transition-colors"
                onMouseEnter={() => handleMouseEnter("solutions")}
                onMouseLeave={handleMouseLeave}
              >
                Solutions{" "}
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
                className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-auth0-md border border-gray-100 p-4 grid gap-3 z-50"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <Link
                  to="/features"
                  className="flex flex-col hover:bg-gray-50 p-2 rounded-md"
                  onClick={() => setActiveDropdown(null)}
                >
                  <span className="font-medium text-gray-800">
                    For Small Business
                  </span>
                  <span className="text-sm text-gray-500">
                    Streamline your finances
                  </span>
                </Link>
                <Link
                  to="/features"
                  className="flex flex-col hover:bg-gray-50 p-2 rounded-md"
                  onClick={() => setActiveDropdown(null)}
                >
                  <span className="font-medium text-gray-800">
                    For Enterprise
                  </span>
                  <span className="text-sm text-gray-500">
                    Advanced financial solutions
                  </span>
                </Link>
              </motion.div>
            </div>

            <Link
              to="/pricing"
              className="px-3 py-2 text-gray-700 hover:text-primary rounded-md transition-colors"
            >
              Pricing
            </Link>

            <a
              href="https://docs.get-ledger.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-gray-700 hover:text-primary rounded-md transition-colors"
            >
              Documentation
            </a>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            {!isLoggedIn ? (
              <>
                <Button
                  variant="outline"
                  onClick={onOpenLogin}
                  className="text-gray-700 border-gray-300 hover:bg-gray-50"
                >
                  Log In
                </Button>
                <Button
                  onClick={onOpenRegister}
                  className="bg-primary hover:bg-primary-600 text-white"
                >
                  Sign Up Free
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                onClick={() => {}}
                className="text-gray-700 border-gray-300 hover:bg-gray-50"
              >
                Dashboard
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-gray-100 shadow-md p-4 flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <button
                className="flex justify-between items-center px-3 py-2 text-gray-700 hover:text-primary"
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
                    className="px-3 py-2 text-gray-600 hover:text-primary"
                  >
                    Features
                  </Link>
                  <Link
                    to="/blog"
                    className="px-3 py-2 text-gray-600 hover:text-primary"
                  >
                    Resources
                  </Link>
                </div>
              )}

              <button
                className="flex justify-between items-center px-3 py-2 text-gray-700 hover:text-primary"
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
                    to="/features"
                    className="px-3 py-2 text-gray-600 hover:text-primary"
                  >
                    For Small Business
                  </Link>
                  <Link
                    to="/features"
                    className="px-3 py-2 text-gray-600 hover:text-primary"
                  >
                    For Enterprise
                  </Link>
                </div>
              )}

              <Link
                to="/pricing"
                className="px-3 py-2 text-gray-700 hover:text-primary"
              >
                Pricing
              </Link>

              <a
                href="https://docs.get-ledger.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-gray-700 hover:text-primary"
              >
                Documentation
              </a>
            </div>

            <div className="flex flex-col space-y-2 pt-2 border-t border-gray-100">
              <Button
                variant="outline"
                onClick={onOpenLogin}
                className="w-full justify-center text-gray-700 border-gray-300 hover:bg-gray-50"
              >
                Log In
              </Button>
              <Button
                onClick={onOpenRegister}
                className="w-full justify-center bg-primary hover:bg-primary-600 text-white"
              >
                Sign Up Free
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
