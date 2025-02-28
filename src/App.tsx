import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Pricing from "./pages/pricing";
import Blog from "./pages/blog";
import Features from "./pages/features";
import ModernAccounting from "./pages/blog/modern-accounting";
import FinancialEfficiency from "./pages/blog/financial-efficiency";
import FutureFintech from "./pages/blog/future-fintech";
import RootLayout from "./components/layout/RootLayout";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/features" element={<Features />} />
            <Route
              path="/blog/modern-accounting"
              element={<ModernAccounting />}
            />
            <Route
              path="/blog/financial-efficiency"
              element={<FinancialEfficiency />}
            />
            <Route path="/blog/future-fintech" element={<FutureFintech />} />
          </Route>
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
