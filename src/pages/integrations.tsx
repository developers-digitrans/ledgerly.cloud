import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface IntegrationCardProps {
  name: string;
  description: string;
  category: string;
  logo: string;
  link: string;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({
  name,
  description,
  category,
  logo,
  link,
}) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-auth0 border border-gray-100 dark:border-gray-700 p-6 hover:shadow-auth0-md transition-all">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
        <img src={logo} alt={`${name} logo`} className="w-8 h-8" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {name}
        </h3>
        <span className="text-xs px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary dark:text-primary-300 rounded-full">
          {category}
        </span>
      </div>
    </div>
    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
      {description}
    </p>
    <Link
      to={link}
      className="text-primary dark:text-primary-300 text-sm font-medium flex items-center gap-1 hover:underline"
    >
      Learn more <ArrowRight size={14} />
    </Link>
  </div>
);

export default function Integrations() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(
    null,
  );

  const categories = [
    "All",
    "Accounting",
    "Banking",
    "CRM",
    "E-commerce",
    "Payments",
    "Payroll",
    "Tax",
  ];

  const integrations: IntegrationCardProps[] = [
    {
      name: "QuickBooks",
      description:
        "Sync your QuickBooks data with Ledgerly for seamless financial management.",
      category: "Accounting",
      logo: "https://placehold.co/200x200/4285F4/FFFFFF/png?text=QB",
      link: "/integrations/quickbooks",
    },
    {
      name: "Xero",
      description:
        "Connect your Xero account to import transactions and streamline your accounting.",
      category: "Accounting",
      logo: "https://placehold.co/200x200/13B5EA/FFFFFF/png?text=Xero",
      link: "/integrations/xero",
    },
    {
      name: "Stripe",
      description:
        "Process payments and automatically sync transaction data with Ledgerly.",
      category: "Payments",
      logo: "https://placehold.co/200x200/635BFF/FFFFFF/png?text=Stripe",
      link: "/integrations/stripe",
    },
    {
      name: "PayPal",
      description:
        "Connect your PayPal account to automatically import transactions.",
      category: "Payments",
      logo: "https://placehold.co/200x200/003087/FFFFFF/png?text=PayPal",
      link: "/integrations/paypal",
    },
    {
      name: "Salesforce",
      description:
        "Integrate your CRM data with Ledgerly for a complete view of your business.",
      category: "CRM",
      logo: "https://placehold.co/200x200/00A1E0/FFFFFF/png?text=SF",
      link: "/integrations/salesforce",
    },
    {
      name: "HubSpot",
      description:
        "Connect HubSpot to sync customer data and streamline your sales process.",
      category: "CRM",
      logo: "https://placehold.co/200x200/FF7A59/FFFFFF/png?text=HS",
      link: "/integrations/hubspot",
    },
    {
      name: "Shopify",
      description:
        "Import your Shopify store data to automatically track sales and inventory.",
      category: "E-commerce",
      logo: "https://placehold.co/200x200/7AB55C/FFFFFF/png?text=Shopify",
      link: "/integrations/shopify",
    },
    {
      name: "WooCommerce",
      description:
        "Connect your WooCommerce store to track sales and manage inventory.",
      category: "E-commerce",
      logo: "https://placehold.co/200x200/96588A/FFFFFF/png?text=Woo",
      link: "/integrations/woocommerce",
    },
    {
      name: "Bank of America",
      description:
        "Connect your Bank of America accounts for automatic transaction imports.",
      category: "Banking",
      logo: "https://placehold.co/200x200/012169/FFFFFF/png?text=BoA",
      link: "/integrations/bank-of-america",
    },
    {
      name: "Chase",
      description:
        "Import transactions from your Chase accounts automatically.",
      category: "Banking",
      logo: "https://placehold.co/200x200/117ACA/FFFFFF/png?text=Chase",
      link: "/integrations/chase",
    },
    {
      name: "ADP",
      description:
        "Sync your payroll data from ADP to streamline your accounting process.",
      category: "Payroll",
      logo: "https://placehold.co/200x200/D0271D/FFFFFF/png?text=ADP",
      link: "/integrations/adp",
    },
    {
      name: "Gusto",
      description:
        "Connect Gusto to automatically import payroll data into Ledgerly.",
      category: "Payroll",
      logo: "https://placehold.co/200x200/4BD6F2/FFFFFF/png?text=Gusto",
      link: "/integrations/gusto",
    },
    {
      name: "TurboTax",
      description:
        "Export your financial data to TurboTax for simplified tax preparation.",
      category: "Tax",
      logo: "https://placehold.co/200x200/365EBF/FFFFFF/png?text=TT",
      link: "/integrations/turbotax",
    },
    {
      name: "H&R Block",
      description:
        "Export your financial data to H&R Block for streamlined tax filing.",
      category: "Tax",
      logo: "https://placehold.co/200x200/008751/FFFFFF/png?text=HRB",
      link: "/integrations/hr-block",
    },
  ];

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesSearch =
      integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === null ||
      selectedCategory === "All" ||
      integration.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

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
                Integrations Marketplace
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Connect Ledgerly with your favorite tools and services to
                streamline your financial workflows
              </p>

              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search integrations..."
                  className="pl-10 py-3 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
          <div className="container-auth0">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === category || (category === "All" && selectedCategory === null) ? "bg-primary text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                  onClick={() =>
                    setSelectedCategory(category === "All" ? null : category)
                  }
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Grid */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container-auth0">
            {filteredIntegrations.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredIntegrations.map((integration, index) => (
                  <IntegrationCard key={index} {...integration} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No integrations found
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory(null);
                  }}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Request Integration */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container-auth0">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Don't see the integration you need?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We're constantly adding new integrations. Let us know what you
                need, and we'll prioritize it for you.
              </p>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-md">
                  Request an Integration
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Developer API */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container-auth0">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Build Your Own Integration
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Ledgerly offers a powerful API that allows you to build
                    custom integrations for your specific needs. Our
                    developer-friendly documentation makes it easy to get
                    started.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://docs.ledgerly.com/api"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-primary hover:bg-primary-600 text-white">
                        API Documentation
                      </Button>
                    </a>
                    <a
                      href="https://docs.ledgerly.com/api/examples"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        className="border-gray-300 dark:border-gray-600"
                      >
                        View Examples
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="md:w-1/2 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                  <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-x-auto">
                    <code>
                      {`// Example API request
const response = await fetch('https://api.ledgerly.com/v1/transactions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    amount: 100.00,
    description: 'Monthly subscription',
    category: 'Revenue',
    date: '2023-05-15'
  })
});`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
