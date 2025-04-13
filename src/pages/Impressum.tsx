
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Impressum</h1>
          
          <div className="prose prose-lg dark:prose-invert">
            <h2 className="text-2xl font-semibold mt-6 mb-4">Angaben gemäß § 5 TMG</h2>
            <p>Patryk Stemporowski<br />
            Langenackerstr 11<br />
            76189 Karlsruhe</p>
            
            <h2 className="text-2xl font-semibold mt-6 mb-4">Kontakt</h2>
            <p>E-Mail: patryk.stemporowski@gmail.com</p>
            
            <h2 className="text-2xl font-semibold mt-6 mb-4">Haftung für Inhalte</h2>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu 
            forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
            
            <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
            Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der 
            Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen 
            werden wir diese Inhalte umgehend entfernen.</p>
            
            <h2 className="text-2xl font-semibold mt-6 mb-4">Haftung für Links</h2>
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten 
            wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum 
            Zeitpunkt der Verlinkung nicht erkennbar.</p>
            
            <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer 
            Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend 
            entfernen.</p>
            
            <h2 className="text-2xl font-semibold mt-6 mb-4">Urheberrecht</h2>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
            
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
