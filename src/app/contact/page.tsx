import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black relative flex flex-col">
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full">
          <div className="text-white space-y-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-8 tracking-wide">
              INFO
            </h1>
            
            <div className="space-y-4 text-sm md:text-base opacity-80">
              <p>Higher Forces</p>
              <p>Artistic Practice</p>
              <p className="pt-4">
                Contact: <a href="mailto:info@higherforces.art" className="hover:opacity-70 transition-opacity">info@higherforces.art</a>
              </p>
            </div>

            {/* Home link below all info */}
            <div className="pt-8">
              <Link 
                href="/" 
                className="text-white text-sm md:text-base lg:text-lg tracking-wider hover:opacity-70 transition-opacity inline-block mt-24"
              >
                HOME
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}