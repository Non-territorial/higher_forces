import { Work } from '@/types/catalog';

export const catalogData: Work[] = [
  {
    id: 'cosmic-idiot',
    title: 'Cosmic Idiot',
    available: true,
    slides: [
      {
        type: 'text',
        content: 'Cosmic Idiot explores the intersection of universal consciousness and human folly. A meditation on our place in the cosmos and the absurdity of existence.'
      },
      {
        type: 'image',
        content: 'https://your-account.public.blob.vercel-storage.com/cosmic-idiot-1.jpg'
      },
      {
        type: 'image',
        content: 'https://your-account.public.blob.vercel-storage.com/cosmic-idiot-2.jpg'
      }
    ]
  },
  {
    id: 'climate-exchange',
    title: 'Climate Exchange',
    available: true,
    slides: [
      {
        type: 'text',
        content: 'Climate Exchange examines the commodification of environmental crisis. How can we trade the future?'
      },
      {
        type: 'video',
        content: 'your-mux-playback-id-here' // Just the playback ID, not full URL
      }
    ]
  },
  // Add more works as needed
];

// Helper function to get work by title
export function getWorkByTitle(title: string): Work | undefined {
  return catalogData.find(work => work.title === title);
}