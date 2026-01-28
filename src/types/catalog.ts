export type SlideType = 'text' | 'image' | 'video';

export interface Slide {
  type: SlideType;
  content: string; // For text: the description text
                   // For image: Vercel Blob URL (https://...)
                   // For video: Mux playback ID
}

export interface Work {
  id: string;
  title: string;
  available: boolean;
  slides: Slide[];
}