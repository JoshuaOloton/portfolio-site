import { useRef } from "react"


// Custom hook for smooth scrolling to sections
export const useScrollToSection = () => {
  const servicesRef = useRef<HTMLDivElement>(null); 

  // scroll to specific section handler
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    console.log('ref');
    console.log('ref');
    if (ref.current) {
      console.log('ref current');
    }
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    console.log('ref');
    console.log('ref');
  }

  return {
    scrollToSection,
    servicesRef
  };
}