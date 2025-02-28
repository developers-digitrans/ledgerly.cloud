import React, { useState } from "react";
import Navbar from "./layout/Navbar";
import HeroSection from "./sections/HeroSection";
import BenefitsSection from "./sections/BenefitsSection";
import FeaturesSection from "./sections/FeaturesSection";
import PricingSection from "./sections/PricingSection";
import DemoModal from "./modals/DemoModal";
import RegisterModal from "./modals/RegisterModal";
import LoginModal from "./modals/LoginModal";
import AIChat from "./chat/AIChat";

interface HomeProps {
  isLoggedIn?: boolean;
}

export default function Home({ isLoggedIn = false }: HomeProps) {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleDemoSubmit = (data: any) => {
    console.log("Demo form submitted:", data);
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Navbar
        isLoggedIn={isLoggedIn}
        onOpenRegister={() => setIsRegisterModalOpen(true)}
        onOpenLogin={() => setIsLoginModalOpen(true)}
      />

      <main>
        <HeroSection onDemoClick={() => setIsDemoModalOpen(true)} />
        <FeaturesSection />
        <BenefitsSection />
        <PricingSection />
      </main>

      <DemoModal
        open={isDemoModalOpen}
        onOpenChange={setIsDemoModalOpen}
        onSubmit={handleDemoSubmit}
      />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

      <AIChat
        apiKey=""
        welcomeMessage="Hello! I'm your AI assistant for Ledgerly. How can I help you today?"
        modelName="gpt-3.5-turbo"
      />
    </div>
  );
}
