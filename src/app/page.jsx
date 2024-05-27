import About from '~/components/About';
import Hero from '~/components/Hero';
import Projects from '~/components/Project';
import Contact from '~/components/Contact';
export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
