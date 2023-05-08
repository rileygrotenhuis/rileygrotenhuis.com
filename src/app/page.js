import Navbar from '@/components/navigation/Navbar';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Experience from '@/components/home/Experience';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
