import React from "react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Understanding Modern Accounting Practices",
    excerpt:
      "Explore the latest trends in accounting and how they can benefit your business.",
    date: "2024-02-15",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Maximizing Financial Efficiency",
    excerpt:
      "Learn how to optimize your financial operations and reduce costs.",
    date: "2024-02-10",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "The Future of Financial Technology",
    excerpt:
      "Discover how emerging technologies are shaping the future of finance.",
    date: "2024-02-05",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Blog() {
  return (
    <main className="pt-20 px-4 max-w-7xl mx-auto">
      <div className="py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Latest Updates
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-[#0A192F] border border-blue-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h2 className="text-xl font-semibold mt-2 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <Link
                  to={
                    post.title === "Understanding Modern Accounting Practices"
                      ? "/blog/modern-accounting"
                      : post.title === "Maximizing Financial Efficiency"
                        ? "/blog/financial-efficiency"
                        : "/blog/future-fintech"
                  }
                  className="inline-block mt-4 text-blue-600 hover:text-blue-800"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
