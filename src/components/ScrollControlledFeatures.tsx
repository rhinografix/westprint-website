import React, { useState, useEffect, useRef } from 'react';

interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

interface ScrollControlledFeaturesProps {
  features: Feature[];
}

export default function ScrollControlledFeatures({ features }: ScrollControlledFeaturesProps) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const totalCards = features.length;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start when section enters viewport (bottom 20% of screen)
      const triggerPoint = windowHeight * 0.8;
      const isVisible = rect.top < triggerPoint && rect.bottom > 0;
      
      setIsInView(isVisible);

      if (isVisible && rect.top < triggerPoint) {
        // Calculate progress based on how far the section has scrolled
        const sectionHeight = section.offsetHeight;
        const scrolled = triggerPoint - rect.top;
        const progress = Math.min(Math.max(scrolled / (sectionHeight * 0.8), 0), 1);
        
        // Determine active card
        const cardIndex = Math.min(Math.floor(progress * totalCards), totalCards - 1);
        setActiveCardIndex(cardIndex);
      } else if (!isVisible && rect.top > triggerPoint) {
        setActiveCardIndex(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalCards]);

  return (
    <div 
      ref={sectionRef} 
      className="relative py-20"
      style={{ minHeight: `${totalCards * 80}vh` }}
    >
      {/* Sticky container for cards */}
      <div className="sticky top-32 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Indicator */}
          <div className="flex justify-center mb-16 gap-4">
            <div className="inline-flex gap-2 sm:gap-3 md:gap-4 bg-white/90 backdrop-blur-sm px-3 py-2 sm:px-5 sm:py-3 md:px-8 md:py-4 rounded-full shadow-lg border border-gray-200">
              {features.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 sm:h-2.5 md:h-3 rounded-full transition-all duration-500 ${
                    index === activeCardIndex 
                      ? 'w-12 sm:w-16 md:w-20 bg-gradient-to-r from-cyan-600 to-teal-600 shadow-md' 
                      : index < activeCardIndex
                      ? 'w-8 sm:w-10 md:w-12 bg-cyan-400'
                      : 'w-8 sm:w-10 md:w-12 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Cards Container */}
          <div className="relative" style={{ minHeight: '550px' }}>
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = index === activeCardIndex;
              const isPast = index < activeCardIndex;

              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    isActive 
                      ? 'opacity-100 scale-100 translate-y-0 z-20' 
                      : isPast
                      ? 'opacity-0 scale-90 -translate-y-8 pointer-events-none z-10'
                      : 'opacity-0 scale-90 translate-y-8 pointer-events-none z-10'
                  }`}
                >
                  <div className="flex items-center justify-center h-full p-4">
                    <div className="relative text-center p-12 bg-white rounded-3xl border-2 border-gray-100 shadow-2xl max-w-2xl w-full">
                      {/* Background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 via-white to-teal-50/50 rounded-3xl"></div>
                      
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl transform transition-transform duration-300 hover:scale-110">
                          <Icon className="w-12 h-12 text-white" />
                        </div>
                        
                        {/* Title */}
                        <h3 className="text-3xl text-gray-900 mb-6">
                          {feature.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-xl text-gray-600 leading-relaxed max-w-xl mx-auto">
                          {feature.description}
                        </p>
                      </div>
                      
                      {/* Decorative corners */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-100/30 to-transparent rounded-tr-3xl pointer-events-none"></div>
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-teal-100/30 to-transparent rounded-bl-3xl pointer-events-none"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll Hint */}
          {isInView && activeCardIndex < totalCards - 1 && (
            <div className="text-center mt-16 animate-bounce">
              <p className="text-gray-500 mb-2">Scroll to continue</p>
              <svg className="w-6 h-6 mx-auto text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
