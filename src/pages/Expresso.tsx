
import React, { useEffect, useState } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import { ChevronRight, BookOpen, ExternalLink } from 'lucide-react';

type Edition = {
  number: number;
  title: string;
  url: string;
  description: string;
};

const Expresso: React.FC = () => {
  useEffect(() => {
    document.title = 'eXpresso - express';
  }, []);

  const [selectedEdition, setSelectedEdition] = useState<Edition | null>(null);

  const editions: Edition[] = [
    {
      number: 1,
      title: "First Edition",
      url: "https://drive.google.com/file/d/1P-3Pp2KMMoCAtD9yBggTAuDKxx6ovpop/view?usp=sharing",
      description: "What If We Played with Color? \n From thought experiments to Holi hues — explore the Vile Parle theme page and more."
    },
    {
      number: 2,
      title: "Second Edition",
      url: "https://drive.google.com/file/d/1U1IZt1Tb2HXHgOJFXKP6cYEH-16oLGDA/view?usp=sharing",
      description: "Wings, Wins, and What’s Next ?  Air India’s last 747 takes a bow, and we dive into games that keep us flying high."
    },
    {
      number: 3,
      title: "Third Edition",
      url: "https://drive.google.com/file/d/1CKbazjDtGC3EAKfjvkSGxIlto0-MK46Y/view?usp=sharing",
      description: "Stories of Our Time..Where literature meets the headlines — reflecting the world through words."
    },
    {
      number: 4,
      title: "March Edition",
      url: "https://drive.google.com/file/d/1LkocHCdiRoL-__fLOfEp0Xrtiqsy1TgT/view?usp=sharing",
      description: "Fresh perspectives and creative insights from our latest issue."
    },
    {
      number: 5,
      title: "April Edition",
      url: "https://drive.google.com/file/d/1htG7co4aO1glDJXAzVVmaZYsntWBE5Kn/view?usp=sharing",
      description: "Discover new voices and stories in our April collection."
    },
    {
      number: 6,
      title: "May Edition",
      url: "https://drive.google.com/file/d/1oT-qI5Ax_mUi0p7XPhjlFRNwwX241Dpi/view?usp=sharing",
      description: "Our comprehensive May edition featuring the best content."
    },
    {
      number: 7,
      title: "June Edition",
      url: "https://drive.google.com/file/d/16UeiAT9rFDROwK7skPAuENPBRv-2TRZ_/view?usp=drivesdk",
      description: "Fresh insights and stories from our June collection."
    },
    {
      number: 8,
      title: "July Edition",
      url: "https://drive.google.com/file/d/1g2vhI__DqiWdiKG00hyqI9kfzheizma5/view?usp=sharing",
      description: "Dive into our July edition for the latest articles and stories."
    },
    {
      number: 9,
      title: "August Edition",
      url: "https://drive.google.com/file/d/1YkEkHIzJA4QJbJTljuKT3AYP5cSx9Vrb/view?usp=sharing",
      description: "Explore new narratives and ideas in our August issue."
    }
  ];

  const handleOpenEdition = (edition: Edition) => {
    window.open(edition.url, "_blank");
  };

  const getEmbedUrl = (url: string): string => {
    // Convert Google Drive view URL to embed URL
    return url.replace(/\/view\?usp=(sharing|drivesdk)/, "/preview");
  };

  return (
    <>
      <ParticleBackground />
      <div className="relative min-h-screen flex flex-col items-center justify-center z-10 px-6 py-20 md:py-24">
        <div className="flex flex-col items-center justify-center text-center max-w-6xl w-full">
          <h1 className="text-6xl md:text-7xl font-bold text-express-purple mb-8 font-playfair">
            eXpresso
          </h1>
          
          <p className="text-xl text-center text-gray-300 max-w-2xl mx-auto mb-12">
            Our literary magazine featuring articles, stories, poems, and insights about public speaking, debating, and communication skills.
          </p>
          
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {editions.map((edition) => (
              <div 
                key={edition.number}
                className="bg-black/30 backdrop-blur-sm border border-express-purple/20 rounded-xl overflow-hidden hover:border-express-purple/50 transition-all duration-300 group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-express-purple">{edition.title}</h3>
                    <span className="bg-express-purple/20 text-express-purple px-3 py-1 rounded-full text-sm">
                      Edition {edition.number}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{edition.description}</p>
                  
                  <div className="flex gap-4 justify-center">
                    <button 
                      onClick={() => setSelectedEdition(edition)}
                      className="sherlock-button group p-3 rounded-full"
                      title="Preview Edition"
                    >
                      <BookOpen size={20} />
                    </button>
                    
                    <button 
                      onClick={() => handleOpenEdition(edition)}
                      className="sherlock-button group p-3 rounded-full"
                      title="Open in Drive"
                    >
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {selectedEdition && (
            <div className="w-full">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-express-purple">
                  Previewing: {selectedEdition.title}
                </h2>
                <button 
                  onClick={() => setSelectedEdition(null)}
                  className="text-white/70 hover:text-white"
                >
                  Close Preview
                </button>
              </div>
              <div className="w-full h-[70vh] rounded-xl overflow-hidden border border-express-purple/30">
                <iframe 
                  src={getEmbedUrl(selectedEdition.url)} 
                  title={`eXpresso ${selectedEdition.title}`}
                  className="w-full h-full"
                  allow="autoplay"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Expresso;
