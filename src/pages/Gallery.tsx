import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  description: string;
}

interface ServiceSection {
  title: string;
  description: string;
  images: GalleryImage[];
}

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const serviceSections: ServiceSection[] = [
    {
      title: "Attic Ladders",
      description: "Safe and reliable access to your attic storage with our professional ladder installations. Our heavy-duty ladders are designed for smooth operation and can support up to 150kg.",
      images: [
        {
          src: "/assets/ladder 1.png",
          alt: "Professional attic ladder installation - fully extended",
          title: "",
          description: ""
        },
        {
          src: "/assets/ladder 2.png",
          alt: "Attic ladder safety features",
          title: "",
          description: ""
        },
        {
          src: "/assets/ladder 3.png",
          alt: "Folding attic ladder mechanism",
          title: "",
          description: ""
        },
        {
          src: "/assets/ladder 4.png",
          alt: "Attic ladder installation process",
          title: "",
          description: ""
        },
        {
          src: "/assets/ladder 5.png",
          alt: "Attic ladder quality inspection",
          title: "",
          description: ""
        },
        {
          src: "/assets/ladder 6.png",
          alt: "Attic ladder in use",
          title: "",
          description: ""
        },
        {
          src: "/assets/ladder 7.png",
          alt: "Complete attic ladder setup",
          title: "",
          description: ""
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-brand-navy">
      {/* Hero Section */}
      <section className="bg-brand-copper py-32 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Work</h1>
          <p className="text-xl opacity-90 text-center max-w-2xl mx-auto">
            Explore our portfolio of professional attic ladder installations.
          </p>
        </div>
      </section>

      {/* Gallery Sections */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          {serviceSections.map((section, index) => (
            <div key={index} className="mb-24 last:mb-0">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-brand-copper">{section.title}</h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  {section.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="group relative overflow-hidden rounded-2xl bg-brand-dark cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
                    onClick={() => setSelectedImage(image)}
                  >
                    <div className="relative pb-[75%]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-brand-copper transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;