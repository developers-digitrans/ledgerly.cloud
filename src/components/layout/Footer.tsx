import React from "react";
import { useTranslation } from "react-i18next";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Logo from "@/components/ui/logo";
import { useTheme } from "@/context/ThemeContext";

const Footer = () => {
  const { t, i18n } = useTranslation();
  const { resolvedTheme } = useTheme();
  const contactInfo = [
    {
      country: "United States",
      phone: "+1 (555) 123-4567",
      email: "us@ledgerly.com",
    },
    {
      country: "United Kingdom",
      phone: "+44 20 7123 4567",
      email: "uk@ledgerly.com",
    },
    {
      country: "Australia",
      phone: "+61 2 8123 4567",
      email: "au@ledgerly.com",
    },
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="h-5 w-5" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="h-5 w-5" />, href: "#", label: "Instagram" },
  ];

  const footerLinks = [
    {
      title: i18n.language === "ar" ? "المنتج" : "Product",
      links: [
        {
          label: i18n.language === "ar" ? "الميزات" : "Features",
          href: "/features",
        },
        {
          label: i18n.language === "ar" ? "الأسعار" : "Pricing",
          href: "/pricing",
        },
        {
          label: i18n.language === "ar" ? "التكاملات" : "Integrations",
          href: "/integrations",
        },
        {
          label: i18n.language === "ar" ? "دراسات الحالة" : "Case Studies",
          href: "/case-studies",
        },
        {
          label: i18n.language === "ar" ? "الوثائق" : "Documentation",
          href: "https://docs.ledgerly.com",
        },
      ],
    },
    {
      title: i18n.language === "ar" ? "الموارد" : "Resources",
      links: [
        { label: i18n.language === "ar" ? "المدونة" : "Blog", href: "/blog" },
        {
          label: i18n.language === "ar" ? "مركز المساعدة" : "Help Center",
          href: "/help",
        },
        {
          label: i18n.language === "ar" ? "المجتمع" : "Community",
          href: "/community",
        },
        {
          label: i18n.language === "ar" ? "الندوات عبر الإنترنت" : "Webinars",
          href: "/webinars",
        },
      ],
    },
    {
      title: i18n.language === "ar" ? "الشركة" : "Company",
      links: [
        {
          label: i18n.language === "ar" ? "من نحن" : "About Us",
          href: "/about",
        },
        {
          label: i18n.language === "ar" ? "اتصل بنا" : "Contact",
          href: "/contact",
        },
        { label: i18n.language === "ar" ? "الصحافة" : "Press", href: "/press" },
      ],
    },
    {
      title: i18n.language === "ar" ? "قانوني" : "Legal",
      links: [
        {
          label: i18n.language === "ar" ? "شروط الخدمة" : "Terms of Service",
          href: "/terms",
        },
        {
          label: i18n.language === "ar" ? "سياسة الخصوصية" : "Privacy Policy",
          href: "/privacy",
        },
        {
          label: i18n.language === "ar" ? "الأمان" : "Security",
          href: "/security",
        },
        {
          label: i18n.language === "ar" ? "الامتثال" : "Compliance",
          href: "/compliance",
        },
        {
          label: i18n.language === "ar" ? "ملفات تعريف الارتباط" : "Cookies",
          href: "/cookies",
        },
      ],
    },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="container-auth0 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="mb-4">
              <Logo size="large" color="primary" />
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Professional accounting software for modern businesses.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, i) => (
            <div key={i}>
              <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-300 flex items-center group"
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="h-4 w-4 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-1 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()}{" "}
              {i18n.language === "ar"
                ? "منتج شركة ديجيترانس. جميع الحقوق محفوظة."
                : "A Digitrans, Inc product. All rights reserved."}
            </p>
            <div className="flex space-x-6 text-sm text-gray-500 dark:text-gray-400">
              <a
                href="/terms"
                className="hover:text-primary dark:hover:text-primary-300"
              >
                {i18n.language === "ar" ? "الشروط" : "Terms"}
              </a>
              <a
                href="/privacy"
                className="hover:text-primary dark:hover:text-primary-300"
              >
                {i18n.language === "ar" ? "الخصوصية" : "Privacy"}
              </a>
              <a
                href="/cookies"
                className="hover:text-primary dark:hover:text-primary-300"
              >
                {i18n.language === "ar" ? "ملفات تعريف الارتباط" : "Cookies"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
