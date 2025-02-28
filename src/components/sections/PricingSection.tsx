import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, CheckCircle2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabase";
import SubscriptionModal from "@/components/modals/SubscriptionModal";
import { motion } from "framer-motion";

interface PricingTierProps {
  name: string;
  price: string;
  numericPrice: number;
  description: string;
  features: string[];
  isHighlighted?: boolean;
  onGetStarted: () => void;
}

const PricingTier = ({
  name,
  price,
  description,
  features,
  isHighlighted = false,
  onGetStarted,
}: PricingTierProps) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`relative rounded-lg border ${isHighlighted ? "border-primary" : "border-gray-200"} bg-white p-6 shadow-auth0 hover:shadow-auth0-md transition-all`}
  >
    {isHighlighted && (
      <div className="absolute -top-3 left-0 right-0 flex justify-center">
        <div className="bg-primary-100 text-primary text-sm font-medium px-4 py-1 rounded-full">
          MOST POPULAR
        </div>
      </div>
    )}
    <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
    <p className="text-gray-600 text-sm mt-2 h-12">{description}</p>
    <div className="mt-4">
      <span className="text-3xl font-bold text-gray-900">{price}</span>
      <span className="text-gray-500 text-sm ml-1">per month</span>
    </div>
    <Button
      className={`w-full mt-6 ${isHighlighted ? "bg-primary hover:bg-primary-600" : "bg-white hover:bg-gray-50 text-gray-900 border border-gray-200"}`}
      onClick={onGetStarted}
    >
      {isHighlighted ? "Start free trial" : "Get started"}
    </Button>
    <ul className="mt-6 space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-2">
          <CheckCircle2
            className={`h-5 w-5 ${isHighlighted ? "text-primary" : "text-gray-400"} mt-0.5 flex-shrink-0`}
          />
          <span className="text-sm text-gray-700">{feature}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  const navigate = useNavigate();

  const [selectedPackage, setSelectedPackage] = useState<{
    name: string;
    priceId: string;
  } | null>(null);

  const handleGetStarted = async (packageName: string) => {
    const priceIds: Record<string, string> = {
      "Ledgerly Basic": import.meta.env.VITE_STRIPE_BASIC_PRICE_ID,
      "Ledgerly Pro": import.meta.env.VITE_STRIPE_PRO_PRICE_ID,
      "Ledgerly Pro Plus": import.meta.env.VITE_STRIPE_PRO_PLUS_PRICE_ID,
      "Ledgerly Enterprise": import.meta.env.VITE_STRIPE_ENTERPRISE_PRICE_ID,
    };

    const priceId = priceIds[packageName];
    if (!priceId)
      throw new Error(`No price ID found for package: ${packageName}`);

    setSelectedPackage({ name: packageName, priceId });
  };

  const tiers = [
    {
      name: "Ledgerly Basic",
      price: isAnnual ? "$14" : "$19",
      numericPrice: isAnnual ? 14 : 19,
      description: "For businesses just starting out with financial management",
      features: [
        "Unlimited Sale Invoices",
        "Unlimited Sale Estimates",
        "Track GST and VAT",
        "Connect Banks for Automatic Importing",
        "Chart of Accounts",
        "Manual Journals",
        "Basic Financial Reports & Insights",
        "Unlimited User Seats",
      ],
    },
    {
      name: "Ledgerly Pro",
      price: isAnnual ? "$29" : "$39",
      numericPrice: isAnnual ? 29 : 39,
      description: "For growing businesses with inventory management needs",
      features: [
        "All Ledgerly Basic features",
        "Purchase Invoices",
        "Multi Currency Transactions",
        "Transactions Locking",
        "Inventory Tracking",
        "Smart Financial Reports",
        "Advanced Inventory Reports",
      ],
      isHighlighted: true,
    },
    {
      name: "Ledgerly Pro Plus",
      price: isAnnual ? "$41" : "$55",
      numericPrice: isAnnual ? 41 : 55,
      description: "For businesses needing advanced financial controls",
      features: [
        "All Ledgerly Essential features",
        "Custom User Roles Access",
        "Vendor Credits",
        "Budgeting",
        "Analysis Cost Center",
      ],
    },
    {
      name: "Ledgerly Enterprise",
      price: isAnnual ? "$44" : "$59",
      numericPrice: isAnnual ? 44 : 59,
      description: "For scaling businesses with multiple locations",
      features: [
        "All Ledgerly Pro Plus features",
        "Multiple Branches",
        "Multiple Warehouses",
      ],
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
            Choose the Perfect Plan for Your Business
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Transparent pricing with no hidden fees. All plans include our core
            features with premium options for growing businesses.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Check className="h-5 w-5 text-primary" />
              14-day free trial
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Check className="h-5 w-5 text-primary" />
              No credit card required
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Check className="h-5 w-5 text-primary" />
              24/7 online support
            </div>
          </div>

          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gray-100 mb-8">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!isAnnual ? "bg-white shadow-sm text-gray-900" : "text-gray-600"}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isAnnual ? "bg-white shadow-sm text-gray-900" : "text-gray-600"}`}
              onClick={() => setIsAnnual(true)}
            >
              Annually
              <span className="ml-1 text-xs text-primary font-normal">
                Save 25%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {selectedPackage && (
            <SubscriptionModal
              isOpen={true}
              onClose={() => setSelectedPackage(null)}
              packageName={selectedPackage.name}
              priceId={selectedPackage.priceId}
            />
          )}

          {tiers.map((tier, index) => (
            <PricingTier
              key={index}
              {...tier}
              onGetStarted={() => handleGetStarted(tier.name)}
            />
          ))}
        </div>

        <div className="mt-16 p-8 bg-white rounded-lg shadow-auth0 border border-gray-100 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Enterprise-grade security
              </h3>
              <p className="text-gray-600 mb-4">
                All plans include bank-level security, data encryption, and
                compliance with industry standards.
              </p>
              <Button
                variant="outline"
                className="text-primary border-primary hover:bg-primary-50"
              >
                Learn about our security
              </Button>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          * All annual plans come with a 30-day money-back guarantee, no
          questions asked.
        </p>
      </div>
    </section>
  );
}
