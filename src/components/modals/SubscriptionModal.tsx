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
import { redirectToCheckout } from "@/lib/stripe";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
});

type FormData = z.infer<typeof formSchema>;

interface SubscriptionModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  packageName: string;
  priceId: string;
}

export default function SubscriptionModal({
  isOpen = true,
  onClose = () => {},
  packageName,
  priceId,
}: SubscriptionModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // First, create the user in Supabase
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: Math.random().toString(36).slice(-8), // Generate a random password
        options: {
          data: {
            name: data.name,
            company: data.company,
          },
        },
      });

      if (authError) throw authError;

      // Redirect to Stripe checkout
      await redirectToCheckout(priceId);
      onClose();
    } catch (error) {
      console.error("Error during subscription:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-gray-900">
            Subscribe to {packageName}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Enter your details to start your subscription.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="John Doe"
              className="w-full"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Work Email</Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder="john@company.com"
              className="w-full"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input
              id="company"
              {...register("company")}
              placeholder="Acme Inc."
              className="w-full"
            />
            {errors.company && (
              <p className="text-sm text-red-500">{errors.company.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Continue to Payment
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
