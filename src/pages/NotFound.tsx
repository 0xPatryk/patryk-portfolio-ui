
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <PageTransition>
      <Helmet>
        <title>Page Not Found | Alex.dev</title>
      </Helmet>
      
      <Navbar />
      
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <h1 className="text-9xl font-bold text-brand-blue">404</h1>
          <h2 className="text-2xl font-bold mt-4 mb-2">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium transition-all"
          >
            <ArrowLeft size={16} className="mr-2" />
            Return Home
          </Link>
        </motion.div>
      </main>
      
      <Footer />
    </PageTransition>
  );
}
