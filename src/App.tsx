import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import StudentsPage from "./pages/StudentsPage";
import ParentsPage from "./pages/ParentsPage";
import GalleryPage from "./pages/GalleryPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<NotFound />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/parents" element={<ParentsPage />} />
          <Route path="/blog" element={<NotFound />} />
          <Route path="/blog/:id" element={<NotFound />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contacts" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
