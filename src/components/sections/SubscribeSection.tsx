import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";
import { useTranslation } from "react-i18next";
import { trackSubscription } from "@/lib/analytics";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FormData = z.infer<typeof formSchema>;

const SubscribeSection = () => {
  const { t, i18n } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribeResult, setSubscribeResult] = useState<{
    status: "success" | "error" | null;
    message: string;
  }>({ status: null, message: "" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubscribeResult({ status: null, message: "" });

    try {
      // Insert the email into the Supabase 'subscribers' table
      const { error } = await supabase
        .from("subscribers")
        .insert([{ email: data.email }]);

      if (error) throw error;

      // Track successful subscription
      trackSubscription(data.email);

      setSubscribeResult({
        status: "success",
        message: t("common.subscribeSuccess"),
      });
      reset();
    } catch (error) {
      console.error("Error subscribing:", error);
      setSubscribeResult({
        status: "error",
        message: t("common.subscribeError"),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-primary-50 dark:bg-gray-800">
      <div className="container-auth0 max-w-4xl mx-auto text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-300 mb-4"
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
        >
          {t("subscribe.title")}
        </h2>
        <p
          className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
          dir={i18n.language === "ar" ? "rtl" : "ltr"}
        >
          {t("subscribe.subtitle")}
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <input
                type="email"
                placeholder={t("common.emailPlaceholder")}
                className={`w-full px-4 py-3 rounded-md border ${errors.email ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent`}
                {...register("email")}
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="absolute text-sm text-red-500 mt-1 text-left">
                  {errors.email.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="bg-primary hover:bg-primary-600 text-white px-6 py-3 rounded-md whitespace-nowrap"
              disabled={isSubmitting}
            >
              {isSubmitting ? t("common.subscribing") : t("common.subscribe")}
            </Button>
          </div>

          {subscribeResult.status && (
            <div
              className={`mt-4 p-3 rounded-md ${subscribeResult.status === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
            >
              {subscribeResult.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default SubscribeSection;
