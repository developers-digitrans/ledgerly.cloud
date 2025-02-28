import React from "react";

export default function FutureFintech() {
  return (
    <div className="min-h-screen bg-[#0A192F] text-white">
      <main className="pt-20 px-4">
        <article className="max-w-3xl mx-auto py-16">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
            alt="Future of Fintech"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          <time className="text-sm text-gray-500">2024-02-05</time>
          <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-6">
            The Future of Financial Technology
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-gray-600 mb-8">
              Discover how emerging technologies are shaping the future of
              finance.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Emerging Technologies
            </h2>
            <p>
              The financial technology landscape is rapidly evolving with
              blockchain, AI, and machine learning leading the way in
              innovation.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Key Trends</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Artificial Intelligence in Finance</li>
              <li>Blockchain and Cryptocurrencies</li>
              <li>Open Banking</li>
              <li>RegTech Solutions</li>
              <li>Embedded Finance</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Preparing for the Future
            </h2>
            <p>
              Organizations need to stay ahead of technological advancements and
              adapt their strategies to remain competitive in the evolving
              financial landscape.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
