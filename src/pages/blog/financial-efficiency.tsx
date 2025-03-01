import React from "react";
import { useTranslation } from "react-i18next";

export default function FinancialEfficiency() {
  const { t, i18n } = useTranslation();
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <main className="pt-20 px-4">
        <article className="max-w-3xl mx-auto py-16">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
            alt="Financial Efficiency"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          <time className="text-sm text-gray-500 dark:text-gray-400">
            2024-02-10
          </time>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
            {i18n.language === "ar"
              ? "تعظيم الكفاءة المالية"
              : i18n.language === "fr"
                ? "Maximiser l'Efficacité Financière"
                : i18n.language === "es"
                  ? "Maximizando la Eficiencia Financiera"
                  : "Maximizing Financial Efficiency"}
          </h1>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              {i18n.language === "ar"
                ? "تعلم كيفية تحسين عملياتك المالية وتقليل التكاليف."
                : i18n.language === "fr"
                  ? "Apprenez à optimiser vos opérations financières et à réduire les coûts."
                  : i18n.language === "es"
                    ? "Aprenda cómo optimizar sus operaciones financieras y reducir costos."
                    : "Learn how to optimize your financial operations and reduce costs."}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              {i18n.language === "ar"
                ? "تبسيط العمليات المالية"
                : i18n.language === "fr"
                  ? "Rationalisation des Opérations Financières"
                  : i18n.language === "es"
                    ? "Optimización de Operaciones Financieras"
                    : "Streamlining Financial Operations"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Efficient financial operations are crucial for business success.
              By implementing the right processes and tools, organizations can
              significantly improve their financial performance.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              {i18n.language === "ar"
                ? "استراتيجيات خفض التكاليف"
                : i18n.language === "fr"
                  ? "Stratégies de Réduction des Coûts"
                  : i18n.language === "es"
                    ? "Estrategias de Reducción de Costos"
                    : "Cost Reduction Strategies"}
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Automation of routine tasks</li>
              <li>Optimized resource allocation</li>
              <li>Smart expense management</li>
              <li>Improved cash flow management</li>
              <li>Strategic vendor relationships</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              {i18n.language === "ar"
                ? "قياس النجاح"
                : i18n.language === "fr"
                  ? "Mesurer le Succès"
                  : i18n.language === "es"
                    ? "Midiendo el Éxito"
                    : "Measuring Success"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Track key performance indicators (KPIs) to measure the success of
              your financial efficiency initiatives and make data-driven
              decisions for continuous improvement.
            </p>
          </div>
        </article>
      </main>
    </div>
  );
}
