import { Helmet } from 'react-helmet';
import PageTransition from '@/components/PageTransition';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PortfolioGrid from '@/components/PortfolioGrid';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <PageTransition>
      <Helmet>
        <title>Portfolio | 0xPatryk.dev</title>
        <meta name="description" content="Explore my projects spanning web3, automation, and performance engineering." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">My Portfolio</h1>
              <p className="text-muted-foreground text-lg">
                Explore my projects across web3, automation systems, and high-performance applications
              </p>
            </motion.div>
          </div>
          
          <PortfolioGrid />
        </div>
      </main>
      
      <Footer />
    </PageTransition>
  );
}
