import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Search,
  ChevronDown,
  BookOpen,
  FileText,
  MessageSquare,
  Video,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {question}
        </h3>
        <ChevronDown
          className={`h-5 w-5 text-gray-500 transition-transform ${isOpen ? "transform rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-600 dark:text-gray-300">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default function Help() {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");

  const helpCategories = [
    {
      title: i18n.language === "ar" ? "البدء" : "Getting Started",
      icon: <BookOpen className="h-6 w-6 text-primary dark:text-primary-300" />,
      description:
        i18n.language === "ar"
          ? "تعلم أساسيات ليدجرلي وإعداد حسابك"
          : "Learn the basics of Ledgerly and set up your account",
      link: "/help/getting-started",
    },
    {
      title: i18n.language === "ar" ? "أدلة المستخدم" : "User Guides",
      icon: <FileText className="h-6 w-6 text-primary dark:text-primary-300" />,
      description:
        i18n.language === "ar"
          ? "أدلة مفصلة لجميع ميزات ليدجرلي"
          : "Detailed guides for all Ledgerly features",
      link: "/help/user-guides",
    },
    {
      title: i18n.language === "ar" ? "دروس فيديو" : "Video Tutorials",
      icon: <Video className="h-6 w-6 text-primary dark:text-primary-300" />,
      description:
        i18n.language === "ar"
          ? "دروس فيديو خطوة بخطوة للمتعلمين البصريين"
          : "Step-by-step video tutorials for visual learners",
      link: "/help/video-tutorials",
    },
    {
      title: i18n.language === "ar" ? "منتدى المجتمع" : "Community Forum",
      icon: (
        <MessageSquare className="h-6 w-6 text-primary dark:text-primary-300" />
      ),
      description:
        i18n.language === "ar"
          ? "تواصل مع المستخدمين الآخرين وشارك المعرفة"
          : "Connect with other users and share knowledge",
      link: "/community",
    },
  ];

  const faqs: FAQItemProps[] = [
    {
      question:
        i18n.language === "ar"
          ? "كيف أقوم بإعداد شركتي في ليدجرلي؟"
          : "How do I set up my company in Ledgerly?",
      answer:
        i18n.language === "ar"
          ? "لإعداد شركتك، قم بتسجيل الدخول إلى حساب ليدجرلي الخاص بك وانتقل إلى الإعدادات > ملف الشركة. املأ تفاصيل شركتك، بما في ذلك الاسم والعنوان ومعلومات الضرائب وإعدادات السنة المالية. يمكنك أيضًا تحميل شعار شركتك وتعيين العملة الافتراضية الخاصة بك."
          : "To set up your company, log in to your Ledgerly account and navigate to Settings > Company Profile. Fill in your company details, including name, address, tax information, and fiscal year settings. You can also upload your company logo and set your default currency.",
    },
    {
      question:
        i18n.language === "ar"
          ? "هل يمكنني استيراد البيانات من برنامج المحاسبة السابق الخاص بي؟"
          : "Can I import data from my previous accounting software?",
      answer:
        i18n.language === "ar"
          ? "نعم، يدعم ليدجرلي استيراد البيانات من معظم برامج المحاسبة الشائعة بما في ذلك QuickBooks وXero وSage. انتقل إلى الإعدادات > استيراد البيانات واتبع المعالج خطوة بخطوة لاستيراد مخطط الحسابات والجهات الاتصال والمعاملات."
          : "Yes, Ledgerly supports importing data from most popular accounting software including QuickBooks, Xero, and Sage. Go to Settings > Data Import and follow the step-by-step wizard to import your chart of accounts, contacts, and transactions.",
    },
    {
      question:
        i18n.language === "ar"
          ? "كيف أقوم بربط حساباتي المصرفية؟"
          : "How do I connect my bank accounts?",
      answer:
        i18n.language === "ar"
          ? "لربط حساباتك المصرفية، انتقل إلى الخدمات المصرفية > ربط الحساب. يدعم ليدجرلي أكثر من 10,000 مؤسسة مالية حول العالم. اتبع عملية الاتصال الآمنة، وستبدأ معاملاتك في المزامنة تلقائيًا."
          : "To connect your bank accounts, go to Banking > Connect Account. Ledgerly supports over 10,000 financial institutions worldwide. Follow the secure connection process, and your transactions will start syncing automatically.",
    },
    {
      question:
        i18n.language === "ar"
          ? "كم مرة يتم تحديث معاملاتي المصرفية؟"
          : "How often are my bank transactions updated?",
      answer:
        i18n.language === "ar"
          ? "يتم تحديث المعاملات المصرفية عادةً كل 24 ساعة. يمكنك أيضًا تحديث تغذيات البنك الخاصة بك يدويًا في أي وقت بالنقر فوق زر 'تحديث' في قسم الخدمات المصرفية."
          : "Bank transactions are typically updated every 24 hours. You can also manually refresh your bank feeds at any time by clicking the 'Refresh' button in the Banking section.",
    },
    {
      question:
        i18n.language === "ar"
          ? "كيف أقوم بإنشاء وإرسال الفواتير؟"
          : "How do I create and send invoices?",
      answer:
        i18n.language === "ar"
          ? "لإنشاء فاتورة، انتقل إلى المبيعات > الفواتير وانقر على 'فاتورة جديدة'. حدد عميلًا، وأضف عناصر السطر، وحدد شروط الدفع، وقم بتخصيص فاتورتك حسب الحاجة. يمكنك بعد ذلك إرسال الفاتورة مباشرة عبر البريد الإلكتروني، أو تنزيلها كملف PDF، أو الحصول على رابط قابل للمشاركة."
          : "To create an invoice, go to Sales > Invoices and click 'New Invoice'. Select a customer, add line items, set payment terms, and customize your invoice as needed. You can then send the invoice directly via email, download it as a PDF, or get a shareable link.",
    },
    {
      question:
        i18n.language === "ar"
          ? "ما هي طرق الدفع التي يمكن لعملائي استخدامها لدفع الفواتير؟"
          : "What payment methods can my customers use to pay invoices?",
      answer:
        i18n.language === "ar"
          ? "يدعم ليدجرلي طرق دفع متعددة بما في ذلك بطاقات الائتمان/الخصم، وتحويلات ACH، وPayPal، والتحويلات المصرفية. يمكنك تمكين أو تعطيل طرق الدفع في الإعدادات > خيارات الدفع."
          : "Ledgerly supports multiple payment methods including credit/debit cards, ACH transfers, PayPal, and bank transfers. You can enable or disable payment methods in Settings > Payment Options.",
    },
    {
      question:
        i18n.language === "ar"
          ? "كيف أقوم بتسوية حساباتي؟"
          : "How do I reconcile my accounts?",
      answer:
        i18n.language === "ar"
          ? "لتسوية حساب، انتقل إلى الخدمات المصرفية > التسوية وحدد الحساب الذي تريد تسويته. أدخل الرصيد النهائي من كشف حسابك المصرفي وطابق المعاملات حتى يصبح الفرق صفرًا. انقر على 'إكمال التسوية' عند الانتهاء."
          : "To reconcile an account, go to Banking > Reconciliation and select the account you want to reconcile. Enter the ending balance from your bank statement and match transactions until the difference is zero. Click 'Complete Reconciliation' when finished.",
    },
    {
      question:
        i18n.language === "ar"
          ? "هل يمكنني تتبع المخزون مع ليدجرلي؟"
          : "Can I track inventory with Ledgerly?",
      answer:
        i18n.language === "ar"
          ? "نعم، تتبع المخزون متاح في خطط Pro والخطط الأعلى. انتقل إلى المخزون > العناصر لإعداد منتجاتك، بما في ذلك التكلفة وسعر البيع والكمية الأولية. سيقوم ليدجرلي تلقائيًا بتحديث مستويات المخزون عند إنشاء أوامر الشراء أو فواتير المبيعات أو تعديلات المخزون."
          : "Yes, inventory tracking is available on Pro and higher plans. Go to Inventory > Items to set up your products, including cost, selling price, and initial quantity. Ledgerly will automatically update inventory levels when you create purchase orders, sales invoices, or inventory adjustments.",
    },
  ];

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="pt-20 px-4">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-primary-50 dark:bg-gray-800 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-100 dark:bg-primary-900/30 rounded-full filter blur-3xl opacity-50"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-100 dark:bg-primary-900/30 rounded-full filter blur-3xl opacity-50"></div>

          <div className="container-auth0 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {i18n.language === "ar"
                  ? "كيف يمكننا مساعدتك؟"
                  : "How can we help you?"}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {i18n.language === "ar"
                  ? "ابحث عن إجابات للأسئلة الشائعة أو تواصل مع فريق الدعم"
                  : "Find answers to common questions or contact our support team"}
              </p>

              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder={
                    i18n.language === "ar"
                      ? "ابحث عن المساعدة..."
                      : "Search for help..."
                  }
                  className="pl-10 py-3 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Help Categories */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container-auth0">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              {i18n.language === "ar"
                ? "تصفح مواضيع المساعدة"
                : "Browse Help Topics"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {helpCategories.map((category, index) => (
                <Link
                  key={index}
                  to={category.link}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-auth0 border border-gray-100 dark:border-gray-700 hover:shadow-auth0-md transition-all flex flex-col items-center text-center"
                >
                  <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {category.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container-auth0">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {i18n.language === "ar"
                  ? "الأسئلة الشائعة"
                  : "Frequently Asked Questions"}
              </h2>

              {searchTerm && (
                <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                  {filteredFAQs.length}{" "}
                  {i18n.language === "ar"
                    ? "نتائج وجدت لـ"
                    : "results found for"}{" "}
                  "{searchTerm}"
                </p>
              )}

              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-auth0 p-6">
                {filteredFAQs.length > 0 ? (
                  filteredFAQs.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {i18n.language === "ar"
                        ? "لم يتم العثور على نتائج لبحثك. جرب كلمات مختلفة أو تصفح فئات المساعدة لدينا."
                        : "No results found for your search. Try different keywords or browse our help categories."}
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => setSearchTerm("")}
                      className="mt-2"
                    >
                      {i18n.language === "ar" ? "مسح البحث" : "Clear search"}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container-auth0">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {i18n.language === "ar"
                  ? "هل ما زلت بحاجة إلى مساعدة؟"
                  : "Still need help?"}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {i18n.language === "ar"
                  ? "فريق الدعم لدينا متاح لمساعدتك في أي استفسارات"
                  : "Our support team is available to assist you with any questions"}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-md">
                    {i18n.language === "ar"
                      ? "الاتصال بالدعم"
                      : "Contact Support"}
                  </Button>
                </Link>
                <a
                  href="https://docs.ledgerly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <Button
                    variant="outline"
                    className="border-gray-300 dark:border-gray-600 px-6 py-3 rounded-md"
                  >
                    {i18n.language === "ar"
                      ? "عرض الوثائق"
                      : "View Documentation"}
                    <ExternalLink
                      size={16}
                      className={i18n.language === "ar" ? "mr-2" : "ml-2"}
                    />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
