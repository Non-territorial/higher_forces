export type SlideType = 'text' | 'image' | 'video' | 'mixed';

export interface Slide {
  type: SlideType;
  title?: string;
  content: string;       // main text / description / caption
  imageUrl?: string;     // for image + mixed
  videoId?: string;      // for video
  galleryImages?: string[];
}

export interface Work {
  id: string;
  title: string;
  available: boolean;
  slides: Slide[];
}




