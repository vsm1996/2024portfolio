'use client'
import { useEffect, useRef, useState } from 'react';

// Define the return type for the hook
type IntersectionObserverHook = [React.RefObject<HTMLDivElement>, boolean];

export const useIntersectionObserver = (): IntersectionObserverHook => {
  const [isVisible, setIsVisible] = useState(false);

  // Ref will be attached to the element we are observing
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if browser supports IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      console.warn('IntersectionObserver is not supported in this browser.');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.35 } // Trigger when 35% of the element is visible
    );

    const currentElement = elementRef.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    // Cleanup function to unobserve
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return [elementRef, isVisible];
};
