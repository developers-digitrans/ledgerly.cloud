import React from "react";
import { Link } from "react-router-dom";
import { Shield, Lock, CheckCircle, Server, FileText } from "lucide-react";

export default function Security() {
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
                Enterprise-Grade Security & Compliance
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Protecting your financial data with industry-leading security
                measures and compliance standards
              </p>
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container-auth0">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                How We Protect Your Data
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
                At Ledgerly, we implement multiple layers of security to ensure
                your financial data remains protected at all times.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Lock />,
                  title: "Bank-Level Encryption",
                  description:
                    "We use AES-256 encryption, the same standard adopted by leading financial institutions worldwide, to protect your data both in transit and at rest.",
                },
                {
                  icon: <Server />,
                  title: "Secure Cloud Infrastructure",
                  description:
                    "Our platform is hosted on AWS with SOC 1, 2, and 3 compliance, featuring redundant systems and regular security audits.",
                },
                {
                  icon: <Shield />,
                  title: "Multi-Factor Authentication",
                  description:
                    "Add an extra layer of security to your account with our multi-factor authentication options, preventing unauthorized access.",
                },
                {
                  icon: <FileText />,
                  title: "Regular Security Audits",
                  description:
                    "We conduct regular penetration testing and vulnerability assessments to identify and address potential security issues.",
                },
                {
                  icon: <CheckCircle />,
                  title: "Role-Based Access Control",
                  description:
                    "Define precise permissions for each team member, ensuring they only access the data they need to perform their job.",
                },
                {
                  icon: <Shield />,
                  title: "Data Backup & Recovery",
                  description:
                    "Automated backups and disaster recovery procedures ensure your data is never lost and can be quickly restored if needed.",
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

        {/* Compliance Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container-auth0">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Compliance Standards
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
                Ledgerly adheres to international compliance standards to ensure
                your financial data is handled according to industry best
                practices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "GDPR Compliance",
                  description:
                    "We comply with the General Data Protection Regulation, giving you control over your personal data and ensuring transparency in how we process it.",
                },
                {
                  title: "SOC 2 Type II",
                  description:
                    "Our platform has successfully completed SOC 2 Type II audits, verifying our security, availability, and confidentiality controls.",
                },
                {
                  title: "ISO 27001",
                  description:
                    "We follow ISO 27001 standards for information security management, ensuring systematic protection of your sensitive data.",
                },
                {
                  title: "PCI DSS",
                  description:
                    "For payment processing, we adhere to Payment Card Industry Data Security Standards to protect cardholder data.",
                },
              ].map((standard, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-auth0 border border-gray-100 dark:border-gray-600"
                >
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {standard.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {standard.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accounting Best Practices */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container-auth0">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Accounting & Finance Best Practices
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
                Our platform is designed to help you implement accounting and
                finance best practices, ensuring accuracy and compliance.
              </p>
            </div>

            <div className="space-y-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Audit Trails",
                  description:
                    "Every transaction and change in Ledgerly is recorded with a detailed audit trail, allowing you to track who did what and when.",
                },
                {
                  title: "Segregation of Duties",
                  description:
                    "Our role-based access control allows you to implement proper segregation of duties, a critical control for preventing fraud and errors.",
                },
                {
                  title: "Automated Reconciliation",
                  description:
                    "Reduce errors and save time with automated bank reconciliation features that ensure your books match your bank statements.",
                },
                {
                  title: "Compliance Reporting",
                  description:
                    "Generate reports that comply with local and international accounting standards, making tax time and audits much simpler.",
                },
                {
                  title: "Data Integrity Controls",
                  description:
                    "Built-in validation rules and controls help prevent common accounting errors and ensure data integrity across your financial records.",
                },
              ].map((practice, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-primary dark:text-primary-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {practice.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {practice.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary-50 dark:bg-gray-800">
          <div className="container-auth0">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to secure your financial data?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Start using Ledgerly today and experience enterprise-grade
                security for your financial operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/pricing">
                  <button className="bg-primary hover:bg-primary-600 text-white px-8 py-3 rounded-md text-lg font-medium">
                    Start Free Trial
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 px-8 py-3 rounded-md text-lg font-medium">
                    Contact Sales
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
