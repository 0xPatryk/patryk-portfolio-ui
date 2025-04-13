
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg dark:prose-invert">
            <h2 className="text-2xl font-semibold mt-6 mb-4">1. Datenschutz auf einen Blick</h2>
            
            <h3 className="text-xl font-semibold mt-5 mb-3">Allgemeine Hinweise</h3>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
            persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen 
            Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
            
            <h3 className="text-xl font-semibold mt-5 mb-3">Datenerfassung auf dieser Website</h3>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
            können Sie dem Impressum dieser Website entnehmen.</p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">Wie erfassen wir Ihre Daten?</h4>
            <p>Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
            z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
            
            <p>Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind 
            vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). 
            Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.</p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">Wofür nutzen wir Ihre Daten?</h4>
            <p>Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
            Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
            
            <h4 className="text-lg font-semibold mt-4 mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
            <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
            gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder 
            Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie 
            sich jederzeit an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen 
            Aufsichtsbehörde zu.</p>
            
            <h2 className="text-2xl font-semibold mt-6 mb-4">2. Hosting</h2>
            <p>Diese Website wird auf Servern von Vercel gehostet. Die Vercel Inc. ist ein Cloud-Platform-as-a-Service, 
            die es Entwicklern ermöglicht, Websites und Web-Services zu erstellen, zu hosten und zu skalieren.</p>
            
            <h3 className="text-xl font-semibold mt-5 mb-3">Vercel</h3>
            <p>Wir nutzen Vercel zum Hosting unserer Webseite. Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, 
            Walnut, CA 91789, USA (nachfolgend Vercel).</p>
            
            <p>Wenn Sie unsere Website besuchen, werden Ihre personenbezogenen Daten auf den Servern von Vercel 
            verarbeitet. Hierbei können auch personenbezogene Daten an die Muttergesellschaft von Vercel in die 
            USA übermittelt werden. Die Datenübertragung in die USA wird auf die EU-Standardvertragsklauseln gestützt. 
            Details finden Sie hier: 
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              https://vercel.com/legal/privacy-policy
            </a>.</p>
            
            <p>Weitere Informationen entnehmen Sie der Datenschutzerklärung von Vercel: 
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              https://vercel.com/legal/privacy-policy
            </a>.</p>
            
            <h2 className="text-2xl font-semibold mt-6 mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            
            <h3 className="text-xl font-semibold mt-5 mb-3">Datenschutz</h3>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre 
            personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie 
            dieser Datenschutzerklärung.</p>
            
            <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
            Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende 
            Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie 
            und zu welchem Zweck das geschieht.</p>
            
            <p className="mt-8">
              <Link to="/" className="text-brand-blue hover:underline">
                Zurück zur Startseite
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </PageTransition>
  );
}
