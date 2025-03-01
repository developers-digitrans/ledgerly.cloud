import React from "react";
import { Link } from "react-router-dom";
import { BarChart2 } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

interface LogoProps {
  size?: "small" | "medium" | "large";
  color?: "primary" | "white";
  withText?: boolean;
}

const Logo = ({
  size = "medium",
  color = "primary",
  withText = true,
}: LogoProps) => {
  const { resolvedTheme } = useTheme();

  const sizeClasses = {
    small: "h-6",
    medium: "h-8",
    large: "h-10",
  };

  const textSizeClasses = {
    small: "text-lg",
    medium: "text-xl",
    large: "text-2xl",
  };

  const colorClasses = {
    primary: "text-primary",
    white: "text-white",
  };

  const iconSizeClasses = {
    small: "w-5 h-5",
    medium: "w-6 h-6",
    large: "w-8 h-8",
  };

  const iconColorClasses = {
    primary: "bg-primary-50 text-primary",
    white: "bg-white/10 text-white",
  };

  return (
    <Link to="/" className="flex items-center gap-2">
      <div className={`${colorClasses[color]} ${sizeClasses[size]}`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${sizeClasses[size]} ${resolvedTheme === "dark" ? "text-white" : ""}`}
        >
          <path
            d="M3 8.25V15.75C3 16.9926 3.79035 18 4.76471 18H19.2353C20.2096 18 21 16.9926 21 15.75V8.25C21 7.00736 20.2096 6 19.2353 6H4.76471C3.79035 6 3 7.00736 3 8.25Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.5 9H20.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 13.01L7.01 12.9989"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 13.01L11.01 12.9989"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {withText && (
        <span
          className={`font-bold ${resolvedTheme === "dark" ? "text-white" : colorClasses[color]} ${textSizeClasses[size]}`}
        >
          Ledgerly
        </span>
      )}
    </Link>
  );
};

export default Logo;
