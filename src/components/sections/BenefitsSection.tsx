import React from "react";
import { useTranslation } from "react-i18next";
import {
  BarChart3,
  Shield,
  Clock,
  DollarSign,
  Users,
  FileText,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  titleAr?: string;
  descriptionAr?: string;
  titleFr?: string;
  descriptionFr?: string;
}

const Benefit = ({ icon, title, description }: BenefitProps) => {
  const { i18n } = useTranslation();
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="p-6 flex flex-col items-start bg-white dark:bg-gray-800 rounded-lg shadow-auth0 border border-gray-100 dark:border-gray-700 hover:shadow-auth0-md transition-all"
    >
      <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/30 mb-4">
        {React.cloneElement(icon as React.ReactElement, {
          className: "w-6 h-6 text-primary dark:text-primary-300",
        })}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {i18n.language === "ar"
          ? (icon as any).props.titleAr || title
          : i18n.language === "fr"
            ? (icon as any).props.titleFr || title
            : title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {i18n.language === "ar"
          ? (icon as any).props.descriptionAr || description
          : i18n.language === "fr"
            ? (icon as any).props.descriptionFr || description
            : description}
      </p>
    </motion.div>
  );
};

interface BenefitsSectionProps {
  benefits?: Array<BenefitProps>;
}

const defaultBenefits = [
  {
    icon: (
      <BarChart3
        titleAr="تحليلات في الوقت الحقيقي"
        descriptionAr="احصل على رؤى فورية حول أدائك المالي مع لوحة التحليلات المتقدمة لدينا"
        titleFr="Analyses en temps réel"
        descriptionFr="Obtenez des aperçus instantanés de votre performance financière avec notre tableau de bord d'analyse avancé"
      />
    ),
    title: "Real-time Analytics",
    description:
      "Get instant insights into your financial performance with our advanced analytics dashboard",
    titleAr: "تحليلات في الوقت الحقيقي",
    descriptionAr:
      "احصل على رؤى فورية حول أدائك المالي مع لوحة التحليلات المتقدمة لدينا",
    titleFr: "Analyses en temps réel",
    descriptionFr:
      "Obtenez des aperçus instantanés de votre performance financière avec notre tableau de bord d'analyse avancé",
  },
  {
    icon: (
      <Shield
        titleAr="منصة آمنة"
        descriptionAr="يضمن الأمان على مستوى البنوك حماية بياناتك المالية دائمًا"
        titleFr="Plateforme sécurisée"
        descriptionFr="La sécurité de niveau bancaire garantit que vos données financières sont toujours protégées"
      />
    ),
    title: "Secure Platform",
    description:
      "Bank-level security ensures your financial data is always protected",
    titleAr: "منصة آمنة",
    descriptionAr: "يضمن الأمان على مستوى البنوك حماية بياناتك المالية دائمًا",
    titleFr: "Plateforme sécurisée",
    descriptionFr:
      "La sécurité de niveau bancaire garantit que vos données financières sont toujours protégées",
  },
  {
    icon: (
      <Clock
        titleAr="أتمتة توفر الوقت"
        descriptionAr="أتمتة المهام المتكررة والتركيز على ما يهم أكثر لعملك"
        titleFr="Automatisation économisant du temps"
        descriptionFr="Automatisez les tâches répétitives et concentrez-vous sur ce qui compte le plus pour votre entreprise"
      />
    ),
    title: "Time-Saving Automation",
    description:
      "Automate repetitive tasks and focus on what matters most to your business",
    titleAr: "أتمتة توفر الوقت",
    descriptionAr: "أتمتة المهام المتكررة والتركيز على ما يهم أكثر لعملك",
    titleFr: "Automatisation économisant du temps",
    descriptionFr:
      "Automatisez les tâches répétitives et concentrez-vous sur ce qui compte le plus pour votre entreprise",
  },
  {
    icon: (
      <DollarSign
        titleAr="إدارة التكاليف"
        descriptionAr="تحسين إنفاقك وتحديد فرص توفير التكاليف بسهولة"
        titleFr="Gestion des coûts"
        descriptionFr="Optimisez vos dépenses et identifiez sans effort les opportunités d'économies"
      />
    ),
    title: "Cost Management",
    description:
      "Optimize your spending and identify cost-saving opportunities effortlessly",
    titleAr: "إدارة التكاليف",
    descriptionAr: "تحسين إنفاقك وتحديد فرص توفير التكاليف بسهولة",
    titleFr: "Gestion des coûts",
    descriptionFr:
      "Optimisez vos dépenses et identifiez sans effort les opportunités d'économies",
  },
  {
    icon: (
      <Users
        titleAr="تعاون الفريق"
        descriptionAr="العمل بسلاسة مع فريقك والمحاسبين في الوقت الحقيقي"
        titleFr="Collaboration d'équipe"
        descriptionFr="Travaillez en toute transparence avec votre équipe et vos comptables en temps réel"
      />
    ),
    title: "Team Collaboration",
    description: "Work seamlessly with your team and accountants in real-time",
    titleAr: "تعاون الفريق",
    descriptionAr: "العمل بسلاسة مع فريقك والمحاسبين في الوقت الحقيقي",
    titleFr: "Collaboration d'équipe",
    descriptionFr:
      "Travaillez en toute transparence avec votre équipe et vos comptables en temps réel",
  },
  {
    icon: (
      <FileText
        titleAr="جاهز للامتثال"
        descriptionAr="البقاء ممتثلاً مع التقارير والتوثيق الآلي"
        titleFr="Prêt pour la conformité"
        descriptionFr="Restez conforme avec des rapports et une documentation automatisés"
      />
    ),
    title: "Compliance Ready",
    description: "Stay compliant with automated reporting and documentation",
    titleAr: "جاهز للامتثال",
    descriptionAr: "البقاء ممتثلاً مع التقارير والتوثيق الآلي",
    titleFr: "Prêt pour la conformité",
    descriptionFr:
      "Restez conforme avec des rapports et une documentation automatisés",
  },
];

