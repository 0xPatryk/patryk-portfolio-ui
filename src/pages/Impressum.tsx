
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Impressum() {
  return (
    <PageTransition>
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 py-12 mt-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Legal Notice</h1>
          
          <div className="prose prose-lg dark:prose-invert">
            <h2 className="text-2xl font-semibold mt-6 mb-4">Information according to § 5 TMG</h2>
            <p>Patryk Stemporowski<br />
            Langenackerstr 11<br />
            76189 Karlsruhe<br />
            Germany</p>
            
            <h2 className="text-2xl font-semibold mt-6 mb-4">Contact</h2>
            <p>Email: patryk.stemporowski@gmail.com</p>
            
            <h2 className="text-2xl font-semibold mt-6 mb-4">Liability for Content</h2>
            <p>As a service provider, we are responsible for our own content on these pages in accordance with § 7 
            paragraph 1 TMG under general law. According to §§ 8 to 10 TMG, however, we are not obligated as a 
            service provider to monitor transmitted or stored information from third parties or to investigate 
            circumstances that indicate illegal activity.</p>
            
            <p>Obligations to remove or block the use of information under general laws remain unaffected. However, 
            liability in this regard is only possible from the time of knowledge of a specific legal violation. 
            Upon becoming aware of corresponding legal violations, we will remove this content immediately.</p>
            
            <h2 className="text-2xl font-semibold mt-6 mb-4">Liability for Links</h2>
            <p>Our offer contains links to external websites of third parties, on whose contents we have no influence. 
            Therefore, we cannot assume any liability for these external contents. The respective provider or operator 
            of the linked pages is always responsible for the content of the linked pages. The linked pages were checked 
            for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of 
            linking.</p>
            
            <p>However, a permanent control of the content of the linked pages is not reasonable without concrete 
            evidence of a violation of law. Upon notification of violations, we will remove such links immediately.</p>
            
            <h2 className="text-2xl font-semibold mt-6 mb-4">Copyright</h2>
            <p>The content and works on these pages created by the site operators are subject to German copyright law. 
            Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of 
            the copyright law requires the written consent of its respective author or creator.</p>
            
            <p className="mt-8">
              <Link to="/" className="text-brand-blue hover:underline">
                Back to Homepage
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
