import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";
import { Check } from "lucide-react";

const formSchema = z.object({
  firstname: z.string().min(2, "First name must be at least 2 characters"),
  lastname: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name must be at least 2 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof formSchema>;

interface RegisterModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function RegisterModal({
  isOpen = true,
  onClose = () => {},
}: RegisterModalProps) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // First create the auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
      });

      if (authError) throw authError;

      // Generate username from email
      const username = data.email.split("@")[0];

      // Then create the user profile
      const { error: profileError } = await supabase.from("users").insert([
        {
          id: authData.user?.id,
          email: data.email,
          firstname: data.firstname,
          lastname: data.lastname,
          company: data.company,
          username: username,
          password: data.password, // Note: In production, you should hash this
        },
      ]);

      if (profileError) throw profileError;

      onClose();
      window.location.href = "https://app.get-ledger.org";
    } catch (error) {
      console.error("Registration error:", error);
      setError("root", {
        message: "An error occurred during registration",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white p-0 overflow-hidden rounded-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-primary p-6 text-white flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4">Benefits</h3>
            <ul className="space-y-3">
              {[
                "Free 14-day trial",
                "No credit card required",
                "Full access to all features",
                "24/7 customer support",
              ].map((benefit, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:w-2/3 p-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary">
                Create your account
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                Get started with your free 14-day trial today.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstname" className="text-gray-700">
                    First Name
                  </Label>
                  <Input
                    id="firstname"
                    {...register("firstname")}
                    placeholder="John"
                    className="w-full border-gray-300 focus:border-primary focus:ring-primary"
                  />
                  {errors.firstname && (
                    <p className="text-sm text-red-500">
                      {errors.firstname.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastname" className="text-gray-700">
                    Last Name
                  </Label>
                  <Input
                    id="lastname"
                    {...register("lastname")}
                    placeholder="Doe"
                    className="w-full border-gray-300 focus:border-primary focus:ring-primary"
                  />
                  {errors.lastname && (
                    <p className="text-sm text-red-500">
                      {errors.lastname.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  Work Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="john@company.com"
                  className="w-full border-gray-300 focus:border-primary focus:ring-primary"
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-gray-700">
                  Company
                </Label>
                <Input
                  id="company"
                  {...register("company")}
                  placeholder="Acme Inc"
                  className="w-full border-gray-300 focus:border-primary focus:ring-primary"
                />
                {errors.company && (
                  <p className="text-sm text-red-500">
                    {errors.company.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                  placeholder="••••••••"
                  className="w-full border-gray-300 focus:border-primary focus:ring-primary"
                />
                {errors.password && (
                  <p className="text-sm text-red-500">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {errors.root && (
                <p className="text-sm text-red-500">{errors.root.message}</p>
              )}

              <div className="text-sm text-gray-500">
                By signing up, you agree to our{" "}
                <a href="/terms" className="text-primary hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>
                .
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary-600 text-white"
              >
                Create Account
              </Button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or sign up with
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <svg
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                      clipRule="evenodd"
                    />
                  </svg>
                  GitHub
                </button>
              </div>

              <p className="text-center text-sm text-gray-600 mt-4">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-primary font-medium hover:underline"
                >
                  Log in
                </a>
              </p>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
