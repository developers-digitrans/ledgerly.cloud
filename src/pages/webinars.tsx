import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, User, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WebinarCardProps {
  title: string;
  description: string;
  date: string;
  duration: string;
  presenter: string;
  presenterTitle: string;
  videoId: string;
  isUpcoming?: boolean;
  registrationLink?: string;
}

const WebinarCard: React.FC<WebinarCardProps> = ({
  title,
  description,
  date,
  duration,
  presenter,
  presenterTitle,
  videoId,
  isUpcoming = false,
  registrationLink,
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-auth0 border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-auth0-md transition-all">
    {isUpcoming ? (
      <div className="h-48 bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center">
        <div className="text-center">
          <span className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-2">
            Upcoming
          </span>
          <p className="text-gray-700 dark:text-gray-300 font-medium">{date}</p>
        </div>
      </div>
    ) : (
      <div className="relative h-48 bg-gray-200 dark:bg-gray-700">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    )}
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
        {description}
      </p>

      <div className="flex flex-wrap gap-4 mb-4">
        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="h-4 w-4" />
          <span>{date}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
          <Clock className="h-4 w-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
          <User className="h-4 w-4" />
          <span>
            {presenter}, {presenterTitle}
          </span>
        </div>
      </div>

      {isUpcoming ? (
        <a href={registrationLink} target="_blank" rel="noopener noreferrer">
          <Button className="w-full bg-primary hover:bg-primary-600 text-white">
            Register Now
          </Button>
        </a>
      ) : (
        <a
          href={`https://www.youtube.com/watch?v=${videoId}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="outline"
            className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-center gap-2"
          >
            Watch Full Webinar
            <ExternalLink size={16} />
          </Button>
        </a>
      )}
    </div>
  </div>
);

export default function Webinars() {
  const upcomingWebinars: WebinarCardProps[] = [
    {
      title: "Mastering Financial Forecasting for Growth",
      description:
        "Learn advanced techniques for financial forecasting that can help your business plan for sustainable growth and navigate market uncertainties.",
      date: "June 15, 2024",
      duration: "60 minutes",
      presenter: "Michael Chen",
      presenterTitle: "CFO, Ledgerly",
      videoId: "",
      isUpcoming: true,
      registrationLink: "https://webinar.ledgerly.com/financial-forecasting",
    },
    {
      title: "Tax Planning Strategies for Small Businesses",
      description:
        "Discover effective tax planning strategies specifically designed for small businesses to minimize tax liability and maximize deductions.",
      date: "June 22, 2024",
      duration: "45 minutes",
      presenter: "Jennifer Williams",
      presenterTitle: "Tax Director, Ledgerly",
      videoId: "",
      isUpcoming: true,
      registrationLink: "https://webinar.ledgerly.com/tax-planning",
    },
  ];

  const pastWebinars: WebinarCardProps[] = [
    {
      title: "Automating Financial Workflows with Ledgerly",
      description:
        "Discover how to automate your financial workflows using Ledgerly's powerful automation features to save time and reduce errors.",
      date: "May 10, 2024",
      duration: "45 minutes",
      presenter: "David Johnson",
      presenterTitle: "Product Manager, Ledgerly",
      videoId: "4mXBPRLhaQ4",
    },
    {
      title: "Mastering Cash Flow Management",
      description:
        "Learn effective strategies for managing your business cash flow, forecasting future cash positions, and avoiding common cash flow pitfalls.",
      date: "April 25, 2024",
      duration: "60 minutes",
      presenter: "Sarah Thompson",
      presenterTitle: "Financial Advisor, Ledgerly",
      videoId: "4mXBPRLhaQ4",
    },
    {
      title: "Financial Reporting Best Practices",
      description:
        "Explore best practices for creating clear, insightful financial reports that drive better business decisions and satisfy stakeholder requirements.",
      date: "April 12, 2024",
      duration: "50 minutes",
      presenter: "Robert Garcia",
      presenterTitle: "Controller, Ledgerly",
      videoId: "4mXBPRLhaQ4",
    },
    {
      title: "Multi-Currency Accounting Simplified",
      description:
        "Navigate the complexities of multi-currency accounting with Ledgerly's powerful features designed for global businesses.",
      date: "March 28, 2024",
      duration: "45 minutes",
      presenter: "Emily Chen",
      presenterTitle: "International Finance Specialist, Ledgerly",
      videoId: "4mXBPRLhaQ4",
    },
    {
      title: "Year-End Closing Procedures",
      description:
        "A comprehensive guide to streamlining your year-end closing procedures, ensuring accuracy, and preparing for the new fiscal year.",
      date: "March 15, 2024",
      duration: "60 minutes",
      presenter: "Thomas Wilson",
      presenterTitle: "Accounting Manager, Ledgerly",
      videoId: "4mXBPRLhaQ4",
    },
    {
      title: "Integrating Ledgerly with Your Tech Stack",
      description:
        "Learn how to seamlessly integrate Ledgerly with your existing technology stack to create a unified financial ecosystem for your business.",
      date: "February 28, 2024",
      duration: "50 minutes",
      presenter: "Alex Rodriguez",
      presenterTitle: "Integration Specialist, Ledgerly",
      videoId: "4mXBPRLhaQ4",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="pt-20 px-4">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-primary-50 dark:bg-gray-800 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-100 dark:bg-primary-900/30 rounded-full filter blur-3xl opacity-50"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-100 dark:bg-primary-900/30 rounded-full filter blur-3xl opacity-50"></div>

          <div className="container-auth0 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Webinars & Educational Resources
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Join our expert-led webinars to enhance your financial knowledge
                and make the most of Ledgerly
              </p>
              <Link to="#upcoming">
                <Button className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-md">
                  View Upcoming Webinars
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Upcoming Webinars */}
        <section id="upcoming" className="py-16 bg-white dark:bg-gray-900">
          <div className="container-auth0">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Upcoming Webinars
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingWebinars.map((webinar, index) => (
                <WebinarCard key={index} {...webinar} />
              ))}

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg border border-dashed border-gray-300 dark:border-gray-700 p-6 flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Want to suggest a topic?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  We're always looking for new webinar ideas. Let us know what
                  topics you'd like us to cover.
                </p>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="border-gray-300 dark:border-gray-600"
                  >
                    Suggest a Topic
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Past Webinars */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container-auth0">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Past Webinars
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastWebinars.map((webinar, index) => (
                <WebinarCard key={index} {...webinar} />
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container-auth0">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Never Miss a Webinar
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Subscribe to our newsletter to get notified about upcoming
                webinars and receive recordings of past events.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                />
                <Button className="bg-primary hover:bg-primary-600 text-white whitespace-nowrap">
                  Subscribe
                </Button>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
                By subscribing, you agree to receive marketing emails from
                Ledgerly. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
