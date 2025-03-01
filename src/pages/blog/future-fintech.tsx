import React from "react";
import { useTranslation } from "react-i18next";

export default function FutureFintech() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <main className="pt-20 px-4">
        <article className="max-w-3xl mx-auto py-16">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
            alt="Future of Fintech"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
          <time className="text-sm text-gray-500 dark:text-gray-400">
            2024-02-05
          </time>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-2 mb-6">
            {i18n.language === "ar"
              ? "مستقبل التكنولوجيا المالية"
              : i18n.language === "fr"
                ? "L'Avenir de la Technologie Financière"
                : i18n.language === "es"
                  ? "El Futuro de la Tecnología Financiera"
                  : "The Future of Financial Technology"}
          </h1>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <p className="lead text-xl text-gray-600 dark:text-gray-300 mb-8">
              {i18n.language === "ar"
                ? "اكتشف كيف تشكل التقنيات الناشئة مستقبل التمويل."
                : i18n.language === "fr"
                  ? "Découvrez comment les technologies émergentes façonnent l'avenir de la finance."
                  : i18n.language === "es"
                    ? "Descubra cómo las tecnologías emergentes están dando forma al futuro de las finanzas."
                    : "Discover how emerging technologies are shaping the future of finance."}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              {i18n.language === "ar"
                ? "التقنيات الناشئة"
                : i18n.language === "fr"
                  ? "Technologies Émergentes"
                  : i18n.language === "es"
                    ? "Tecnologías Emergentes"
                    : "Emerging Technologies"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              The financial technology landscape is rapidly evolving with
              blockchain, AI, and machine learning leading the way in
              innovation.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              {i18n.language === "ar"
                ? "الاتجاهات الرئيسية"
                : i18n.language === "fr"
                  ? "Tendances Clés"
                  : i18n.language === "es"
                    ? "Tendencias Clave"
                    : "Key Trends"}
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Artificial Intelligence in Finance</li>
              <li>Blockchain and Cryptocurrencies</li>
              <li>Open Banking</li>
              <li>RegTech Solutions</li>
              <li>Embedded Finance</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
              {i18n.language === "ar"
                ? "الاستعداد للمستقبل"
                : i18n.language === "fr"
                  ? "Se Préparer pour l'Avenir"
                  : i18n.language === "es"
                    ? "Preparándose para el Futuro"
                    : "Preparing for the Future"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
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
