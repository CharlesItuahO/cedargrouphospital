import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cedar Group Hospital | We Care About Your Health',
  description: 'Cedar Group Hospital in Festac Town, Lagos offers excellent health services, 24/7 availability, and modern facilities.',
  keywords: 'hospital in Festac Town, best hospital in Lagos, healthcare in Lagos, Cedar Group Hospital',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased bg-gray-50`} suppressHydrationWarning>
        <Navbar />
        <main className="flex-1 pt-[72px]">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
