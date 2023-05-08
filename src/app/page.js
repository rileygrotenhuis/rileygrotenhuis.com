import Navbar from '@/components/navigation/Navbar';
import Hero from '@/components/Home/Hero';
import About from '@/components/Home/About';
import Experience from '@/components/Home/Experience';
import Contact from '@/components/Home/Contact';

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
