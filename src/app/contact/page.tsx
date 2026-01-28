import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <div className="mb-8">
          <Link 
            href="/" 
            className="text-white text-xs md:text-sm tracking-wider hover:opacity-70 transition-opacity inline-block"
          >
            ← BACK
          </Link>
        </div>
        
        <div className="text-white space-y-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl mb-8 tracking-wide">
            INFO
          </h1>
          
          <div className="space-y-4 text-sm md:text-base opacity-80">
            <p>Higher Forces</p>
            <p>Artistic Practice</p>
            <p className="pt-4">
              Contact: info@higherforces.art
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}