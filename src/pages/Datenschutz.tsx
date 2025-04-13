
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Datenschutz() {
  return (
    <PageTransition>
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 py-12 mt-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg dark:prose-invert">
            <h2 className="text-2xl font-semibold mt-6 mb-4">1. Privacy at a Glance</h2>
            
            <h3 className="text-xl font-semibold mt-5 mb-3">General Information</h3>
            <p>The following information provides a simple overview of what happens to your personal data when you 
            visit this website. Personal data is any data that can be used to personally identify you. For detailed 
            information on the subject of data protection, please refer to our privacy policy listed below.</p>
            
            <h3 className="text-xl font-semibold mt-5 mb-3">Data Collection on this Website</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">Who is responsible for data collection on this website?</h4>
            <p>Data processing on this website is carried out by the website operator. You can find their contact 
            details in the Legal Notice of this website.</p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">How do we collect your data?</h4>
            <p>Your data is collected when you provide it to us. This could be data you enter in a contact form, 
            for example.</p>
            
            <p>Other data is automatically collected by our IT systems when you visit the website. This is primarily 
            technical data (e.g., internet browser, operating system, or time of page access). This data is collected 
            automatically as soon as you enter our website.</p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">What do we use your data for?</h4>
            <p>Some of the data is collected to ensure error-free provision of the website. Other data may be used 
            to analyze your user behavior.</p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">What rights do you have regarding your data?</h4>
            <p>You have the right to receive information about the origin, recipient, and purpose of your stored 
            personal data free of charge at any time. You also have the right to request the correction or deletion 
            of this data. You can contact us at any time regarding this and other questions on the subject of data 
            protection. You also have the right to lodge a complaint with the competent supervisory authority.</p>
            
            <h2 className="text-2xl font-semibold mt-6 mb-4">2. Hosting</h2>
            <p>This website is hosted on Vercel servers. Vercel is a cloud platform-as-a-service that enables developers 
            to create, host, and scale websites and web services.</p>
            
            <h3 className="text-xl font-semibold mt-5 mb-3">Vercel</h3>
            <p>We use Vercel for hosting our website. The provider is Vercel Inc., 340 S Lemon Ave #4133, 
            Walnut, CA 91789, USA (hereinafter "Vercel").</p>
            
            <p>When you visit our website, your personal data may be processed on Vercel's servers. Personal data may 
            also be transmitted to Vercel's parent company in the USA. Data transfer to the USA is based on the EU 
            Standard Contractual Clauses. For details, please see: 
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              https://vercel.com/legal/privacy-policy
            </a>.</p>
            
            <p>For more information, please refer to Vercel's privacy policy: 
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              https://vercel.com/legal/privacy-policy
            </a>.</p>
            
            <h2 className="text-2xl font-semibold mt-6 mb-4">3. General Information and Mandatory Information</h2>
            
            <h3 className="text-xl font-semibold mt-5 mb-3">Data Protection</h3>
            <p>The operators of these pages take the protection of your personal data very seriously. We treat your 
            personal data confidentially and in accordance with statutory data protection regulations and this 
            privacy policy.</p>
            
            <p>When you use this website, various personal data may be collected. Personal data is data that can be 
            used to personally identify you. This privacy policy explains what data we collect and what we use it for. 
            It also explains how and for what purpose this is done.</p>
            
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
