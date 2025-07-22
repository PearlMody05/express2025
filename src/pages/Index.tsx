
import React, { useEffect, useRef } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import sherlock1 from '../assets/sherlock-1.jpg';
import sherlock2 from '../assets/sherlock-2.jpg';
import sherlock3 from '../assets/sherlock-3.jpg';

const Index: React.FC = () => {
  const [api, setApi] = React.useState<any>();
  const autoplayRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    document.title = 'eXpress - Public Speaking and Debating Committee';
  }, []);

  useEffect(() => {
    if (!api) return;

    // Auto-scroll every 4 seconds
    autoplayRef.current = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [api]);

  const sherlockImages = [
    { src: sherlock1, alt: "Sherlock Holmes in Victorian London" },
    { src: sherlock2, alt: "Baker Street 221B" },
    { src: sherlock3, alt: "Detective's Tools" }
  ];

  return (
    <>
      <ParticleBackground />
      <div className="relative min-h-screen flex flex-col items-center justify-center z-10 px-6 pt-20">
        <div className="flex flex-col items-center justify-center text-center max-w-5xl animate-fade-in">
          {/* Logo Section */}
          <div className="transform mb-8">
            <img 
              src="/lovable-uploads/e3a10d0d-4f1e-49a1-8b38-b48a1cefb127.png" 
              alt="DJS eXpress" 
              className="w-64 h-auto mx-auto"
            />
            <p className='font-semibold font-serif text-4xl'>#Express to Inspire</p>
            <h2 className='pt-10 text-2xl '>Upcoming Events: </h2> 
          </div>
          
          {/* Sherlock Holmes Carousel */}
          <div className="w-full max-w-4xl mb-8 p-5">
            <Carousel 
              className="w-full"
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <CarouselContent>
                {sherlockImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[400px] object-cover rounded-lg border border-sherlock-bronze shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-lg"></div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 bg-sherlock-shadow/80 border-sherlock-gold text-sherlock-gold hover:bg-sherlock-gold hover:text-sherlock-shadow" />
              <CarouselNext className="right-4 bg-sherlock-shadow/80 border-sherlock-gold text-sherlock-gold hover:bg-sherlock-gold hover:text-sherlock-shadow" />
            </Carousel>
          </div>
          
          {/* Call to Action */}
          <div className="mt-4">
            <Link to="/about" className="sherlock-button group">
              <span className="font-semibold tracking-wider">ENTER THE WORLD OF MYSTERIES</span>
              <ChevronRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          {/* Atmospheric Quote */}
          <div className="mt-8 max-w-2xl">
            <blockquote className="text-sherlock-parchment/90 text-lg italic font-light leading-relaxed">
              "When you have eliminated the impossible, whatever remains, however improbable, must be the truth."
            </blockquote>
            <cite className="text-sherlock-gold text-sm mt-2 block mb-10">— Sherlock Holmes</cite>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
