import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata = {
  title: 'Riley Grotenhuis',
  description: 'Riley Grotenhuis',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background mb-32">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
