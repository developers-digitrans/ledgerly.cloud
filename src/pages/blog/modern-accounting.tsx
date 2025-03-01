import React from "react";
import { useTranslation } from "react-i18next";

export default function ModernAccounting() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <main className="pt-20 px-4">
        <article className="max-w-3xl mx-auto py-16">
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop"
            alt="Modern Accounting"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          <time className="text-sm text-gray-500 dark:text-gray-400">
            2024-02-15
          </time>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
            {i18n.language === "ar"
              ? "فهم ممارسات المحاسبة الحديثة"
              : i18n.language === "fr"
                ? "Comprendre les Pratiques Comptables Modernes"
                : i18n.language === "es"
                  ? "Entendiendo las Prácticas Contables Modernas"
                  : "Understanding Modern Accounting Practices"}
          </h1>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              {i18n.language === "ar"
                ? "استكشف أحدث الاتجاهات في المحاسبة وكيف يمكن أن تفيد عملك."
                : i18n.language === "fr"
                  ? "Explorez les dernières tendances en comptabilité et comment elles peuvent bénéficier à votre entreprise."
                  : i18n.language === "es"
                    ? "Explore las últimas tendencias en contabilidad y cómo pueden beneficiar a su negocio."
                    : "Explore the latest trends in accounting and how they can benefit your business."}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              {i18n.language === "ar"
                ? "تطور المحاسبة"
                : i18n.language === "fr"
                  ? "L'Évolution de la Comptabilité"
                  : i18n.language === "es"
                    ? "La Evolución de la Contabilidad"
                    : "The Evolution of Accounting"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Modern accounting has evolved significantly with the advent of
              technology. Cloud-based solutions, automation, and artificial
              intelligence are revolutionizing how businesses manage their
              finances.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              {i18n.language === "ar"
                ? "الفوائد الرئيسية للمحاسبة الحديثة"
                : i18n.language === "fr"
                  ? "Avantages Clés de la Comptabilité Moderne"
                  : i18n.language === "es"
                    ? "Beneficios Clave de la Contabilidad Moderna"
                    : "Key Benefits of Modern Accounting"}
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Real-time financial insights</li>
              <li>Automated reconciliation</li>
              <li>Enhanced accuracy and reduced errors</li>
              <li>Improved compliance and reporting</li>
              <li>Better decision-making capabilities</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              {i18n.language === "ar"
                ? "استراتيجيات التنفيذ"
                : i18n.language === "fr"
                  ? "Stratégies de Mise en Œuvre"
                  : i18n.language === "es"
                    ? "Estrategias de Implementación"
                    : "Implementation Strategies"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
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
