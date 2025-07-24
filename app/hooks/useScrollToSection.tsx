import { useRef } from "react"


// Custom hook for smooth scrolling to sections
export const useScrollToSection = () => {
  // scroll to specific section handler
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return {
    scrollToSection
  };
}