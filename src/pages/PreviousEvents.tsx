import React, { useEffect, useRef } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// Import event images
import p1 from '../images/pil/p1.png';
import p2 from '../images/pil/p2.jpg';
import i1 from '../images/illuminare/i1.jpg';
import i2 from '../images/illuminare/i2.jpg';
import i3 from '../images/illuminare/i3.jpeg';
interface EventImage {
  src: string;
  alt: string;
}

interface Event {
  title: string;
  description: string;
  images: EventImage[];
}

const PreviousEvents: React.FC = () => {
  useEffect(() => {
    document.title = 'Previous Events - eXpress';
  }, []);

  const events: Event[] = [
    {
      title: "The Pilot: Episode 1",
      description: "The Pilot: Episode One was DJS eXpress' inter-college event that brought the world of sitcoms to life on campus. With meme battles, heated debates, quirky monologues, and hilarious parodies, participants showcased their wit, creativity, and spontaneity across four thrilling rounds. The event was packed with laughter, iconic pop culture moments, and electrifying performances — all making for an unforgettable experience that truly set the stage for what DJS eXpress stands for.",
      images: [
        { src: p1, alt: "The Pilot Episode 1 - 1" },
        { src: p2, alt: "The Pilot Episode 1 - 2" },
        { src: p3, alt: "The Pilot Episode 1 - 3" }
      ]
    },
    {
      title: "Illuminare",
      description: "Illuminare was a spectacular event that brought together creativity, knowledge, and innovation. Participants engaged in enlightening discussions, showcased their talents, and participated in activities that truly illuminated minds. The event fostered learning, creativity, and intellectual growth among students.",
      images: [
        { src: i1, alt: "Illuminare - 1" },
        { src: i2, alt: "Illuminare - 2" },
        { src: i3, alt: "Illuminare - 3" }
      ]
    },
    {
      title: "Aryavarta 3.0",
      description: "Aryavarta 3.0 marked the pinnacle of cultural celebration and intellectual discourse. This grand event brought together students from across colleges to participate in debates, cultural performances, and knowledge competitions. It celebrated India's rich heritage while fostering modern thinking and innovation.",
      images: [
        { src: a1, alt: "Aryavarta 3.0 - 1" },
        { src: a2, alt: "Aryavarta 3.0 - 2" },
        { src: a3, alt: "Aryavarta 3.0 - 3" }
      ]
    },
    {
      title: "Court Charades",
      description: "Courtroom Charades is a battle of critical thinking, debate, and analytical skills. Participants form pairs and must defend their client while their opponents argue against them. Each team is assigned a case and their position, with 30 minutes to prepare using a provided dossier of basic case details. The goal: convince the audience, jury, and judge why their client is innocent — or guilty. It's a thrilling clash of wit, strategy, and persuasion — perfect for anyone who loves a good intellectual showdown.",
      images: [
        { src: c1, alt: "Court Charades - 1" },
        { src: c2, alt: "Court Charades - 2" },
        { src: c3, alt: "Court Charades - 3" }
      ]
    },
    {
      title: "Plot Pursuit | Verse Voyage",
      description: "This event was a perfect combination of treasure hunt and creativity. In this event the participants were given clues which were cleverly scattered around in the college premises, with the help of these clues the participants wove amazing stories.",
      images: [
        { src: p1, alt: "Plot Pursuit - 1" },
        { src: i1, alt: "Verse Voyage - 1" },
        { src: a1, alt: "Plot Pursuit - 2" }
      ]
    },
    {
      title: "Tick Tock Fall",
      description: "Ticktock fall was a one-of-its-kind balloon debate in which participants imagined themselves in a hot air balloon which is sinking. The goal was to win approval of the audience by persuading them why they should not be thrown out of the balloon as there was not enough room for everyone to stay in the balloon and someone had to be ejected to save the rest.",
      images: [
        { src: t1, alt: "Tick Tock Fall - 1" },
        { src: p2, alt: "Tick Tock Fall - 2" },
        { src: a1, alt: "Tick Tock Fall - 3" }
      ]
    },
    {
      title: "X-CON",
      description: "International MUN brought the world stage to our college! Students from various colleges converged to engage in lively debates, representing assigned countries. They tackled complex global issues, honing their research, public speaking, and diplomacy skills in a dynamic and competitive environment. It was a thrilling experience that fostered international understanding among many students, shaping future global leaders.",
      images: [
        { src: i2, alt: "X-CON - 1" },
        { src: a1, alt: "X-CON - 2" },
        { src: p1, alt: "X-CON - 3" }
      ]
    },
    {
      title: "Aryavarta 2.0",
      description: "Aryavarta 2.0 celebrated the vibrant spirit of Indian Culture. This captivating interdepartmental event consisted of two exhilarating days filled with knowledge, camaraderie, and excitement, deepening one's appreciation for our glorious past. Participants engaged in thrilling quizzes and lively debates promoting India's rich heritage and legacy.",
      images: [
        { src: a2, alt: "Aryavarta 2.0 - 1" },
        { src: p2, alt: "Aryavarta 2.0 - 2" },
        { src: i1, alt: "Aryavarta 2.0 - 3" }
      ]
    },
    {
      title: "Aryavarta 1.0",
      description: "This fun competition between different college departments brought everyone together to celebrate India's incredible heritage. Students put their knowledge to the test in a challenging quiz and a lively debate about important Indian topics. It was an exciting event that sparked a love for learning about India's rich history and traditions, leaving everyone feeling proud and connected to their roots.",
      images: [
        { src: a2, alt: "Aryavarta 1.0 - 1" },
        { src: p2, alt: "Aryavarta 1.0 - 2" },
        { src: i2, alt: "Aryavarta 1.0 - 3" }
      ]
    }
  ];

  const EventCarousel: React.FC<{ images: EventImage[]; eventTitle: string }> = ({ images, eventTitle }) => {
    const [api, setApi] = React.useState<any>();
    const autoplayRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
      if (!api) return;

      // Auto-scroll every 3 seconds
      autoplayRef.current = setInterval(() => {
        api.scrollNext();
      }, 3000);

      return () => {
        if (autoplayRef.current) {
          clearInterval(autoplayRef.current);
        }
      };
    }, [api]);

    return (
      <Carousel 
        className="w-full max-w-sm"
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-2xl border-4 border-gradient-primary shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    );
  };

  return (
    <>
      <ParticleBackground />
      <div className="relative min-h-screen z-10 px-6 py-32">
        <div className="container mx-auto max-w-7xl">
          {/* Page Title */}
          <div className="text-center mb-20">
            <h1 className="text-6xl font-bold text-transparent bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text mb-6">
              Previous Events
            </h1>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
              Relive the memorable moments from our past events that shaped minds, sparked debates, and created lasting memories.
            </p>
          </div>

          {/* Events Grid */}
          <div className="space-y-32">
            {events.map((event, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Event Image Carousel */}
                <div className="flex-shrink-0">
                  <EventCarousel images={event.images} eventTitle={event.title} />
                </div>

                {/* Event Content */}
                <div className="flex-1 space-y-6">
                  <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text">
                    {event.title}
                  </h2>
                  <p className="text-foreground/90 text-lg leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviousEvents;