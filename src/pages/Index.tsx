// src/pages/Index.tsx
import React, { useEffect, useRef, useState } from "react";
import ParticleBackground from "../components/ParticleBackground";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Modal from "../components/Modal";


const Index: React.FC = () => {
  // for the modal functionality
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const navEntries = performance.getEntriesByType('navigation');
    const isReload =
      navEntries.length > 0 && navEntries[0].type === 'reload';

    if (isReload) {
      setShowModal(true);
    }
  }, []);

  const [api, setApi] = useState<any>();
  const autoplayRef = useRef<NodeJS.Timeout>();

  // --- NEW: State for our zoom animation ---
  const [isZoomed, setIsZoomed] = useState(false);
  const initialAnimationTimeoutRef = useRef<NodeJS.Timeout>();
  const zoomOutTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    document.title = "eXpress - Public Speaking and Debating Committee";

    // --- NEW: Timing for the zoom animation ---
    // 1. Trigger the zoom-in effect after a short delay
    initialAnimationTimeoutRef.current = setTimeout(() => {
      setIsZoomed(true); // Start the zoom-in animation

      // 2. Trigger the zoom-out effect after the animation has been shown for a duration
      zoomOutTimeoutRef.current = setTimeout(() => {
        setIsZoomed(false); // Start the zoom-out animation
      }, 1000); // Display the zoomed content for 5 seconds (5000 milliseconds)
    }, 500); // Start animation 0.5 seconds after page loads (500 milliseconds)

    // Clean up any pending timeouts if the component goes away early
    return () => {
      if (initialAnimationTimeoutRef.current) {
        clearTimeout(initialAnimationTimeoutRef.current);
      }
      if (zoomOutTimeoutRef.current) {
        clearTimeout(zoomOutTimeoutRef.current);
      }
    };
  }, []); // This effect runs only ONCE when the page first shows up

  // --- NEW: Effect to control page scrolling during animation ---
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = "hidden"; // Stop page from scrolling
    } else {
      document.body.style.overflow = ""; // Let page scroll again
    }
    return () => {
      document.body.style.overflow = "";
    }; // Reset if component unmounts
  }, [isZoomed]); // Re-run whenever isZoomed changes

  // Your existing useEffect for auto-scrolling (kept as is)
  useEffect(() => {
    if (!api) return;
    autoplayRef.current = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [api]);

  return (
    <>
      <ParticleBackground />

      {/* Main content container - now applies blur when zoomed */}
      <div
        className={`relative min-h-screen flex flex-col items-center justify-center z-10 px-6 pt-20 `}
      >
        {/* Your original logo and text container - now applies zoom/fade to text */}
        <div
          className={`logo-and-text-container ${isZoomed ? "logo-zoomed-out" : ""
            }`}
        >
          <img
            src="/lovable-uploads/e3a10d0d-4f1e-49a1-8b38-b48a1cefb127.png"
            alt="DJS eXpress"
            className="logo-image"
          />
          {/* --- NEW: Container for 'DJS eXpress' and the new small text --- */}
          <div className="text-group">
            <span className="logo-text">DJS eXpress</span>
            <p className="small-subtext " style={{ fontStyle: "italic" }}>
              #eXpressToInspire {/* <--- REPLACE THIS WITH YOUR TEXT */}
            </p>
            <p className="small-subtext">
              Public Speaking and Debate Committee{" "}
              {/* <--- REPLACE THIS WITH YOUR TEXT */}
            </p>
          </div>
        </div>

        {/* --- NEW: Zoomed content wrapper that appears when zoomed in --- */}
        {/* --- NEW: Container for the image that appears --- */}
        <div
          className={`zoomed-content-wrapper ${isZoomed ? "is-active" : ""}`}
        >
          <img
            src="expressReload.png" // <--- IMPORTANT: REPLACE with the actual path to YOUR image file (e.g., /images/my-reveal-image.jpg)
            alt="Image appearing from text"
            className="zoomed-image"
          />
          {/* You can add a special message here if you want it to appear with the image */}
          {/* <p className="zoomed-text">Welcome to DJS eXpress!</p> */}
        </div>
        {/* Call to Action */}
        <div className="mt-4">
        <a
         href="https://forms.gle/skijFZar1szrdmLv7"
          target="_blank" 
          rel="noopener noreferrer"
           className="sherlock-button group inline-flex items-center"
        >
          <span className="font-semibold tracking-wider">Register Now</span>
          <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" />
        </a>
        </div>

        <div className="text-center text-foreground mt-8">
          {/* Your other page content */}
        </div>

        {/*{showModal && <Modal onClose={() => setShowModal(false)} />}*/}

      </div>
    </>
  );
};

export default Index;
