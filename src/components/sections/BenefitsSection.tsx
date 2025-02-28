import React from "react";
import {
  BarChart3,
  Shield,
  Clock,
  DollarSign,
  Users,
  FileText,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Benefit = ({ icon, title, description }: BenefitProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 flex flex-col items-start bg-white rounded-lg shadow-auth0 border border-gray-100 hover:shadow-auth0-md transition-all"
    >
      <div className="p-3 rounded-lg bg-primary-50 mb-4">
        {React.cloneElement(icon as React.ReactElement, {
          className: "w-6 h-6 text-primary",
        })}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

interface BenefitsSectionProps {
  benefits?: Array<BenefitProps>;
}

const defaultBenefits = [
  {
    icon: <BarChart3 />,
    title: "Real-time Analytics",
    description:
      "Get instant insights into your financial performance with our advanced analytics dashboard",
  },
  {
    icon: <Shield />,
    title: "Secure Platform",
    description:
      "Bank-level security ensures your financial data is always protected",
  },
  {
    icon: <Clock />,
    title: "Time-Saving Automation",
    description:
      "Automate repetitive tasks and focus on what matters most to your business",
  },
  {
    icon: <DollarSign />,
    title: "Cost Management",
    description:
      "Optimize your spending and identify cost-saving opportunities effortlessly",
  },
  {
    icon: <Users />,
    title: "Team Collaboration",
    description: "Work seamlessly with your team and accountants in real-time",
  },
  {
    icon: <FileText />,
    title: "Compliance Ready",
    description: "Stay compliant with automated reporting and documentation",
  },
];

const BenefitsSection = ({
  benefits = defaultBenefits,
}: BenefitsSectionProps) => {
  return (
    <section className="py-24 bg-white">
      <div className="container-auth0">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-100 to-primary-50 rounded-xl blur-xl opacity-50"></div>
              <div className="relative bg-white rounded-xl shadow-auth0-lg overflow-hidden border border-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                  alt="Financial dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Choose Ledgerly
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Gain control of your finances with our powerful, intuitive
              platform designed for modern businesses
            </p>

            <div className="space-y-4">
              {benefits.slice(0, 4).map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary-50 flex-shrink-0">
                    {React.cloneElement(benefit.icon as React.ReactElement, {
                      className: "w-5 h-5 text-primary",
                    })}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Easy setup",
                "No credit card required",
                "24/7 support",
                "Free trial available",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.slice(0, 3).map((benefit, index) => (
            <Benefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
