import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import UpcomingEvents from "./pages/UpcomingEvents";
import PreviousEvents from "./pages/PreviousEvents";
import Team from "./pages/Team";
import Expresso from "./pages/Expresso";
import Contact from "./pages/Contact";
import Certificates from "./pages/Certificates"; // Import the new page
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/upcoming-events" element={<UpcomingEvents />} />
            <Route path="/previous-events" element={<PreviousEvents />} />
            <Route path="/team" element={<Team />} />
            <Route path="/expresso" element={<Expresso />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </>
);

export default App;
