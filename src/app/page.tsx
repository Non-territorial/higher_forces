'use client';

import Link from 'next/link';
import { useState } from 'react';
import Carousel from '@/components/Carousel';
import { getWorkByTitle } from '@/data/catalog';
import { Work } from '@/types/catalog';

export default function Home() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  
  const titles = [
    "100% Intuition",
    "Art Effect Pill",
    "Bad Actors",
    "Bai Ueit",
    "Banker as an Art Object",
    "Brand Paralysis",
    "Bullet Proof Karma",
    "Calculated",
    "Call Center",
    "Captains of Forever Boats",
    "Climate Exchange",
    "Comfortable Painting",
    "Concept Roulette",
    "Coordinates of Utopia",
    "Cosmic Idiot",
    "Cosmetic Buddhist",
    "Curators Glasses",
    "Delayed",
    "Digital Coffin",
    "Erotics of Vegetables",
    "Estetica Protesica",
    "Euphoric Healer",
    "Exit Strategy",
    "Experts of Truth",
    "Facebook Cemetery",
    "False Hope Masters",
    "Fanatic Forever",
    "Final Tour Leader",
    "Full Potential",
    "Fully Booked",
    "Funeral Advisors",
    "Global Silence",
    "Grand Consultants",
    "Great Elite International",
    "Heavy Lifter",
    "Horizontal Skyscrapers",
    "Horron",
    "Illusion Carrier Service",
    "Important Meeting",
    "Investors Casting",
    "Lost Pseudo Intellectual",
    "LXC",
    "Mad Hipster",
    "Masterpiece",
    "Max Risk",
    "Me Happy Now",
    "Monitoring Room",
    "Moving Emptiness",
    "New Conductor",
    "No Money No Honey",
    "No More Heroes, The Show Must Go On, Only The Brave",
    "No-Profit, Unsubscribe, Go Rural",
    "Non-Follower",
    "Owners of Galactics",
    "Panic Professionals",
    "Post Hope Society",
    "Powerpoint Presentation of the Planet",
    "Practicing Utopia",
    "Real Estate Maniac",
    "Reception",
    "Silence Ventures",
    "Something Went Terribly Wrong",
    "Spiritual Surveillance",
    "Techno Zombie",
    "Temporary Identity",
    "The Calculated Poet",
    "The Coach of the Coach",
    "The Conference",
    "The Confidence of a British Voice",
    "The Door to the Great Boringness",
    "The Fear is The Best",
    "The Priest of the Future",
    "Transcendental Machine",
    "Travel Simulation Park",
    "UJN",
    "Un-Professional",
    "Universal Leader",
    "Unsubscribe",
    "Very Important Guy",
    "Washed Heads Society",
    "Windows of Opportunities",
    "Witness of Grand Explosion"
  ];

  const handleTitleClick = (title: string) => {
    const work = getWorkByTitle(title);
    if (work && work.available) {
      setSelectedWork(work);
    }
  };

  const handleCloseCarousel = () => {
    setSelectedWork(null);
  };

  return (
    <>
      {selectedWork && (
        <Carousel work={selectedWork} onClose={handleCloseCarousel} />
      )}
      
     <div className="min-h-screen bg-zinc-900 relative flex flex-col">
  <div 
  className="absolute inset-0 bg-[url('/bg_soft.jpg')] bg-no-repeat bg-center bg-cover opacity-[0.2] pointer-events-none" 
/>
      {/* Darker film borders - top and bottom - fixed position */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent"></div>
      </div>

      {/* Header - NOT fixed, part of flow */}
      <header className="relative z-50 py-8 px-12 md:py-10 md:px-16 lg:py-12 lg:px-20">
        <h1 className="text-white text-sm md:text-base lg:text-lg tracking-wider" style={{ marginLeft: '24px' }}>
          HIGHER FORCES
        </h1>
      </header>

      {/* Main content - Memorial columns - scrollable, centered */}
      <main className="flex-1 relative z-10 overflow-y-auto pb-24 md:pb-28 lg:pb-32 flex justify-center items-start">
        <div className="w-full max-w-6xl px-12 md:px-16 lg:px-20">
          {/* Columns centered */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-16 md:gap-20 lg:gap-24">
            {titles.map((title, index) => {
              const work = getWorkByTitle(title);
              const isAvailable = work?.available ?? false;
              
              return (
                <div
                  key={index}
                  onClick={() => handleTitleClick(title)}
                  className={`text-sm md:text-base lg:text-lg py-3 md:py-4 transition-colors break-inside-avoid ${
                    isAvailable 
                      ? 'text-white hover:opacity-70 cursor-pointer' 
                      : 'text-zinc-400'
                  }`}
                >
                  {title}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Footer - NOT fixed, part of flow */}
      <footer className="relative z-50 py-8 px-12 md:py-10 md:px-16 lg:py-12 lg:px-20">
        <Link 
          href="/contact" 
          className="text-white text-sm md:text-base lg:text-lg tracking-wider hover:opacity-70 transition-opacity inline-block"
          style={{ marginLeft: '24px' }}
        >
          INFO
        </Link>
      </footer>
    </div>
    </>
  );
}