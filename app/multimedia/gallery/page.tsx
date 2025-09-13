"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery: React.FC = () => {
  // State for lightbox modal
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages, setAllImages] = useState<Array<{id: number, src: string, alt: string, title: string, groupTitle: string}>>([]);

  // Gallery groups from the old site structure
  const galleryGroups = [
    {
      id: 1,
      title: "Advocacy Dialogue with PAFROWS, MoFPED and MoWT on Budgetary Allocation for Road Safety Interventions #RoadSafetyUg",
      images: [
        {
          id: 1,
          src: "/gallery/CE26830-scaled.jpg",
          alt: "Advocacy Dialogue - CE26830",
          title: "Advocacy Dialogue"
        },
        {
          id: 2,
          src: "/gallery/CE26810-scaled.jpg",
          alt: "Advocacy Dialogue - CE26810",
          title: "Advocacy Dialogue"
        },
        {
          id: 3,
          src: "/gallery/CE26815-scaled.jpg",
          alt: "Advocacy Dialogue - CE26815",
          title: "Advocacy Dialogue"
        },
        {
          id: 4,
          src: "/gallery/CE26806-scaled.jpg",
          alt: "Advocacy Dialogue - CE26806",
          title: "Advocacy Dialogue"
        }
      ]
    },
    {
      id: 2,
      title: "2nd East Africa Regional Parliamentary Monitoring Organisations Conference – #EAPMONconference24",
      images: [
        {
          id: 5,
          src: "/gallery/RM-07198-scaled.jpg",
          alt: "EAPMON Conference - RM-07198",
          title: "EAPMON Conference"
        },
        {
          id: 6,
          src: "/gallery/RM-7866-scaled.jpg",
          alt: "EAPMON Conference - RM-7866",
          title: "EAPMON Conference"
        },
        {
          id: 7,
          src: "/gallery/RM-7072-scaled.jpg",
          alt: "EAPMON Conference - RM-7072",
          title: "EAPMON Conference"
        },
        {
          id: 8,
          src: "/gallery/RM-7727-scaled.jpg",
          alt: "EAPMON Conference - RM-7727",
          title: "EAPMON Conference"
        },
        {
          id: 9,
          src: "/gallery/RM-7744-scaled.jpg",
          alt: "EAPMON Conference - RM-7744",
          title: "EAPMON Conference"
        }
      ]
    },
    {
      id: 3,
      title: "CEPA Partners With KCCA, World Resources Institute and others to Host First Kampala Car-Free Day",
      images: [
        {
          id: 10,
          src: "/gallery/RM-7436-scaled.jpg",
          alt: "Kampala Car-Free Day - RM-7436",
          title: "Kampala Car-Free Day"
        },
        {
          id: 11,
          src: "/gallery/RM-7932-scaled.jpg",
          alt: "Kampala Car-Free Day - RM-7932",
          title: "Kampala Car-Free Day"
        },
        {
          id: 12,
          src: "/gallery/RM-7458-scaled.jpg",
          alt: "Kampala Car-Free Day - RM-7458",
          title: "Kampala Car-Free Day"
        },
        {
          id: 13,
          src: "/gallery/RM-7964-scaled.jpg",
          alt: "Kampala Car-Free Day - RM-7964",
          title: "Kampala Car-Free Day"
        },
        {
          id: 14,
          src: "/gallery/RM-7520-scaled.jpg",
          alt: "Kampala Car-Free Day - RM-7520",
          title: "Kampala Car-Free Day"
        }
      ]
    },
    {
      id: 4,
      title: "Government Tasked to Fast-track Development of Regulations on Speed for Uganda",
      images: [
        {
          id: 15,
          src: "/gallery/CEP_6057-scaled.jpg",
          alt: "Speed Regulations - CEP_6057",
          title: "Speed Regulations"
        },
        {
          id: 16,
          src: "/gallery/CEP_6059-scaled.jpg",
          alt: "Speed Regulations - CEP_6059",
          title: "Speed Regulations"
        },
        {
          id: 17,
          src: "/gallery/CEP_6062-scaled.jpg",
          alt: "Speed Regulations - CEP_6062",
          title: "Speed Regulations"
        },
        {
          id: 18,
          src: "/gallery/CEP_6063-scaled.jpg",
          alt: "Speed Regulations - CEP_6063",
          title: "Speed Regulations"
        }
      ]
    },
    {
      id: 5,
      title: "CEPA, SWRW and other ROSACU Members Launch Helmet Campaign",
      images: [
        {
          id: 19,
          src: "/gallery/RM-07048-scaled.jpg",
          alt: "Helmet Campaign - RM-07048",
          title: "Helmet Campaign"
        },
        {
          id: 20,
          src: "/gallery/RM-07151-scaled.jpg",
          alt: "Helmet Campaign - RM-07151",
          title: "Helmet Campaign"
        },
        {
          id: 21,
          src: "/gallery/RM-7033-scaled.jpg",
          alt: "Helmet Campaign - RM-7033",
          title: "Helmet Campaign"
        },
        {
          id: 22,
          src: "/gallery/RM-7064-scaled.jpg",
          alt: "Helmet Campaign - RM-7064",
          title: "Helmet Campaign"
        },
        {
          id: 23,
          src: "/gallery/RM-7074-scaled.jpg",
          alt: "Helmet Campaign - RM-7074",
          title: "Helmet Campaign"
        }
      ]
    },
    {
      id: 6,
      title: "CEPA and PAFROS Host a Budget Advocacy Dialogue on Road Safety",
      images: [
        {
          id: 24,
          src: "/gallery/UNGRSW-23-Helmets-105-scaled.jpg",
          alt: "Budget Advocacy - UNGRSW-23-Helmets-105",
          title: "Budget Advocacy"
        },
        {
          id: 25,
          src: "/gallery/UNGRSW-23-Helmets-111-scaled.jpg",
          alt: "Budget Advocacy - UNGRSW-23-Helmets-111",
          title: "Budget Advocacy"
        },
        {
          id: 26,
          src: "/gallery/UNGRSW-23-Helmets-154-scaled.jpg",
          alt: "Budget Advocacy - UNGRSW-23-Helmets-154",
          title: "Budget Advocacy"
        }
      ]
    }
  ];

  // Flatten all images into a single array for lightbox navigation
  useEffect(() => {
    const flattenedImages = galleryGroups.flatMap(group => 
      group.images.map(image => ({
        ...image,
        groupTitle: group.title
      }))
    );
    setAllImages(flattenedImages);
  }, []);

  // Lightbox functions
  const openLightbox = (imageId: number) => {
    const imageIndex = allImages.findIndex(img => img.id === imageId);
    if (imageIndex !== -1) {
      setCurrentImageIndex(imageIndex);
      setIsLightboxOpen(true);
    }
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(prev => 
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src="/hero/gallery-hero.jpg" 
          alt="Gallery - CEPA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-8"
            >
              Gallery
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Explore our collection of photos from events, workshops, conferences, and activities that showcase CEPA&apos;s work in action.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Photo Gallery
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              A visual journey through CEPA&apos;s activities, events, and impact in Uganda&apos;s governance and policy landscape.
            </p>
          </motion.div>
          
          <div className="space-y-16">
            {galleryGroups.map((group, groupIndex) => (
              <motion.div 
                key={group.id} 
                className="space-y-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Group Title */}
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {group.title}
                  </h3>
                  <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary via-secondary to-accent rounded-full"></div>
                </motion.div>

                {/* Group Images Grid */}
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {group.images.map((image, imageIndex) => {
                    return (
                      <motion.div
                        key={image.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: imageIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card 
                          className="relative h-64 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm cursor-pointer"
                          onClick={() => openLightbox(image.id)}
                        >
                        <div 
                          className="absolute inset-0 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-300"
                          style={{ backgroundImage: `url(${image.src})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/60 group-hover:via-black/10 group-hover:to-transparent transition-all duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="text-sm font-semibold mb-1 line-clamp-1">{image.title}</h3>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                          </div>
                        </div>
                      </Card>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && allImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors duration-200"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            {/* Navigation Buttons */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors duration-200"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors duration-200"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-[90vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={allImages[currentImageIndex]?.src}
                alt={allImages[currentImageIndex]?.alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              
              {/* Image Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {allImages[currentImageIndex]?.title}
                </h3>
                <p className="text-white/80 text-sm mb-2">
                  {allImages[currentImageIndex]?.groupTitle}
                </p>
                <p className="text-white/60 text-sm">
                  {currentImageIndex + 1} of {allImages.length}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
