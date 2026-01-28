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

  const goToNext = () => {
    if (currentSlide < work.slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slide = work.slides[currentSlide];

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Main content area */}
      <div className="w-full h-full flex items-center justify-center p-8 md:p-12 lg:p-16">
        {slide.type === 'text' && (
          <div className="max-w-4xl text-white text-base md:text-lg lg:text-xl leading-relaxed whitespace-pre-wrap">
            {slide.content}
          </div>
        )}

        {slide.type === 'image' && (
          <img 
            src={slide.content} 
            alt={`${work.title} - slide ${currentSlide + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        )}

        {slide.type === 'video' && (
          <MuxPlayer
            playbackId={slide.content}
            metadata={{
              video_title: work.title,
            }}
            className="max-w-full max-h-full"
            streamType="on-demand"
          />
        )}
      </div>

      {/* Controls - bottom right */}
      <div className="fixed bottom-8 right-8 md:bottom-10 md:right-10 lg:bottom-12 lg:right-12 flex items-center gap-6">
        {/* Left arrow */}
        <button
          onClick={goToPrevious}
          disabled={currentSlide === 0}
          className="text-white text-2xl md:text-3xl hover:opacity-70 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          ←
        </button>

        {/* Right arrow */}
        <button
          onClick={goToNext}
          disabled={currentSlide === work.slides.length - 1}
          className="text-white text-2xl md:text-3xl hover:opacity-70 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          →
        </button>

        {/* Close button */}
        <button
          onClick={onClose}
          className="text-white text-2xl md:text-3xl hover:opacity-70 transition-opacity ml-4"
          aria-label="Close carousel"
        >
          ✕
        </button>
      </div>

      {/* Slide indicator */}
      <div className="fixed bottom-8 left-8 md:bottom-10 md:left-10 lg:bottom-12 lg:left-12 text-white text-sm opacity-50">
        {currentSlide + 1} / {work.slides.length}
      </div>
    </div>
  );
}