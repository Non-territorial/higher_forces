'use client';

import { useState, useRef } from 'react';
import { Work } from '@/types/catalog';
import MuxPlayer from '@mux/mux-player-react';


interface CarouselProps {
  work: Work;
  onClose: () => void;
}

export default function Carousel({ work, onClose }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const galleryScrollRef = useRef<HTMLDivElement>(null);

  const goToNext = () => {
    if (currentSlide < work.slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
      setActiveGalleryIndex(0);
    }
  };

  const goToPrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
      setActiveGalleryIndex(0);
    }
  };

  const handleGalleryScroll = () => {
    const el = galleryScrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    setActiveGalleryIndex(index);
  };

  const slide = work.slides[currentSlide];

  return (
    <div className="fixed inset-0 bg-black z-100 flex items-center justify-center pointer-events-none">
      
      {/* Main content area */}
<div className={slide.type === 'image' ? 'fixed inset-0 pointer-events-auto' : 'max-w-4xl pointer-events-auto'}>
  {slide.type === 'text' && (
  <div
    className={`text-white/70 leading-relaxed whitespace-pre-wrap text-sm md:text-base lg:text-base`} style={{ fontFamily: 'iAWriterDuoS, monospace' }}
  >
    {slide.title && (
      <div className="text-white/70 text-xl md:text-2xl lg:text-3xl mb-2" style={{ fontFamily: 'isocpeur' }}>
        {slide.title}
      </div>
    )}
    {slide.content}
  </div>
  )}

       {slide.type === 'image' && (
  <div className="w-full h-full pointer-events-auto flex flex-col">
    <div
      ref={galleryScrollRef}
      onScroll={handleGalleryScroll}
      className="flex overflow-x-auto snap-x snap-mandatory flex-1 [&::-webkit-scrollbar]:hidden"
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      <div className="w-screen h-full shrink-0 snap-center flex items-center justify-center">
        <img
          src={slide.content}
          alt={`${work.title} - main image`}
          className="max-h-[85vh] max-w-[90vw] object-contain"
        />
      </div>
      
      {slide.galleryImages?.map((img, i) => (
        <div key={i} className="w-screen h-full shrink-0 snap-center flex items-center justify-center">
          <img
            src={img}
            alt={`${work.title} - gallery ${i + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain"
          />
        </div>
      ))}
    </div>

    {/* Dot indicators — only shown when there are gallery images */}
    {slide.galleryImages && slide.galleryImages.length > 0 && (
      <div className="flex justify-center items-center gap-2 py-4 shrink-0">
        {[slide.content, ...(slide.galleryImages ?? [])].map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === activeGalleryIndex
                ? 'w-2 h-2 bg-white/80'
                : 'w-1.5 h-1.5 bg-white/30'
            }`}
          />
        ))}
      </div>
    )}
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

        {slide.type === 'html' && (
  <div className="fixed inset-0 pointer-events-auto">
    <iframe
      src={slide.content}
      className="w-full h-full border-0"
      allow="autoplay"
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
    <div className="text-white/70 leading-relaxed whitespace-pre-wrap text-sm md:text-base lg:text-base max-w-lg lg:max-w-xl flex flex-col justify-center">
      {slide.title && (
        <div className="text-xl md:text-2xl lg:text-3xl mb-4" style={{ fontFamily: 'isocpeur' }}>
          {slide.title}
        </div>
      )}
    <div style={{ fontFamily: 'iAWriterDuoS, monospace' }}
  dangerouslySetInnerHTML={{
    __html: slide.content
      .replace(/\n/g, '<br />')
      .replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline hover:opacity-70">$1</a>'
      )
      .replace(
        /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g,
        '<a href="mailto:$1" class="underline hover:opacity-70">$1</a>'
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
          className="text-white/70 text-2xl md:text-3xl hover:opacity-70 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          ←
        </button>

        {/* Right arrow */}
        <button
          onClick={goToNext}
          disabled={currentSlide === work.slides.length - 1}
          className="text-white/70 text-2xl md:text-3xl hover:opacity-70 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          →
        </button>

        {/* Close button */}
        <button
          onClick={onClose}
          className="text-white/70 text-2xl md:text-3xl hover:opacity-70 transition-opacity ml-2"
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