const BenefitsSection = ({
  benefits = defaultBenefits,
}: BenefitsSectionProps) => {
  const { i18n } = useTranslation();
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container-auth0">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-100 to-primary-50 rounded-xl blur-xl opacity-50"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-auth0-lg overflow-hidden border border-gray-100 dark:border-gray-700">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
                  alt="Financial dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-300 mb-6">
              {i18n.language === "ar"
                ? "لماذا تختار ليدجرلي"
                : i18n.language === "fr"
                  ? "Pourquoi choisir Ledgerly"
                  : "Why Choose Ledgerly"}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {i18n.language === "ar"
                ? "تحكم في أموالك مع منصتنا القوية والبديهية المصممة للشركات الحديثة"
                : i18n.language === "fr"
                  ? "Prenez le contrôle de vos finances avec notre plateforme puissante et intuitive conçue pour les entreprises modernes"
                  : "Gain control of your finances with our powerful, intuitive platform designed for modern businesses"}
            </p>

            <div className="space-y-4">
              {benefits.slice(0, 4).map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex-shrink-0">
                    {React.cloneElement(benefit.icon as React.ReactElement, {
                      className: "w-5 h-5 text-primary dark:text-primary-300",
                    })}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {i18n.language === "ar"
                        ? benefit.titleAr || benefit.title
                        : i18n.language === "fr"
                          ? benefit.titleFr || benefit.title
                          : benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {i18n.language === "ar"
                        ? benefit.descriptionAr || benefit.description
                        : i18n.language === "fr"
                          ? benefit.descriptionFr || benefit.description
                          : benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                i18n.language === "ar"
                  ? "إعداد سهل"
                  : i18n.language === "fr"
                    ? "Configuration facile"
                    : "Easy setup",
                i18n.language === "ar"
                  ? "لا تحتاج إلى بطاقة ائتمان"
                  : i18n.language === "fr"
                    ? "Aucune carte de crédit requise"
                    : "No credit card required",
                i18n.language === "ar"
                  ? "دعم على مدار الساعة"
                  : i18n.language === "fr"
                    ? "Support 24/7"
                    : "24/7 support",
                i18n.language === "ar"
                  ? "تجربة مجانية متاحة"
                  : i18n.language === "fr"
                    ? "Essai gratuit disponible"
                    : "Free trial available",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary dark:text-primary-300" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.slice(0, 3).map((benefit, index) => (
            <Benefit
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              titleAr={benefit.titleAr}
              descriptionAr={benefit.descriptionAr}
              titleFr={benefit.titleFr}
              descriptionFr={benefit.descriptionFr}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
