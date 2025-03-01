import React from "react";
import { Link } from "react-router-dom";
import { Shield, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Compliance() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="pt-20 px-4">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-primary-50 dark:bg-gray-800 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-100 dark:bg-primary-900/30 rounded-full filter blur-3xl opacity-50"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-100 dark:bg-primary-900/30 rounded-full filter blur-3xl opacity-50"></div>

          <div className="container-auth0 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-2 bg-primary-100 dark:bg-primary-900/50 rounded-full mb-4">
                <Shield className="h-6 w-6 text-primary dark:text-primary-300" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Compliance & Regulatory Standards
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Ledgerly is built to help your business meet financial
                compliance requirements
              </p>
            </div>
          </div>
        </section>

        {/* Compliance Overview */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container-auth0">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Our Compliance Framework
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
                Ledgerly is designed with compliance at its core, helping
                businesses meet regulatory requirements while streamlining
                financial operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield />,
                  title: "Data Protection",
                  description:
                    "GDPR, CCPA, and other data protection regulations compliance to protect personal and financial information.",
                },
                {
                  icon: <FileText />,
                  title: "Financial Reporting",
                  description:
                    "Tools and features that help you comply with GAAP, IFRS, and local accounting standards for accurate financial reporting.",
                },
                {
                  icon: <CheckCircle />,
                  title: "Audit Readiness",
                  description:
                    "Comprehensive audit trails, document management, and reporting capabilities to ensure you're always audit-ready.",
                },
                {
                  icon: <Shield />,
                  title: "Tax Compliance",
                  description:
                    "Built-in tax calculation and reporting features to help you stay compliant with tax regulations across multiple jurisdictions.",
                },
                {
                  icon: <FileText />,
                  title: "Industry-Specific Compliance",
                  description:
                    "Specialized features for industries with unique regulatory requirements, such as healthcare, financial services, and more.",
                },
                {
                  icon: <CheckCircle />,
                  title: "Continuous Updates",
                  description:
                    "Regular platform updates to keep pace with changing regulations and compliance requirements.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-auth0 border border-gray-100 dark:border-gray-700"
                >
                  <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg inline-flex mb-4">
                    {React.cloneElement(feature.icon, {
                      className: "h-6 w-6 text-primary dark:text-primary-300",
                    })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container-auth0">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Our Certifications & Compliance
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
                Ledgerly maintains the following certifications and compliance
                standards to ensure your data is secure and properly managed.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "SOC 2 Type II",
                  description: "Service Organization Control",
                },
                {
                  title: "GDPR",
                  description: "General Data Protection Regulation",
                },
                {
                  title: "ISO 27001",
                  description: "Information Security Management",
                },
                {
                  title: "HIPAA",
                  description:
                    "Health Insurance Portability and Accountability Act",
                },
                {
                  title: "PCI DSS",
                  description: "Payment Card Industry Data Security Standard",
                },
                {
                  title: "CCPA",
                  description: "California Consumer Privacy Act",
                },
                {
                  title: "FINRA",
                  description: "Financial Industry Regulatory Authority",
                },
                {
                  title: "IFRS",
                  description: "International Financial Reporting Standards",
                },
              ].map((cert, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-auth0 border border-gray-100 dark:border-gray-600 text-center"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Features */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container-auth0">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Compliance Features
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
                Ledgerly includes powerful features to help your business
                maintain compliance with financial regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Audit Trails",
                  description:
                    "Comprehensive logs of all system activities, including who made changes, what was changed, and when.",
                },
                {
                  title: "Role-Based Access Control",
                  description:
                    "Granular permission settings to ensure users only have access to the data they need.",
                },
                {
                  title: "Automated Backups",
                  description:
                    "Regular, secure backups of all your financial data to prevent loss and ensure business continuity.",
                },
                {
                  title: "Compliance Reporting",
                  description:
                    "Pre-built reports designed to meet common regulatory requirements and simplify compliance reporting.",
                },
                {
                  title: "Document Management",
                  description:
                    "Secure storage and organization of financial documents with version control and audit trails.",
                },
                {
                  title: "Data Retention Policies",
                  description:
                    "Configurable data retention settings to comply with industry-specific regulations.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-auth0 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-primary dark:text-primary-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Resources */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container-auth0">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Compliance Resources
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
                Access our library of compliance resources to help your business
                stay up-to-date with regulatory requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Compliance Guides",
                  description:
                    "Detailed guides on how to use Ledgerly to meet specific compliance requirements.",
                  link: "/resources/compliance-guides",
                },
                {
                  title: "Regulatory Updates",
                  description:
                    "Stay informed about changes to financial regulations that may affect your business.",
                  link: "/resources/regulatory-updates",
                },
                {
                  title: "Compliance Webinars",
                  description:
                    "Educational webinars featuring compliance experts and best practices.",
                  link: "/webinars",
                },
              ].map((resource, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-auth0 border border-gray-100 dark:border-gray-600"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {resource.description}
                  </p>
                  <Link to={resource.link}>
                    <Button
                      variant="outline"
                      className="text-primary border-primary hover:bg-primary-50 dark:border-primary-400 dark:hover:bg-primary-900/20"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-50 dark:bg-gray-700">
          <div className="container-auth0">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to simplify compliance?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Start using Ledgerly today and take the stress out of financial
                compliance.
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
                    className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 px-8 py-3 rounded-md text-lg font-medium"
                  >
                    Contact Sales
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
