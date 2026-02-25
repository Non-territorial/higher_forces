'use client';

import { useState } from 'react';
import { Work } from '@/types/catalog';
import MuxPlayer from '@mux/mux-player-react';


interface CarouselProps {
  work: Work;
  onClose: () => void;
}

export default function Carousel({ work, onClose }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  const goToNext = () => {
    if (currentSlide < work.slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const slide = work.slides[currentSlide];

  return (
    <div className="fixed inset-0 bg-black z-100 flex items-center justify-center pointer-events-none">
      
      {/* Main content area */}
<div className="max-w-4xl pointer-events-auto">
  {slide.type === 'text' && (
  <div
    className={`text-white/80 leading-relaxed whitespace-pre-wrap text-sm md:text-base lg:text-lg`}
  >
    {slide.title && (
      <div className="text-white/80 text-2xl md:text-3xl lg:text-4xl mb-2">
        {slide.title}
      </div>
    )}
    {slide.content}
  </div>
  )}

       {slide.type === 'image' && (
  <div className="w-full max-w-5xl mx-auto pointer-events-auto">
    <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-4">
      <img
        src={slide.content}
        alt={`${work.title} - main image`}
        className="h-[80vh] md:h-[85vh] object-contain snap-center shrink-0"
      />
      
      {slide.galleryImages?.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${work.title} - gallery ${i + 1}`}
          className="h-[80vh] md:h-[85vh] object-contain snap-center shrink-0"
        />
      ))}
    </div>
  </div>
)}
  

        {slide.type === 'video' && (
          <div className="relative z-0 pointer-events-auto max-w-full max-h-full">
            <MuxPlayer
              playbackId={slide.content}
              metadata={{ video_title: work.title }}
              streamType="on-demand"
              playsInline
              className="w-full h-full"
            />
          </div>
        )}

       {slide.type === 'mixed' && (
  <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20 items-center max-w-5xl justify-center pointer-events-auto h-full">
    {slide.imageUrl && (
      <div className="shrink-0">
        <img
          src={slide.imageUrl}
          alt={`${work.title} - slide ${currentSlide + 1}`}
          className="max-w-full md:max-w-md lg:max-w-lg max-h-[80vh] object-contain"
        />
      </div>
    )}
    <div className="text-white/80 leading-relaxed whitespace-pre-wrap text-sm md:text-base lg:text-lg max-w-lg lg:max-w-xl flex flex-col justify-center">
      {slide.title && (
        <div className="text-2xl md:text-3xl lg:text-4xl mb-4">
          {slide.title}
        </div>
      )}
      <div
  dangerouslySetInnerHTML={{
    __html: slide.content.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline hover:opacity-70">$1</a>'
    )
  }}
/>
    </div>
  </div>
)}
      </div>

      {/* Top-left: Higher Forces */}
    <a href="/" className="fixed top-2 left-6 z-120 pointer-events-auto text-white text-sm md:text-base lg:text-lg">
  HIGHER FORCES
</a>

      {/* Controls - top right */}
      <div className="fixed top-2 right-6 z-120 pointer-events-auto flex items-center gap-5">
        {/* Left arrow */}
        <button
          onClick={goToPrevious}
          disabled={currentSlide === 0}
          className="text-white/80 text-2xl md:text-3xl hover:opacity-70 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          ←
        </button>

        {/* Right arrow */}
        <button
          onClick={goToNext}
          disabled={currentSlide === work.slides.length - 1}
          className="text-white/80 text-2xl md:text-3xl hover:opacity-70 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          →
        </button>

        {/* Close button */}
        <button
          onClick={onClose}
          className="text-white/80 text-2xl md:text-3xl hover:opacity-70 transition-opacity ml-2"
          aria-label="Close carousel"
        >
          ✕
        </button>
      </div>

      {/* Slide indicator - top center */}
      <div className="fixed top-2 left-1/2 -translate-x-1/2 z-120 pointer-events-auto text-white text-sm opacity-60">
        {currentSlide + 1} / {work.slides.length}
      </div>

    </div>
  );
}
