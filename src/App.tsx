import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./context/LanguageContext";
import "./lib/i18n";
import Home from "./components/home";
import Pricing from "./pages/pricing";
import Blog from "./pages/blog";
import Features from "./pages/features";
import ModernAccounting from "./pages/blog/modern-accounting";
import FinancialEfficiency from "./pages/blog/financial-efficiency";
import FutureFintech from "./pages/blog/future-fintech";
import Security from "./pages/security";
import Contact from "./pages/contact";
import Compliance from "./pages/compliance";
import Integrations from "./pages/integrations";
import CaseStudies from "./pages/case-studies";
import Webinars from "./pages/webinars";
import Help from "./pages/help";
import RootLayout from "./components/layout/RootLayout";
import routes from "tempo-routes";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route element={<RootLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/features" element={<Features />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/compliance" element={<Compliance />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/help" element={<Help />} />
              <Route
                path="/blog/modern-accounting"
                element={<ModernAccounting />}
              />
              <Route
                path="/blog/financial-efficiency"
                element={<FinancialEfficiency />}
              />
              <Route path="/blog/future-fintech" element={<FutureFintech />} />
              <Route path="/security" element={<Security />} />
            </Route>
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </Suspense>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
