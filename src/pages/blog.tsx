import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <main className="pt-20 px-4 max-w-7xl mx-auto">
        <div className="py-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {i18n.language === "ar"
              ? "آخر التحديثات"
              : i18n.language === "fr"
                ? "Dernières Mises à Jour"
                : i18n.language === "es"
                  ? "Últimas Actualizaciones"
                  : "Latest Updates"}
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </time>
                  <h2 className="text-xl font-semibold mt-2 mb-3 text-gray-900 dark:text-white">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300">
                    {post.excerpt}
                  </p>
                  <Link
                    to={
                      post.title === "Understanding Modern Accounting Practices"
                        ? "/blog/modern-accounting"
                        : post.title === "Maximizing Financial Efficiency"
                          ? "/blog/financial-efficiency"
                          : "/blog/future-fintech"
                    }
                    className="inline-block mt-4 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    {i18n.language === "ar"
                      ? "اقرأ المزيد ←"
                      : i18n.language === "fr"
                        ? "Lire la suite →"
                        : i18n.language === "es"
                          ? "Leer más →"
                          : "Read more →"}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
