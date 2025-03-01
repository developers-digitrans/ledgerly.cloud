import React from "react";
import { useTranslation } from "react-i18next";
import {
  FileText,
  BarChart2,
  Package2,
  Users2,
  Receipt,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col items-start bg-white dark:bg-gray-800 p-6 rounded-lg shadow-auth0 border border-gray-100 dark:border-gray-700 hover:shadow-auth0-md transition-all"
    >
      <div className="mb-4 p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg">
        {React.cloneElement(icon as React.ReactElement, {
          className: "w-6 h-6 text-primary dark:text-primary-300",
        })}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export default function FeaturesSection() {
  const { i18n } = useTranslation();

  const features = [
    {
      icon: <FileText />,
      title:
        i18n.language === "ar"
          ? "فواتير المبيعات والمشتريات"
          : i18n.language === "fr"
            ? "Facturation des ventes et achats"
            : "Sales & Purchases Invoicing",
      description:
        i18n.language === "ar"
          ? "أنشئ فواتير البيع مع عملائك أو فواتير الشراء مع الموردين، وأدر الفواتير المتكررة وتتبع مدفوعات العملاء/الموردين بسهولة."
          : i18n.language === "fr"
            ? "Créez vos factures de vente avec vos clients ou factures d'achat avec les fournisseurs, gérez les factures récurrentes et suivez facilement les paiements des clients/fournisseurs."
            : "Create your sell invoices with your customers or purchase invoices with the vendors, manage recurring invoices and easily track customers/vendors payments.",
    },
    {
      icon: <BarChart2 />,
      title:
        i18n.language === "ar"
          ? "التقارير المالية"
          : i18n.language === "fr"
            ? "Rapports financiers"
            : "Financial Reports",
      description:
        i18n.language === "ar"
          ? "لا تحتاج إلى الانتظار حتى نهاية الشهر لإنشاء تقارير الأعمال. يوفر ليدجرلي تقارير مالية لإدارة عملك بذكاء."
          : i18n.language === "fr"
            ? "Vous n'avez pas à attendre la fin du mois pour générer des rapports d'entreprise. Ledgerly dispose de rapports financiers pour gérer votre entreprise avec intelligence."
            : "You do not have to wait to end of month to generate business reports. Ledgerly has financial reports to run your business with intelligence.",
    },
    {
      icon: <Package2 />,
      title:
        i18n.language === "ar"
          ? "المخزون"
          : i18n.language === "fr"
            ? "Inventaire"
            : i18n.language === "es"
              ? "Inventario"
              : "Inventory",
      description:
        i18n.language === "ar"
          ? "تتبع عناصر المخزون الخاصة بك بسهولة، وعندما تشتري أو تبيع عنصرًا، سيتم زيادة أو تقليل كمية المخزون تلقائيًا مع تقارير المخزون الذكية."
          : i18n.language === "fr"
            ? "Suivez facilement vos articles d'inventaire, et lorsque vous achetez ou vendez un article, la quantité en stock sera automatiquement augmentée ou diminuée avec des rapports d'inventaire intelligents."
            : i18n.language === "es"
              ? "Rastree fácilmente sus artículos de inventario, y cuando compre o venda un artículo, la cantidad de stock se incrementará o decrementará automáticamente con informes de inventario inteligentes."
              : "Easily track your inventory items, and when you buy or sell for an item the stock amount will be automatically incremented or decremented with smart inventory reports.",
    },
    {
      icon: <Users2 />,
      title:
        i18n.language === "ar"
          ? "المحاسبون ومسكو الدفاتر"
          : i18n.language === "fr"
            ? "Comptables & Teneurs de livres"
            : i18n.language === "es"
              ? "Contadores y Tenedores de libros"
              : "Accountants & Bookkeepers",
      description:
        i18n.language === "ar"
          ? "يجب أن يسهل البرنامج التعاون مع محاسبك، يسمح ليدجرلي بدعوة المستخدمين إلى مؤسستك مع أذونات تستند إلى الأدوار."
          : i18n.language === "fr"
            ? "Le logiciel doit faciliter la collaboration avec votre comptable, Ledgerly permet d'inviter des utilisateurs dans votre organisation avec des permissions basées sur les rôles."
            : i18n.language === "es"
              ? "El software debe facilitar la colaboración con su contador, Ledgerly permite invitar a usuarios a su organización con permisos basados en roles."
              : "The software should facilitate collaboration with your accountant, Ledgerly allows to invite users to your organization with role-based permissions.",
    },
    {
      icon: <Receipt />,
      title:
        i18n.language === "ar"
          ? "محاسبة المصروفات"
          : i18n.language === "fr"
            ? "Comptabilité des dépenses"
            : i18n.language === "es"
              ? "Contabilidad de gastos"
              : "Expense Accounting",
      description:
        i18n.language === "ar"
          ? "يوفر لك البرنامج مكانًا واحدًا لتتبع جميع نفقات الأعمال من رواتب الموظفين إلى استئجار المكاتب وتصنيفها إلى حسابات وفواتير لعملائك."
          : i18n.language === "fr"
            ? "Le logiciel vous offre un endroit unique pour suivre toutes les dépenses d'entreprise, des salaires des employés à la location de bureaux, et les catégoriser en comptes et les facturer à vos clients."
            : i18n.language === "es"
              ? "El software le proporciona un único lugar para rastrear todos los gastos comerciales, desde la nómina de los empleados hasta el alquiler de oficinas, y categorizarlos en cuentas y facturarlos a sus clientes."
              : "The software gives you a single place to track all business expenses from employee payroll to office renting and categorize them into accounts and bill them to your customers.",
    },
    {
      icon: <DollarSign />,
      title:
        i18n.language === "ar"
          ? "محاسبة متعددة العملات"
          : i18n.language === "fr"
            ? "Comptabilité multi-devises"
            : i18n.language === "es"
              ? "Contabilidad multi-moneda"
              : "Multi-currency Accounting",
      description:
        i18n.language === "ar"
          ? "ادفع واستلم المدفوعات وقم بإجراء دفاتر اليومية اليدوية بأي عملة مع تحويلات أسعار الصرف في الوقت الحقيقي."
          : i18n.language === "fr"
            ? "Payez et recevez des paiements et effectuez des journaux manuels dans n'importe quelle devise avec des conversions de taux de change en temps réel."
            : i18n.language === "es"
              ? "Pague y reciba pagos y realice diarios manuales en cualquier moneda con conversiones de tipos de cambio en tiempo real."
              : "Pay and get paid and do manual journals in any currency with real time exchange rates conversions.",
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
              ? "حوّل إدارتك المالية"
              : i18n.language === "fr"
                ? "Transformez Votre Gestion Financière"
                : "Transform Your Financial Management"}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {i18n.language === "ar"
              ? "منصتنا توحد بياناتك، وتؤتمت العمليات، وتقدم رؤى استراتيجية"
              : i18n.language === "fr"
                ? "Notre plateforme centralise vos données, automatise les processus et fournit des informations stratégiques"
                : "Our platform centralizes your data, automates processes, and delivers strategic insights"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/features" className="group inline-flex">
            <Button className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-md text-lg flex items-center gap-2">
              {i18n.language === "ar"
                ? "استكشاف جميع الميزات"
                : i18n.language === "fr"
                  ? "Explorer toutes les fonctionnalités"
                  : "Explore all features"}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
