'use client';

import { useState } from 'react';
import Image from 'next/image';

// Gallery image data
const galleryImages = [
  {
    id: 1,
    src: '/building-banner.jpg',
    alt: 'Building exterior',
    title: 'StrataSphere Building Exterior',
    description: 'Modern architectural design of our building.'
  },
  {
    id: 2,
    src: '/building-banner.jpg', // Using same image as placeholder
    alt: 'Building lobby',
    title: 'Main Lobby',
    description: 'Elegant and spacious main entrance lobby.'
  },
  {
    id: 3,
    src: '/building-banner.jpg', // Using same image as placeholder
    alt: 'Swimming pool',
    title: 'Swimming Pool',
    description: 'Resort-style swimming pool for residents.'
  },
  {
    id: 4,
    src: '/building-banner.jpg', // Using same image as placeholder
    alt: 'Gym facilities',
    title: 'Fitness Center',
    description: 'Fully equipped fitness center with modern equipment.'
  },
  {
    id: 5,
    src: '/building-banner.jpg', // Using same image as placeholder
    alt: 'Rooftop garden',
    title: 'Rooftop Garden',
    description: 'Beautiful garden space on the roof with city views.'
  },
  {
    id: 6,
    src: '/building-banner.jpg', // Using same image as placeholder
    alt: 'Function room',
    title: 'Community Room',
    description: 'Multipurpose room for resident gatherings and events.'
  }
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Building Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div 
            key={image.id} 
            className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => openModal(image)}
          >
            <div className="relative h-64">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-white">
              <h3 className="font-semibold text-lg text-gray-800">{image.title}</h3>
              <p className="text-gray-600 mt-1">{image.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 p-4 z-50"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg overflow-hidden max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[60vh] w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6">
              <h3 className="font-bold text-xl text-gray-800">{selectedImage.title}</h3>
              <p className="text-gray-600 mt-2">{selectedImage.description}</p>
              <button 
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 