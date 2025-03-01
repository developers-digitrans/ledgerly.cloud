import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// English translations
const enTranslations = {
  common: {
    signUp: "Sign Up Free",
    login: "Log In",
    startTrial: "Start Free Trial",
    learnMore: "Learn More",
    subscribe: "Subscribe",
    subscribing: "Subscribing...",
    subscribeSuccess: "Thank you for subscribing! We'll keep you updated.",
    subscribeError: "There was an error subscribing. Please try again.",
    emailPlaceholder: "Your email address",
    invalidEmail: "Please enter a valid email address",
  },
  hero: {
    line1: "Financial management platform",
    line2: "that transforms your business data",
    line3: "Into Strategic Financial Insights",
    subtitle:
      "Centralize your financial data, automate processes, and gain strategic insights with our comprehensive financial management platform.",
    trustedBy: "Trusted by",
    businesses: "businesses",
  },
  features: {
    title: "Transform Your Financial Management",
    subtitle:
      "Our platform centralizes your data, automates processes, and delivers strategic insights",
    exploreAll: "Explore all features",
  },
  benefits: {
    title: "Why Choose Ledgerly",
    subtitle:
      "Gain control of your finances with our powerful, intuitive platform designed for modern businesses",
  },
  pricing: {
    title: "Choose the Perfect Plan for Your Business",
    subtitle:
      "Transparent pricing with no hidden fees. All plans include our core features with premium options for growing businesses.",
    monthly: "Monthly",
    annually: "Annually",
    save: "Save 25%",
    perMonth: "per month",
    getStarted: "Get started",
    startTrial: "Start free trial",
  },
  subscribe: {
    title: "Stay Updated with Ledgerly",
    subtitle:
      "Subscribe to our newsletter to receive the latest updates, financial tips, and exclusive offers.",
  },
};

// Spanish translations
const esTranslations = {
  common: {
    signUp: "Registrarse Gratis",
    login: "Iniciar Sesión",
    startTrial: "Comenzar Prueba Gratuita",
    learnMore: "Más Información",
    subscribe: "Suscribirse",
    subscribing: "Suscribiendo...",
    subscribeSuccess: "Gracias por suscribirte! Te mantendremos informado.",
    subscribeError:
      "Hubo un error al suscribirse. Por favor, inténtelo de nuevo.",
    emailPlaceholder: "Tu dirección de correo",
    invalidEmail: "Por favor ingrese un correo electrónico válido",
    documentation: "Documentación",
    pricing: "Precios",
    features: "Características",
    resources: "Recursos",
    whyLedgerly: "Por qué Ledgerly",
    solutions: "Soluciones",
    forSmallBusiness: "Para pequeñas empresas",
    forEnterprise: "Para empresas",
    streamlineFinances: "Optimiza tus finanzas",
    advancedSolutions: "Soluciones financieras avanzadas",
    dashboard: "Panel de control",
  },
  hero: {
    line1: "Plataforma de gestión financiera",
    line2: "que transforma los datos de tu negocio",
    line3: "En Información Financiera Estratégica",
    subtitle:
      "Centraliza tus datos financieros, automatiza procesos y obtén información estratégica con nuestra plataforma integral de gestión financiera.",
    trustedBy: "Confiado por",
    businesses: "empresas",
  },
  features: {
    title: "Transforma Tu Gestión Financiera",
    subtitle:
      "Nuestra plataforma centraliza tus datos, automatiza procesos y ofrece información estratégica",
    exploreAll: "Explorar todas las funciones",
  },
  benefits: {
    title: "Por Qué Elegir Ledgerly",
    subtitle:
      "Toma el control de tus finanzas con nuestra potente e intuitiva plataforma diseñada para empresas modernas",
  },
  pricing: {
    title: "Elige el Plan Perfecto para Tu Negocio",
    subtitle:
      "Precios transparentes sin cargos ocultos. Todos los planes incluyen nuestras funciones principales con opciones premium para empresas en crecimiento.",
    monthly: "Mensual",
    annually: "Anual",
    save: "Ahorra 25%",
    perMonth: "por mes",
    getStarted: "Comenzar",
    startTrial: "Iniciar prueba gratuita",
  },
  subscribe: {
    title: "Mantente Actualizado con Ledgerly",
    subtitle:
      "Suscríbete a nuestro boletín para recibir las últimas actualizaciones, consejos financieros y ofertas exclusivas.",
  },
};

