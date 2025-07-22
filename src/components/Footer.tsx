
import React from 'react';
import { Instagram, Linkedin, Heart, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-8 px-6 bg-black/30 backdrop-blur-sm border-t border-express-purple/20">
      <div className="container mx-auto flex-col">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} DJS eXpress. All rights reserved.
            </p>
          </div>
          
          <div className="mr-11 flex items-center space-x-4 gap-10  ">
            <a 
              href="https://www.instagram.com/djsce.express/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black/30 text-express-purple hover:bg-express-purple hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.youtube.com/channel/UCHdP0ud0OwiA-mp6hU89QGA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black/30 text-express-purple hover:bg-express-purple hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <Youtube size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/company/djexpress/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-black/30 text-express-purple hover:bg-express-purple hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <div className="text-center md:text-right text-sm text-gray-400 flex items-center">
            <span>Made with</span>
            <Heart size={14} className="mx-1 text-express-purple" />
            <span>by DJS eXpress</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
