import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Link from 'next/link';
import { AppContextProvider } from '@/context/app-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Beaten Games',
  description: 'The great list of your beaten games',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContextProvider>
          <ThemeProvider attribute="class" defaultTheme="system">
            {children}
          </ThemeProvider> 
        </AppContextProvider>
      </body>
    </html>
  );
}
