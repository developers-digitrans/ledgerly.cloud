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

const Footer = () => {
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
      title: "Product",
      links: [
        { label: "Features", href: "/features" },
        { label: "Pricing", href: "/pricing" },
        { label: "Integrations", href: "/integrations" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Documentation", href: "https://docs.ledgerly.com" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Guides", href: "/guides" },
        { label: "Help Center", href: "/help" },
        { label: "Community", href: "/community" },
        { label: "Webinars", href: "/webinars" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
        { label: "Partners", href: "/partners" },
        { label: "Press", href: "/press" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Terms of Service", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Security", href: "/security" },
        { label: "Compliance", href: "/compliance" },
        { label: "Cookies", href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container-auth0 py-16">
        {/* Newsletter */}
        <div className="mb-16 p-8 bg-gray-50 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Stay up to date
              </h3>
              <p className="text-gray-600">
                Get the latest news and articles to your inbox every month.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 border border-gray-300 rounded-l-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="rounded-l-none bg-primary hover:bg-primary-600">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="mb-4">
              <Logo size="large" color="primary" />
            </div>
            <p className="text-gray-600 mb-4">
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
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-primary hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, i) => (
            <div key={i}>
              <h4 className="font-semibold mb-4 text-gray-900">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-primary flex items-center group"
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
        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Ledgerly. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="/terms" className="hover:text-primary">
                Terms
              </a>
              <a href="/privacy" className="hover:text-primary">
                Privacy
              </a>
              <a href="/cookies" className="hover:text-primary">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
