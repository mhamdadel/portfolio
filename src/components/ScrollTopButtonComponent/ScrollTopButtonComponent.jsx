import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function ScrollTopButtonComponent() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setShowButton(window.scrollY > 300);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };
    return (
    <div
        className={`fixed bottom-8 right-8 bg-primary w-12 h-12 flex items-center justify-center rounded transition-opacity duration-500 z-50 cursor-pointer ${
          showButton ? 'opacity-100 visible' : 'opacity-0 invisible' 
        }`}
        onClick={scrollToTop}
      >
        <ChevronUpIcon className="w-6 h-6 text-white" />
      </div>
    );

}