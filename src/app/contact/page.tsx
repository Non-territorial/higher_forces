import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black relative flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl w-full" style={{ color: 'white' }}>

          <div style={{ fontSize: 16, opacity: 0.8 }}>
            <p>Higher Forces is an artistic practice devoting itself to advancing post-physical, post-studio, experiential forms of art.</p>
            <p style={{ marginTop: 16 }}>Higher Forces is not represented by any gallery or institution.</p>
            <p style={{ marginTop: 48 }}>
              Contact: <a href="mailto:info@higherforces.art" style={{ transition: 'opacity 0.2s' }} className="hover:opacity-70">info@higherforces.art</a>
            </p>
          </div>

          <div style={{ marginTop: 84 }}>
            <Link href="/" style={{ color: 'white', fontSize: 14, letterSpacing: '0.05em', textDecoration: 'none' }} className="hover:opacity-70">
              ← Back to Index
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}