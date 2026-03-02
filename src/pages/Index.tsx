import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Services from '@/components/Services';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Grainient from '@/components/Grainient';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Grainient background */}
      <div className="fixed inset-0 z-0">
        <Grainient
          color1="#df9fdd"
          color2="#602424"
          color3="#4d4249"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={0.9}
          warpAmplitude={50}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0.1}
          grainScale={2}
          grainAnimated={false}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={0.9}
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Services />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
