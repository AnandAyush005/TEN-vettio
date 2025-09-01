import Hero from './Hero';
import TrustedBy from './TrustedBy';

import HowItWorks from './HowItWorks';
import Community from './Community';
import Footer from './Footer';
import Magic from './Magic';
import Talent from './Talent';

import { BookingProvider } from "../../app/BookingProvider";


export default function HomePage() {
  return (
    <BookingProvider>
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <TrustedBy />
      <Talent />
      <Magic />
      <HowItWorks />
      <Community />
      <Footer />
    </main>
    </BookingProvider>
  );
}
