import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photo Gallery',
  description: 'All photos available on the Mendo Grass website',
};

export default function PhotosPage() {
  // Photos from /public root
  const rootPhotos = [
    'adam_greenhouse.jpg',
    'arden_micros.jpg',
    'family_sunflowers.jpg',
    'greenhouse_purple.jpg',
    'greens_and_grass.jpg',
    'logo_colored.jpg',
    'logo_transparent.png',
    'mendo_grass_icon.png',
    'mendograss_tote.jpg',
    'microgreen_cocktail.jpg',
    'microgreens_description.jpg',
    'microgreens_subscription.jpg',
    'microgreens_subscription_2.jpg',
    'micros_multicolor.jpg',
    'micros_transparent.png',
    'peasto_4jars.jpg',
    'peasto_description.jpg',
    'wheatgrass_background.jpg',
    'wheatgrass_description.jpg',
    'wheatgrass_shots.jpg',
    'wheatgrass_subscription.jpg',
  ];

  // Photos from /public/images (empty placeholders removed)
  const imagesPhotos: string[] = [];

  // Favicon images
  const faviconPhotos = [
    'android-chrome-192x192.png',
    'android-chrome-512x512.png',
    'apple-touch-icon.png',
    'favicon-16x16.png',
    'favicon-32x32.png',
    'favicon-48x48.png',
  ];

  const allPhotos = [...rootPhotos, ...imagesPhotos];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Photo Gallery</h1>
        <p className="text-gray-600 mb-12">All photos available in the /public directory</p>

        {/* Main Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allPhotos.map((photo) => (
            <div key={photo} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative w-full h-64 bg-gray-100">
                <Image
                  src={`/${photo}`}
                  alt={photo}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4">
                <p className="text-sm font-mono text-gray-700 break-all">{photo}</p>
                <p className="text-xs text-gray-500 mt-1">/{photo}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Favicon Section */}
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Favicon & App Icons</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {faviconPhotos.map((photo) => (
              <div key={photo} className="bg-white rounded-lg shadow-md overflow-hidden p-4">
                <div className="relative w-full aspect-square bg-gray-100 rounded mb-2">
                  <Image
                    src={`/${photo}`}
                    alt={photo}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
                  />
                </div>
                <p className="text-xs font-mono text-gray-700 break-all text-center">{photo.replace('favicon-', '').replace('.png', '')}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Icon images (for src/app) */}
        <div className="border-t border-gray-200 pt-12 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">App Directory Icons</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
              <div className="relative w-full aspect-square bg-gray-100 rounded mb-2">
                <Image
                  src="/mendo_grass_icon.png"
                  alt="App Icon"
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
              <p className="text-xs font-mono text-gray-700 text-center">src/app/icon.png</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
