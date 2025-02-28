import React from "react";

export default function ModernAccounting() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white">
      <main className="pt-20 px-4">
        <article className="max-w-3xl mx-auto py-16">
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop"
            alt="Modern Accounting"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          <time className="text-sm text-gray-500">2024-02-15</time>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
            Understanding Modern Accounting Practices
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-600 mb-8">
              Explore the latest trends in accounting and how they can benefit
              your business.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              The Evolution of Accounting
            </h2>
            <p>
              Modern accounting has evolved significantly with the advent of
              technology. Cloud-based solutions, automation, and artificial
              intelligence are revolutionizing how businesses manage their
              finances.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Key Benefits of Modern Accounting
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Real-time financial insights</li>
              <li>Automated reconciliation</li>
              <li>Enhanced accuracy and reduced errors</li>
              <li>Improved compliance and reporting</li>
              <li>Better decision-making capabilities</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Implementation Strategies
            </h2>
            <p>
              Implementing modern accounting practices requires a strategic
              approach. Start by assessing your current processes, identifying
              pain points, and selecting the right tools for your business
              needs.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
