import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!name || name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!company) {
      newErrors.company = "Company name is required";
    }

    if (!message || message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Reset form
      setName("");
      setEmail("");
      setCompany("");
      setPhone("");
      setMessage("");
      setErrors({});

      // Show success message
      alert(
        i18n.language === "ar"
          ? "شكرًا لرسالتك! سنرد عليك قريبًا."
          : "Thank you for your message! We'll get back to you shortly.",
      );
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <main className="pt-20 px-4">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-primary-50 dark:bg-gray-800 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary-100 dark:bg-primary-900/30 rounded-full filter blur-3xl opacity-50"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary-100 dark:bg-primary-900/30 rounded-full filter blur-3xl opacity-50"></div>

          <div className="container-auth0 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-2 bg-primary-100 dark:bg-primary-900/50 rounded-full mb-4">
                <Mail className="h-6 w-6 text-primary dark:text-primary-300" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {i18n.language === "ar" ? "تواصل معنا" : "Get in Touch"}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                {i18n.language === "ar"
                  ? "هل لديك أسئلة حول ليدجرلي؟ فريقنا هنا لمساعدتك."
                  : "Have questions about Ledgerly? Our team is here to help you."}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container-auth0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-auth0 border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {i18n.language === "ar"
                    ? "أرسل لنا رسالة"
                    : "Send us a message"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {i18n.language === "ar"
                        ? "الاسم الكامل *"
                        : "Full Name *"}
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {i18n.language === "ar"
                        ? "البريد الإلكتروني *"
                        : "Email Address *"}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@company.com"
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {i18n.language === "ar"
                        ? "اسم الشركة *"
                        : "Company Name *"}
                    </label>
                    <Input
                      id="company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Acme Inc."
                      className={errors.company ? "border-red-500" : ""}
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {i18n.language === "ar"
                        ? "رقم الهاتف (اختياري)"
                        : "Phone Number (Optional)"}
                    </label>
                    <Input
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      {i18n.language === "ar" ? "الرسالة *" : "Message *"}
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      className={errors.message ? "border-red-500" : ""}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-600 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? i18n.language === "ar"
                        ? "جاري الإرسال..."
                        : "Sending..."
                      : i18n.language === "ar"
                        ? "إرسال الرسالة"
                        : "Send Message"}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    {i18n.language === "ar"
                      ? "معلومات الاتصال"
                      : "Contact Information"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    {i18n.language === "ar"
                      ? "فريقنا متاح لمساعدتك في أي استفسارات حول منصتنا، الأسعار، أو لجدولة عرض توضيحي مخصص."
                      : "Our team is available to assist you with any questions about our platform, pricing, or to schedule a personalized demo."}
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <Mail className="h-6 w-6 text-primary dark:text-primary-300" />
                      ),
                      title:
                        i18n.language === "ar"
                          ? "راسلنا عبر البريد الإلكتروني"
                          : "Email Us",
                      content: "support@ledgerly.com",
                      description:
                        i18n.language === "ar"
                          ? "للاستفسارات العامة والدعم"
                          : "For general inquiries and support",
                    },
                    {
                      icon: (
                        <Phone className="h-6 w-6 text-primary dark:text-primary-300" />
                      ),
                      title: i18n.language === "ar" ? "اتصل بنا" : "Call Us",
                      content: "+1 (555) 123-4567",
                      description:
                        i18n.language === "ar"
                          ? "من الاثنين إلى الجمعة، 9 صباحًا إلى 6 مساءً بتوقيت شرق الولايات المتحدة"
                          : "Monday to Friday, 9am to 6pm EST",
                    },
                    {
                      icon: (
                        <MapPin className="h-6 w-6 text-primary dark:text-primary-300" />
                      ),
                      title: i18n.language === "ar" ? "زورنا" : "Visit Us",
                      content: "123 Finance Street, Suite 100",
                      description: "New York, NY 10001, USA",
                    },
                    {
                      icon: (
                        <Clock className="h-6 w-6 text-primary dark:text-primary-300" />
                      ),
                      title:
                        i18n.language === "ar"
                          ? "ساعات العمل"
                          : "Business Hours",
                      content: "Monday - Friday: 9:00 AM - 6:00 PM EST",
                      description:
                        i18n.language === "ar"
                          ? "السبت والأحد: مغلق"
                          : "Saturday & Sunday: Closed",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="p-3 bg-primary-50 dark:bg-primary-900/30 rounded-lg h-fit">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-200 font-medium">
                          {item.content}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-6 bg-primary-50 dark:bg-gray-800 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {i18n.language === "ar"
                      ? "هل تبحث عن عرض توضيحي؟"
                      : "Looking for a demo?"}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {i18n.language === "ar"
                      ? "جدولة عرض توضيحي مخصص مع أحد متخصصي المنتج لمعرفة كيف يمكن لـ ليدجرلي تحويل عملياتك المالية."
                      : "Schedule a personalized demo with one of our product specialists to see how Ledgerly can transform your financial operations."}
                  </p>
                  <Button className="bg-primary hover:bg-primary-600 text-white">
                    {i18n.language === "ar"
                      ? "جدولة عرض توضيحي"
                      : "Schedule a Demo"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
