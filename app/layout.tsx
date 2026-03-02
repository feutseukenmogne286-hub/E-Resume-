import type { Metadata } from 'next';
import './globals.css';
import { resume } from '@/data/resume';

const title = `${resume.basics.name} | Resume & Portfolio`;

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title,
  description: resume.summary,
  openGraph: {
    title,
    description: resume.summary,
    url: 'https://example.com',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
