import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Check, CheckCircle2 } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useNavigate, Link } from "react-router-dom";
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
}: PricingTierProps) => {
  const { i18n } = useTranslation();
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative rounded-lg border ${isHighlighted ? "border-primary dark:border-primary-400" : "border-gray-200 dark:border-gray-700"} bg-white dark:bg-gray-800 p-6 shadow-auth0 hover:shadow-auth0-md transition-all`}
    >
      {isHighlighted && (
        <div className="absolute -top-3 left-0 right-0 flex justify-center">
          <div className="bg-primary-100 dark:bg-primary-900/50 text-primary dark:text-primary-300 text-sm font-medium px-4 py-1 rounded-full">
            {i18n.language === "ar"
              ? "الأكثر شعبية"
              : i18n.language === "fr"
                ? "LE PLUS POPULAIRE"
                : i18n.language === "es"
                  ? "MÁS POPULAR"
                  : "MOST POPULAR"}
          </div>
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm mt-2 h-12">
        {description}
      </p>
      <div className="mt-4">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">
          {price}
        </span>
        <span
          className={`text-gray-500 dark:text-gray-400 text-sm ${i18n.language === "ar" ? "mr-1" : "ml-1"}`}
        >
          {i18n.language === "ar"
            ? "شهريًا"
            : i18n.language === "fr"
              ? "par mois"
              : i18n.language === "es"
                ? "por mes"
                : "per month"}
        </span>
      </div>
      <Button
        className={`w-full mt-6 ${isHighlighted ? "bg-primary hover:bg-primary-600" : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700"}`}
        onClick={onGetStarted}
      >
        {isHighlighted
          ? i18n.language === "ar"
            ? "ابدأ النسخة التجريبية المجانية"
            : i18n.language === "fr"
              ? "Démarrer l'essai gratuit"
              : i18n.language === "es"
                ? "Iniciar prueba gratuita"
                : "Start free trial"
          : i18n.language === "ar"
            ? "ابدأ الآن"
            : i18n.language === "fr"
              ? "Commencer"
              : i18n.language === "es"
                ? "Comenzar"
                : "Get started"}
      </Button>
      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle2
              className={`h-5 w-5 ${isHighlighted ? "text-primary" : "text-gray-400"} mt-0.5 flex-shrink-0`}
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function PricingSection() {
  const { i18n } = useTranslation();
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
      "ليدجرلي الأساسي": import.meta.env.VITE_STRIPE_BASIC_PRICE_ID,
      "ليدجرلي برو": import.meta.env.VITE_STRIPE_PRO_PRICE_ID,
      "ليدجرلي برو بلس": import.meta.env.VITE_STRIPE_PRO_PLUS_PRICE_ID,
      "ليدجرلي إنتربرايز": import.meta.env.VITE_STRIPE_ENTERPRISE_PRICE_ID,
      "Ledgerly Basique": import.meta.env.VITE_STRIPE_BASIC_PRICE_ID,
      "Ledgerly Entreprise": import.meta.env.VITE_STRIPE_ENTERPRISE_PRICE_ID,
      "Ledgerly Básico": import.meta.env.VITE_STRIPE_BASIC_PRICE_ID,
      "Ledgerly Empresa": import.meta.env.VITE_STRIPE_ENTERPRISE_PRICE_ID,
    };

    const priceId = priceIds[packageName];
    if (!priceId)
      throw new Error(`No price ID found for package: ${packageName}`);

    setSelectedPackage({ name: packageName, priceId });
  };

  const tiers = [
    {
      name:
        i18n.language === "ar"
          ? "ليدجرلي الأساسي"
          : i18n.language === "fr"
            ? "Ledgerly Basique"
            : i18n.language === "es"
              ? "Ledgerly Básico"
              : "Ledgerly Basic",
      price: isAnnual ? "$14" : "$19",
      numericPrice: isAnnual ? 14 : 19,
      description:
        i18n.language === "ar"
          ? "للشركات التي تبدأ للتو في الإدارة المالية"
          : i18n.language === "fr"
            ? "Pour les entreprises qui débutent dans la gestion financière"
            : i18n.language === "es"
              ? "Para empresas que recién comienzan con la gestión financiera"
              : "For businesses just starting out with financial management",
      features:
        i18n.language === "ar"
          ? [
              "فواتير بيع غير محدودة",
              "تقديرات بيع غير محدودة",
              "تتبع ضريبة السلع والخدمات وضريبة القيمة المضافة",
              "ربط البنوك للاستيراد التلقائي",
              "مخطط الحسابات",
              "دفاتر اليومية اليدوية",
              "تقارير مالية أساسية ورؤى",
              "مقاعد مستخدم غير محدودة",
            ]
          : i18n.language === "fr"
            ? [
                "Factures de vente illimitées",
                "Devis de vente illimités",
                "Suivi de la TPS et de la TVA",
                "Connexion aux banques pour l'importation automatique",
                "Plan comptable",
                "Journaux manuels",
                "Rapports financiers de base et aperçus",
                "Sièges utilisateur illimités",
              ]
            : i18n.language === "es"
              ? [
                  "Facturas de venta ilimitadas",
                  "Presupuestos de venta ilimitados",
                  "Seguimiento de IVA e impuestos",
                  "Conexión bancaria para importación automática",
                  "Plan de cuentas",
                  "Diarios manuales",
                  "Informes financieros básicos y perspectivas",
                  "Asientos de usuario ilimitados",
                ]
              : [
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
      name:
        i18n.language === "ar"
          ? "ليدجرلي برو"
          : i18n.language === "fr"
            ? "Ledgerly Pro"
            : i18n.language === "es"
              ? "Ledgerly Pro"
              : "Ledgerly Pro",
      price: isAnnual ? "$29" : "$39",
      numericPrice: isAnnual ? 29 : 39,
      description:
        i18n.language === "ar"
          ? "للشركات النامية مع احتياجات إدارة المخزون"
          : i18n.language === "fr"
            ? "Pour les entreprises en croissance avec des besoins de gestion d'inventaire"
            : i18n.language === "es"
              ? "Para empresas en crecimiento con necesidades de gestión de inventario"
              : "For growing businesses with inventory management needs",
      features:
        i18n.language === "ar"
          ? [
              "جميع ميزات ليدجرلي الأساسي",
              "فواتير الشراء",
              "معاملات متعددة العملات",
              "قفل المعاملات",
              "تتبع المخزون",
              "تقارير مالية ذكية",
              "تقارير مخزون متقدمة",
            ]
          : i18n.language === "fr"
            ? [
                "Toutes les fonctionnalités de Ledgerly Basique",
                "Factures d'achat",
                "Transactions multi-devises",
                "Verrouillage des transactions",
                "Suivi des stocks",
                "Rapports financiers intelligents",
                "Rapports d'inventaire avancés",
              ]
            : i18n.language === "es"
              ? [
                  "Todas las características de Ledgerly Básico",
                  "Facturas de compra",
                  "Transacciones multi-moneda",
                  "Bloqueo de transacciones",
                  "Seguimiento de inventario",
                  "Informes financieros inteligentes",
                  "Informes de inventario avanzados",
                ]
              : [
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
      name:
        i18n.language === "ar"
          ? "ليدجرلي برو بلس"
          : i18n.language === "fr"
            ? "Ledgerly Pro Plus"
            : i18n.language === "es"
              ? "Ledgerly Pro Plus"
              : "Ledgerly Pro Plus",
      price: isAnnual ? "$41" : "$55",
      numericPrice: isAnnual ? 41 : 55,
      description:
        i18n.language === "ar"
          ? "للشركات التي تحتاج إلى ضوابط مالية متقدمة"
          : i18n.language === "fr"
            ? "Pour les entreprises nécessitant des contrôles financiers avancés"
            : i18n.language === "es"
              ? "Para empresas que necesitan controles financieros avanzados"
              : "For businesses needing advanced financial controls",
      features:
        i18n.language === "ar"
          ? [
              "جميع ميزات ليدجرلي الأساسية",
              "وصول أدوار المستخدم المخصصة",
              "ائتمانات البائع",
              "الميزانية",
              "مركز تكلفة التحليل",
            ]
          : i18n.language === "fr"
            ? [
                "Toutes les fonctionnalités de Ledgerly Essentiel",
                "Accès aux rôles d'utilisateur personnalisés",
                "Crédits fournisseurs",
                "Budgétisation",
                "Centre de coûts d'analyse",
              ]
            : i18n.language === "es"
              ? [
                  "Todas las características de Ledgerly Esencial",
                  "Acceso a roles de usuario personalizados",
                  "Créditos de proveedores",
                  "Presupuestación",
                  "Centro de costos de análisis",
                ]
              : [
                  "All Ledgerly Essential features",
                  "Custom User Roles Access",
                  "Vendor Credits",
                  "Budgeting",
                  "Analysis Cost Center",
                ],
    },
    {
      name:
        i18n.language === "ar"
          ? "ليدجرلي إنتربرايز"
          : i18n.language === "fr"
            ? "Ledgerly Entreprise"
            : i18n.language === "es"
              ? "Ledgerly Empresa"
              : "Ledgerly Enterprise",
      price: isAnnual ? "$44" : "$59",
      numericPrice: isAnnual ? 44 : 59,
      description:
        i18n.language === "ar"
          ? "للشركات المتنامية مع مواقع متعددة"
          : i18n.language === "fr"
            ? "Pour les entreprises en expansion avec plusieurs sites"
            : i18n.language === "es"
              ? "Para empresas en expansión con múltiples ubicaciones"
              : "For scaling businesses with multiple locations",
      features:
        i18n.language === "ar"
          ? ["جميع ميزات ليدجرلي برو بلس", "فروع متعددة", "مستودعات متعددة"]
          : i18n.language === "fr"
            ? [
                "Toutes les fonctionnalités de Ledgerly Pro Plus",
                "Succursales multiples",
                "Entrepôts multiples",
              ]
            : i18n.language === "es"
              ? [
                  "Todas las características de Ledgerly Pro Plus",
                  "Múltiples sucursales",
                  "Múltiples almacenes",
                ]
              : [
                  "All Ledgerly Pro Plus features",
                  "Multiple Branches",
                  "Multiple Warehouses",
                ],
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white dark:from-gray-900 to-transparent"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-50 dark:bg-primary-900/30 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-50 dark:bg-primary-900/30 rounded-full filter blur-3xl opacity-50"></div>

      <div className="container-auth0 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-primary dark:text-primary-300 mb-4">
            {i18n.language === "ar"
              ? "اختر الخطة المثالية لعملك"
              : i18n.language === "fr"
                ? "Choisissez le plan parfait pour votre entreprise"
                : i18n.language === "es"
                  ? "Elige el Plan Perfecto para Tu Negocio"
                  : "Choose the Perfect Plan for Your Business"}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {i18n.language === "ar"
              ? "أسعار شفافة بدون رسوم خفية. تتضمن جميع الخطط ميزاتنا الأساسية مع خيارات متميزة للشركات النامية."
              : i18n.language === "fr"
                ? "Des prix transparents sans frais cachés. Tous les plans incluent nos fonctionnalités de base avec des options premium pour les entreprises en croissance."
                : i18n.language === "es"
                  ? "Precios transparentes sin cargos ocultos. Todos los planes incluyen nuestras funciones principales con opciones premium para empresas en crecimiento."
                  : "Transparent pricing with no hidden fees. All plans include our core features with premium options for growing businesses."}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Check className="h-5 w-5 text-primary" />
              {i18n.language === "ar"
                ? "تجربة مجانية لمدة 14 يوم"
                : i18n.language === "fr"
                  ? "Essai gratuit de 14 jours"
                  : i18n.language === "es"
                    ? "Prueba gratuita de 14 días"
                    : "14-day free trial"}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Check className="h-5 w-5 text-primary" />
              {i18n.language === "ar"
                ? "لا تحتاج إلى بطاقة ائتمان"
                : i18n.language === "fr"
                  ? "Aucune carte de crédit requise"
                  : i18n.language === "es"
                    ? "No se requiere tarjeta de crédito"
                    : "No credit card required"}
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <Check className="h-5 w-5 text-primary" />
              {i18n.language === "ar"
                ? "دعم على مدار الساعة"
                : i18n.language === "fr"
                  ? "Support en ligne 24/7"
                  : i18n.language === "es"
                    ? "Soporte en línea 24/7"
                    : "24/7 online support"}
            </div>
          </div>

          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gray-100 mb-8">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${!isAnnual ? "bg-white shadow-sm text-gray-900" : "text-gray-600"}`}
              onClick={() => setIsAnnual(false)}
            >
              {i18n.language === "ar"
                ? "شهري"
                : i18n.language === "fr"
                  ? "Mensuel"
                  : i18n.language === "es"
                    ? "Mensual"
                    : "Monthly"}
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${isAnnual ? "bg-white shadow-sm text-gray-900" : "text-gray-600"}`}
              onClick={() => setIsAnnual(true)}
            >
              {i18n.language === "ar"
                ? "سنوي"
                : i18n.language === "fr"
                  ? "Annuel"
                  : i18n.language === "es"
                    ? "Anual"
                    : "Annually"}
              <span
                className={`${i18n.language === "ar" ? "mr-1" : "ml-1"} text-xs text-primary font-normal`}
              >
                {i18n.language === "ar"
                  ? "وفر 25%"
                  : i18n.language === "fr"
                    ? "Économisez 25%"
                    : i18n.language === "es"
                      ? "Ahorra 25%"
                      : "Save 25%"}
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

        <div className="mt-16 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-auth0 border border-gray-100 dark:border-gray-700 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/3 flex justify-center">
              <div className="w-24 h-24 bg-primary-50 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
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
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {i18n.language === "ar"
                  ? "أمان على مستوى المؤسسات"
                  : i18n.language === "fr"
                    ? "Sécurité de niveau entreprise"
                    : i18n.language === "es"
                      ? "Seguridad de nivel empresarial"
                      : "Enterprise-grade security"}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {i18n.language === "ar"
                  ? "تتضمن جميع الخطط أمانًا على مستوى البنوك، وتشفير البيانات، والامتثال لمعايير الصناعة."
                  : i18n.language === "fr"
                    ? "Tous les forfaits comprennent une sécurité de niveau bancaire, le chiffrement des données et la conformité aux normes de l'industrie."
                    : i18n.language === "es"
                      ? "Todos los planes incluyen seguridad de nivel bancario, cifrado de datos y cumplimiento de estándares de la industria."
                      : "All plans include bank-level security, data encryption, and compliance with industry standards."}
              </p>
              <Link to="/security">
                <Button
                  variant="outline"
                  className="text-primary border-primary hover:bg-primary-50 dark:border-primary-400 dark:hover:bg-primary-900/20"
                >
                  {i18n.language === "ar"
                    ? "تعرف على الأمان لدينا"
                    : i18n.language === "fr"
                      ? "En savoir plus sur notre sécurité"
                      : i18n.language === "es"
                        ? "Conozca nuestra seguridad"
                        : "Learn about our security"}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          {i18n.language === "ar"
            ? "* تأتي جميع الخطط السنوية مع ضمان استرداد الأموال لمدة 30 يومًا، بدون أسئلة."
            : i18n.language === "fr"
              ? "* Tous les forfaits annuels sont accompagnés d'une garantie de remboursement de 30 jours, sans poser de questions."
              : i18n.language === "es"
                ? "* Todos los planes anuales vienen con una garantía de devolución de dinero de 30 días, sin preguntas."
                : "* All annual plans come with a 30-day money-back guarantee, no questions asked."}
        </p>
      </div>
    </section>
  );
}
