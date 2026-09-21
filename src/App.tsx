import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Services from "./pages/Services.tsx";
import ServiceDetail from "./pages/ServiceDetail.tsx";
import Blog from "./pages/Blog.tsx";
import ArticleDetail from "./pages/ArticleDetail.tsx";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import KeywordPage from "./pages/KeywordPage.tsx";
import Sitemap from "./pages/Sitemap.tsx";
import WhatsAppFloating from "./components/WhatsAppFloating.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/plan-du-site" element={<Sitemap />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<ArticleDetail />} />
          <Route path="/projets/:slug" element={<ProjectDetail />} />
          <Route path="/assistance-maitrise-ouvrage-mali" element={<KeywordPage />} />
          <Route path="/etude-hydrologique-mali" element={<KeywordPage />} />
          <Route path="/bureau-etudes-hydraulique-mali" element={<KeywordPage />} />
          <Route path="/dossier-appel-offres-mali" element={<KeywordPage />} />
          <Route path="/controle-technique-travaux-mali" element={<KeywordPage />} />
          <Route path="/:slug" element={<ServiceDetail />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppFloating />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
