import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import LoginModal from "../modals/LoginModal";
import RegisterModal from "../modals/RegisterModal";
import AIChat from "../chat/AIChat";

export default function RootLayout() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Navbar
        onOpenLogin={() => setIsLoginModalOpen(true)}
        onOpenRegister={() => setIsRegisterModalOpen(true)}
      />
      <Outlet />
      <Footer />

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />

      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />

      <AIChat
        apiKey=""
        welcomeMessage="Hello! I'm your AI assistant for Ledgerly. How can I help you today?"
        modelName="gpt-3.5-turbo"
      />
    </div>
  );
}
