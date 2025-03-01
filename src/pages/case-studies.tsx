import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface IntegrationCardProps {
  title: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  logo: string;
  image: string;
  slug: string;
}

const CaseStudyCard: React.FC<IntegrationCardProps> = ({
  title,
  company,
  industry,
  challenge,
  logo,
  image,
  slug,
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-auth0 border border-gray-100 dark:border-gray-700 overflow-hidden hover:shadow-auth0-md transition-all">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={company} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
          <img src={logo} alt={`${company} logo`} className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {company}
          </h3>
          <span className="text-xs px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary dark:text-primary-300 rounded-full">
            {industry}
          </span>
        </div>
      </div>
      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h4>
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
        {challenge}
      </p>
      <Link
        to={`/case-studies/${slug}`}
        className="text-primary dark:text-primary-300 font-medium flex items-center gap-1 hover:underline"
      >
        Read case study <ArrowRight size={16} />
      </Link>
    </div>
  </div>
);

export default function CaseStudies() {
  const caseStudies: IntegrationCardProps[] = [
    {
      title: "How TechStart Reduced Financial Close Time by 75%",
      company: "TechStart Inc.",
      industry: "Technology",
      challenge:
        "TechStart was struggling with manual financial processes that were time-consuming and error-prone. Their month-end close process took over 2 weeks, causing delays in financial reporting and decision-making.",
      solution:
        "Implemented Ledgerly's automated reconciliation and financial close features, along with custom workflows tailored to their specific needs.",
      results: [
        "Reduced month-end close time from 15 days to just 4 days",
        "Eliminated 90% of manual data entry errors",
        "Saved 30 hours per month in accounting staff time",
        "Improved financial visibility for faster decision-making",
      ],
      logo: "https://placehold.co/200x200/4285F4/FFFFFF/png?text=TS",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
      slug: "techstart-case-study",
    },
    {
      title: "Global Retail Chain Streamlines Multi-Currency Operations",
      company: "WorldWide Retail",
      industry: "Retail",
      challenge:
        "With operations in 12 countries, WorldWide Retail struggled to manage multiple currencies, different tax regulations, and consolidated financial reporting across their global locations.",
      solution:
        "Deployed Ledgerly's multi-currency features, automated tax calculations, and consolidated reporting tools to unify their global financial operations.",
      results: [
        "Consolidated financial data from 12 countries into a single dashboard",
        "Automated currency conversions saving 20 hours per week",
        "Reduced compliance risks with automated tax calculations",
        "Improved financial forecasting accuracy by 40%",
      ],
      logo: "https://placehold.co/200x200/DB4437/FFFFFF/png?text=WR",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
      slug: "worldwide-retail-case-study",
    },
    {
      title: "Healthcare Provider Achieves 99.9% Billing Accuracy",
      company: "MediCare Solutions",
      industry: "Healthcare",
      challenge:
        "MediCare Solutions was facing significant revenue leakage due to billing errors, compliance issues, and inefficient insurance claim processing, resulting in delayed payments and cash flow problems.",
      solution:
        "Implemented Ledgerly's healthcare-specific billing module with automated insurance verification, claim tracking, and compliance checks.",
      results: [
        "Improved billing accuracy from 92% to 99.9%",
        "Reduced claim rejection rate by 85%",
        "Accelerated payment collection by 15 days on average",
        "Increased annual revenue by $1.2 million through reduced leakage",
      ],
      logo: "https://placehold.co/200x200/0F9D58/FFFFFF/png?text=MC",
      image:
        "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=1200&auto=format&fit=crop",
      slug: "medicare-solutions-case-study",
    },
    {
      title: "Construction Firm Improves Project Profitability by 28%",
      company: "BuildRight Construction",
      industry: "Construction",
      challenge:
        "BuildRight struggled to track costs across multiple construction projects, leading to budget overruns, inaccurate project profitability analysis, and cash flow issues.",
      solution:
        "Deployed Ledgerly's project accounting features with real-time cost tracking, budget comparisons, and customized reporting for construction projects.",
      results: [
        "Increased average project profitability by 28%",
        "Reduced budget overruns by 65%",
        "Improved cash flow forecasting accuracy to within 5%",
        "Enabled real-time financial visibility across all projects",
      ],
      logo: "https://placehold.co/200x200/F4B400/FFFFFF/png?text=BR",
      image:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
      slug: "buildright-construction-case-study",
    },
    {
      title: "E-commerce Startup Scales Financial Operations 10x",
      company: "ShopEasy",
      industry: "E-commerce",
      challenge:
        "As ShopEasy grew from 100 to 10,000 orders per day, their financial systems couldn't scale, causing inventory discrepancies, tax compliance issues, and manual reconciliation nightmares.",
      solution:
        "Implemented Ledgerly's e-commerce integration, automated inventory valuation, and scalable transaction processing to support their rapid growth.",
      results: [
        "Successfully scaled from 100 to 10,000 daily transactions without adding finance staff",
        "Reduced inventory discrepancies by 95%",
        "Automated tax compliance across 30 states",
        "Cut monthly reconciliation time from 5 days to 2 hours",
      ],
      logo: "https://placehold.co/200x200/4285F4/FFFFFF/png?text=SE",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
      slug: "shopeasy-case-study",
    },
    {
      title: "Non-Profit Organization Enhances Donor Transparency",
      company: "Global Hope Foundation",
      industry: "Non-Profit",
      challenge:
        "Global Hope Foundation needed better financial transparency to build donor trust, track restricted funds, and demonstrate program effectiveness while managing complex grant requirements.",
      solution:
        "Deployed Ledgerly's non-profit accounting module with fund accounting, grant management, and donor reporting features tailored to their needs.",
      results: [
        "Increased donor retention rate by 35%",
        "Improved restricted fund tracking accuracy to 100%",
        "Reduced grant reporting time by 60%",
        "Enhanced transparency led to 28% increase in donations",
      ],
      logo: "https://placehold.co/200x200/DB4437/FFFFFF/png?text=GH",
      image:
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=1200&auto=format&fit=crop",
      slug: "global-hope-foundation-case-study",
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
                Customer Success Stories
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Discover how businesses across industries are transforming their
                financial operations with Ledgerly
              </p>
            </div>
          </div>
        </section>

        {/* Featured Case Study */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container-auth0">
            <div className="bg-primary-50 dark:bg-gray-800 rounded-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-white dark:bg-gray-700 flex items-center justify-center">
                      <img
                        src="https://placehold.co/200x200/4285F4/FFFFFF/png?text=FS"
                        alt="FinServe logo"
                        className="w-8 h-8"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        FinServe Capital
                      </h3>
                      <span className="text-sm px-2 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary dark:text-primary-300 rounded-full">
                        Financial Services
                      </span>
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    How FinServe Capital Achieved 42% ROI with Ledgerly
                  </h2>

                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    FinServe Capital, a leading investment management firm, was
                    struggling with fragmented financial systems and manual
                    reporting processes. Learn how they transformed their
                    operations with Ledgerly's integrated platform.
                  </p>

                  <div className="mb-8">
                    <div className="flex items-start gap-2 mb-2">
                      <div className="w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mt-0.5">
                        <span className="text-primary dark:text-primary-300 text-xs font-bold">
                          ✓
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Reduced reporting time by 68%
                      </p>
                    </div>
                    <div className="flex items-start gap-2 mb-2">
                      <div className="w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mt-0.5">
                        <span className="text-primary dark:text-primary-300 text-xs font-bold">
                          ✓
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Improved data accuracy to 99.8%
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-5 h-5 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mt-0.5">
                        <span className="text-primary dark:text-primary-300 text-xs font-bold">
                          ✓
                        </span>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">
                        Achieved 42% ROI within first year
                      </p>
                    </div>
                  </div>

                  <Link to="/case-studies/finserve-capital">
                    <Button className="bg-primary hover:bg-primary-600 text-white w-full sm:w-auto">
                      Read Full Case Study
                    </Button>
                  </Link>
                </div>

                <div className="relative h-64 lg:h-auto">
                  <img
                    src="https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1200&auto=format&fit=crop"
                    alt="FinServe Capital team"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container-auth0">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-900/50 rounded-full mb-6">
                <Quote className="h-6 w-6 text-primary dark:text-primary-300" />
              </div>
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-8">
                "Ledgerly has completely transformed how we manage our finances.
                What used to take days now takes minutes, and the insights we've
                gained have been invaluable for our business growth."
              </blockquote>
              <div className="flex items-center justify-center">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-700 mr-4"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Sarah Johnson
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    CFO, TechStart Inc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container-auth0">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              More Success Stories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy, index) => (
                <CaseStudyCard key={index} {...caseStudy} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-50 dark:bg-gray-800">
          <div className="container-auth0">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to write your own success story?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Join thousands of businesses that have transformed their
                financial operations with Ledgerly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/pricing">
                  <Button className="bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-md text-lg font-medium">
                    Start Free Trial
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 px-8 py-3 rounded-md text-lg font-medium"
                  >
                    Request a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
