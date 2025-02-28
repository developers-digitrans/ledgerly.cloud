import React from "react";
import {
  FileText,
  BarChart2,
  Package2,
  Users2,
  Receipt,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col items-start bg-white p-6 rounded-lg shadow-auth0 border border-gray-100 hover:shadow-auth0-md transition-all"
    >
      <div className="mb-4 p-3 bg-primary-50 rounded-lg">
        {React.cloneElement(icon as React.ReactElement, {
          className: "w-6 h-6 text-primary",
        })}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default function FeaturesSection() {
  const features = [
    {
      icon: <FileText />,
      title: "Sales & Purchases Invoicing",
      description:
        "Create your sell invoices with your customers or purchase invoices with the vendors, manage recurring invoices and easily track customers/vendors payments.",
    },
    {
      icon: <BarChart2 />,
      title: "Financial Reports",
      description:
        "You do not have to wait to end of month to generate business reports. Ledgerly has financial reports to run your business with intelligence.",
    },
    {
      icon: <Package2 />,
      title: "Inventory",
      description:
        "Easily track your inventory items, and when you buy or sell for an item the stock amount will be automatically incremented or decremented with smart inventory reports.",
    },
    {
      icon: <Users2 />,
      title: "Accountants & Bookkeepers",
      description:
        "The software should facilitate collaboration with your accountant, Ledgerly allows to invite users to your organization with role-based permissions.",
    },
    {
      icon: <Receipt />,
      title: "Expense Accounting",
      description:
        "The software gives you a single place to track all business expenses from employee payroll to office renting and categorize them into accounts and bill them to your customers.",
    },
    {
      icon: <DollarSign />,
      title: "Multi-currency Accounting",
      description:
        "Pay and get paid and do manual journals in any currency with real time exchange rates conversions.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-50 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-50 rounded-full filter blur-3xl opacity-50"></div>

      <div className="container-auth0 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Transform Your Financial Management
          </h2>
          <p className="text-xl text-gray-600">
            Our platform centralizes your data, automates processes, and
            delivers strategic insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/features" className="group inline-flex">
            <Button className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-md text-lg flex items-center gap-2">
              Explore all features
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