// French translations
const frTranslations = {
  common: {
    signUp: "S'inscrire Gratuitement",
    login: "Se Connecter",
    startTrial: "Commencer l'Essai Gratuit",
    learnMore: "En Savoir Plus",
    subscribe: "S'abonner",
    subscribing: "Abonnement en cours...",
    subscribeSuccess:
      "Merci de vous être abonné ! Nous vous tiendrons informé.",
    subscribeError:
      "Une erreur s'est produite lors de l'abonnement. Veuillez réessayer.",
    emailPlaceholder: "Votre adresse e-mail",
    invalidEmail: "Veuillez entrer une adresse e-mail valide",
  },
  hero: {
    line1: "Plateforme de gestion financière",
    line2: "qui transforme les données de votre entreprise",
    line3: "En Informations Financières Stratégiques",
    subtitle:
      "Centralisez vos données financières, automatisez les processus et obtenez des informations stratégiques grâce à notre plateforme complète de gestion financière.",
    trustedBy: "Utilisé par",
    businesses: "entreprises",
  },
  features: {
    title: "Transformez Votre Gestion Financière",
    subtitle:
      "Notre plateforme centralise vos données, automatise les processus et fournit des informations stratégiques",
    exploreAll: "Explorer toutes les fonctionnalités",
  },
  benefits: {
    title: "Pourquoi Choisir Ledgerly",
    subtitle:
      "Prenez le contrôle de vos finances avec notre plateforme puissante et intuitive conçue pour les entreprises modernes",
  },
  pricing: {
    title: "Choisissez le Plan Parfait pour Votre Entreprise",
    subtitle:
      "Des prix transparents sans frais cachés. Tous les plans incluent nos fonctionnalités de base avec des options premium pour les entreprises en croissance.",
    monthly: "Mensuel",
    annually: "Annuel",
    save: "Économisez 25%",
    perMonth: "par mois",
    getStarted: "Commencer",
    startTrial: "Démarrer l'essai gratuit",
  },
  subscribe: {
    title: "Restez à Jour avec Ledgerly",
    subtitle:
      "Abonnez-vous à notre newsletter pour recevoir les dernières mises à jour, conseils financiers et offres exclusives.",
  },
};

// Arabic translations
const arTranslations = {
  common: {
    signUp: "التسجيل مجانًا",
    login: "تسجيل الدخول",
    startTrial: "ابدأ النسخة التجريبية المجانية",
    learnMore: "معرفة المزيد",
    subscribe: "اشترك",
    subscribing: "جاري الاشتراك...",
    subscribeSuccess: "شكرًا لاشتراكك! سنبقيك على اطلاع.",
    subscribeError: "حدث خطأ أثناء الاشتراك. يرجى المحاولة مرة أخرى.",
    emailPlaceholder: "عنوان بريدك الإلكتروني",
    invalidEmail: "يرجى إدخال عنوان بريد إلكتروني صالح",
    documentation: "الوثائق",
    pricing: "الأسعار",
    features: "الميزات",
    resources: "الموارد",
    whyLedgerly: "لماذا ليدجرلي",
    solutions: "الحلول",
    forSmallBusiness: "للشركات الصغيرة",
    forEnterprise: "للمؤسسات",
    streamlineFinances: "تبسيط الشؤون المالية",
    advancedSolutions: "حلول مالية متقدمة",
    dashboard: "لوحة التحكم",
    sendMessage: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    fullName: "الاسم الكامل *",
    emailAddress: "البريد الإلكتروني *",
    companyName: "اسم الشركة *",
    phoneNumber: "رقم الهاتف (اختياري)",
    message: "الرسالة *",
    contactInfo: "معلومات الاتصال",
    contactTeam:
      "فريقنا متاح لمساعدتك في أي استفسارات حول منصتنا، الأسعار، أو لجدولة عرض توضيحي مخصص.",
    emailUs: "راسلنا عبر البريد الإلكتروني",
    callUs: "اتصل بنا",
    visitUs: "زورنا",
    businessHours: "ساعات العمل",
    generalInquiries: "للاستفسارات العامة والدعم",
    mondayToFriday:
      "من الاثنين إلى الجمعة، 9 صباحًا إلى 6 مساءً بتوقيت شرق الولايات المتحدة",
    lookingForDemo: "هل تبحث عن عرض توضيحي؟",
    scheduleDemo: "جدولة عرض توضيحي",
    scheduleDemoText:
      "جدولة عرض توضيحي مخصص مع أحد متخصصي المنتج لمعرفة كيف يمكن لـ ليدجرلي تحويل عملياتك المالية.",
    howCanWeHelp: "كيف يمكننا مساعدتك؟",
    findAnswers: "ابحث عن إجابات للأسئلة الشائعة أو تواصل مع فريق الدعم",
    searchForHelp: "ابحث عن المساعدة...",
    browseHelpTopics: "تصفح مواضيع المساعدة",
    gettingStarted: "البدء",
    userGuides: "أدلة المستخدم",
    videoTutorials: "دروس فيديو",
    communityForum: "منتدى المجتمع",
    learnBasics: "تعلم أساسيات ليدجرلي وإعداد حسابك",
    detailedGuides: "أدلة مفصلة لجميع ميزات ليدجرلي",
    stepByStep: "دروس فيديو خطوة بخطوة للمتعلمين البصريين",
    connectWithUsers: "تواصل مع المستخدمين الآخرين وشارك المعرفة",
    frequentlyAskedQuestions: "الأسئلة الشائعة",
    resultsFound: "نتائج وجدت لـ",
    noResults:
      "لم يتم العثور على نتائج لبحثك. جرب كلمات مختلفة أو تصفح فئات المساعدة لدينا.",
    clearSearch: "مسح البحث",
    stillNeedHelp: "هل ما زلت بحاجة إلى مساعدة؟",
    supportTeamAvailable: "فريق الدعم لدينا متاح لمساعدتك في أي استفسارات",
    contactSupport: "الاتصال بالدعم",
    viewDocumentation: "عرض الوثائق",
  },
  hero: {
    line1: "منصة إدارة مالية",
    line2: "تحول بيانات عملك",
    line3: "إلى رؤى مالية استراتيجية",
    subtitle:
      "قم بتوحيد بياناتك المالية، وأتمتة العمليات، واكتساب رؤى استراتيجية من خلال منصتنا الشاملة لإدارة المالية.",
    trustedBy: "موثوق به من قبل",
    businesses: "شركة",
  },
  features: {
    title: "حوّل إدارتك المالية",
    subtitle: "منصتنا توحد بياناتك، وتؤتمت العمليات، وتقدم رؤى استراتيجية",
    exploreAll: "استكشاف جميع الميزات",
  },
  benefits: {
    title: "لماذا تختار ليدجرلي",
    subtitle:
      "تحكم في أموالك مع منصتنا القوية والبديهية المصممة للشركات الحديثة",
  },
  pricing: {
    title: "اختر الخطة المثالية لعملك",
    subtitle:
      "أسعار شفافة بدون رسوم خفية. تتضمن جميع الخطط ميزاتنا الأساسية مع خيارات متميزة للشركات النامية.",
    monthly: "شهري",
    annually: "سنوي",
    save: "وفر 25%",
    perMonth: "شهريًا",
    getStarted: "ابدأ الآن",
    startTrial: "ابدأ النسخة التجريبية المجانية",
  },
  subscribe: {
    title: "ابق على اطلاع مع ليدجرلي",
    subtitle:
      "اشترك في نشرتنا الإخبارية لتلقي آخر التحديثات والنصائح المالية والعروض الحصرية.",
  },
  footer: {
    product: "المنتج",
    resources: "الموارد",
    company: "الشركة",
    legal: "قانوني",
    allRightsReserved: "جميع الحقوق محفوظة",
    terms: "الشروط",
    privacy: "الخصوصية",
    cookies: "ملفات تعريف الارتباط",
    aboutUs: "من نحن",
    contact: "اتصل بنا",
    press: "الصحافة",
    blog: "المدونة",
    helpCenter: "مركز المساعدة",
    community: "المجتمع",
    webinars: "الندوات عبر الإنترنت",
    termsOfService: "شروط الخدمة",
    privacyPolicy: "سياسة الخصوصية",
    security: "الأمان",
    compliance: "الامتثال",
    integrations: "التكاملات",
    caseStudies: "دراسات الحالة",
    documentation: "الوثائق",
  },
  contact: {
    getInTouch: "تواصل معنا",
    questionsAboutLedgerly: "هل لديك أسئلة حول ليدجرلي؟ فريقنا هنا لمساعدتك.",
    sendUsMessage: "أرسل لنا رسالة",
    thankYouMessage: "شكرًا لرسالتك! سنرد عليك قريبًا.",
  },
  help: {
    companySetup: "كيف أقوم بإعداد شركتي في ليدجرلي؟",
    companySetupAnswer:
      "لإعداد شركتك، قم بتسجيل الدخول إلى حساب ليدجرلي الخاص بك وانتقل إلى الإعدادات > ملف الشركة. املأ تفاصيل شركتك، بما في ذلك الاسم والعنوان ومعلومات الضرائب وإعدادات السنة المالية. يمكنك أيضًا تحميل شعار شركتك وتعيين العملة الافتراضية الخاصة بك.",
    importData:
      "هل يمكنني استيراد البيانات من برنامج المحاسبة السابق الخاص بي؟",
    importDataAnswer:
      "نعم، يدعم ليدجرلي استيراد البيانات من معظم برامج المحاسبة الشائعة بما في ذلك QuickBooks وXero وSage. انتقل إلى الإعدادات > استيراد البيانات واتبع المعالج خطوة بخطوة لاستيراد مخطط الحسابات والجهات الاتصال والمعاملات.",
    connectBank: "كيف أقوم بربط حساباتي المصرفية؟",
    connectBankAnswer:
      "لربط حساباتك المصرفية، انتقل إلى الخدمات المصرفية > ربط الحساب. يدعم ليدجرلي أكثر من 10,000 مؤسسة مالية حول العالم. اتبع عملية الاتصال الآمنة، وستبدأ معاملاتك في المزامنة تلقائيًا.",
    transactionsUpdate: "كم مرة يتم تحديث معاملاتي المصرفية؟",
    transactionsUpdateAnswer:
      "يتم تحديث المعاملات المصرفية عادةً كل 24 ساعة. يمكنك أيضًا تحديث تغذيات البنك الخاصة بك يدويًا في أي وقت بالنقر فوق زر 'تحديث' في قسم الخدمات المصرفية.",
    createInvoices: "كيف أقوم بإنشاء وإرسال الفواتير؟",
    createInvoicesAnswer:
      "لإنشاء فاتورة، انتقل إلى المبيعات > الفواتير وانقر على 'فاتورة جديدة'. حدد عميلًا، وأضف عناصر السطر، وحدد شروط الدفع، وقم بتخصيص فاتورتك حسب الحاجة. يمكنك بعد ذلك إرسال الفاتورة مباشرة عبر البريد الإلكتروني، أو تنزيلها كملف PDF، أو الحصول على رابط قابل للمشاركة.",
    paymentMethods:
      "ما هي طرق الدفع التي يمكن لعملائي استخدامها لدفع الفواتير؟",
    paymentMethodsAnswer:
      "يدعم ليدجرلي طرق دفع متعددة بما في ذلك بطاقات الائتمان/الخصم، وتحويلات ACH، وPayPal، والتحويلات المصرفية. يمكنك تمكين أو تعطيل طرق الدفع في الإعدادات > خيارات الدفع.",
    reconcileAccounts: "كيف أقوم بتسوية حساباتي؟",
    reconcileAccountsAnswer:
      "لتسوية حساب، انتقل إلى الخدمات المصرفية > التسوية وحدد الحساب الذي تريد تسويته. أدخل الرصيد النهائي من كشف حسابك المصرفي وطابق المعاملات حتى يصبح الفرق صفرًا. انقر على 'إكمال التسوية' عند الانتهاء.",
    trackInventory: "هل يمكنني تتبع المخزون مع ليدجرلي؟",
    trackInventoryAnswer:
      "نعم، تتبع المخزون متاح في خطط Pro والخطط الأعلى. انتقل إلى المخزون > العناصر لإعداد منتجاتك، بما في ذلك التكلفة وسعر البيع والكمية الأولية. سيقوم ليدجرلي تلقائيًا بتحديث مستويات المخزون عند إنشاء أوامر الشراء أو فواتير المبيعات أو تعديلات المخزون.",
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      es: { translation: esTranslations },
      fr: { translation: frTranslations },
      ar: { translation: arTranslations },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
