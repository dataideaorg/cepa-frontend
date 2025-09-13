"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Video {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
  thumbnail: string;
  duration: string;
  category: string;
  date: string;
}

const Videos: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openVideoModal = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    setIsModalOpen(false);
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeVideoModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);
  // Videos from the old CEPA website
  const videos = [
    {
      id: 1,
      title: "UPC Breaking Feudalism Building a Republic",
      description: "A discussion on Uganda&apos;s political transformation and the role of UPC in building a republic.",
      youtubeId: "-hfxM9BFBa4",
      thumbnail: "/videos/UPC-Breaking-Feudalism-Building-a-Republic.png",
      duration: "15:30",
      category: "Political Analysis",
      date: "2025-05-15"
    },
    {
      id: 2,
      title: "Dr. Obote&apos;s Common Man&apos;s Charter",
      description: "Exploring Dr. Obote&apos;s vision for Uganda through the Common Man&apos;s Charter and its relevance today.",
      youtubeId: "doboz00R5t8",
      thumbnail: "/videos/Dr.-Obotes-Common-Mans-Charter.png",
      duration: "22:45",
      category: "Historical Analysis",
      date: "2025-05-10"
    },
    {
      id: 3,
      title: "Building Uganda&apos;s Silicon Valley",
      description: "A comprehensive look at Uganda&apos;s tech ecosystem and the potential for creating a Silicon Valley in East Africa.",
      youtubeId: "aVCnJfWW480",
      thumbnail: "/videos/Building-Ugands-Silicon-Valley.png",
      duration: "18:20",
      category: "Technology & Development",
      date: "2025-05-08"
    },
    {
      id: 4,
      title: "Parliamentary Oversight in Uganda",
      description: "An analysis of parliamentary oversight mechanisms and their effectiveness in Uganda&apos;s governance.",
      youtubeId: "example4",
      thumbnail: "/videos/parliamentary-oversight.jpg",
      duration: "25:15",
      category: "Governance",
      date: "2025-05-05"
    },
    {
      id: 5,
      title: "Road Safety Advocacy in Uganda",
      description: "CEPA&apos;s efforts in advocating for improved road safety policies and implementation in Uganda.",
      youtubeId: "example5",
      thumbnail: "/videos/road-safety-advocacy.jpg",
      duration: "12:30",
      category: "Public Policy",
      date: "2025-05-03"
    },
    {
      id: 6,
      title: "Budget Analysis and Transparency",
      description: "Understanding Uganda&apos;s budget process and the importance of transparency in public finance management.",
      youtubeId: "example6",
      thumbnail: "/videos/budget-analysis.jpg",
      duration: "20:45",
      category: "Public Finance",
      date: "2025-05-01"
    }
  ];

  const categories = ["All", "Political Analysis", "Historical Analysis", "Technology & Development", "Governance", "Public Policy", "Public Finance"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src="/hero/videos-hero.jpg" 
          alt="Videos - CEPA"
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
              Videos
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Watch our collection of videos featuring policy discussions, analysis, and insights on Uganda&apos;s governance and development.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Videos Section */}
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
              Our Video Collection
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Explore our video content covering policy analysis, governance discussions, and insights into Uganda&apos;s development landscape.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Button
                  variant={category === "All" ? "default" : "outline"}
                  className={`px-6 py-2 text-sm font-medium transition-colors ${
                    category === "All"
                      ? "bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30"
                      : "bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30"
                  }`}
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Videos Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="relative h-96 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
                {/* Video Thumbnail - Full Card */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 cursor-pointer" onClick={() => openVideoModal(video)}>
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
                
                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-primary/90 text-white px-2 py-1 rounded text-xs">
                      {video.category}
                    </span>
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                      {video.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-white/70">
                      {new Date(video.date).toLocaleDateString()}
                    </span>
                    <Button 
                      size="sm" 
                      className="bg-white/20 text-white border border-white/30 hover:bg-white/30"
                      onClick={() => openVideoModal(video)}
                    >
                      Watch Video
                    </Button>
                  </div>
                </div>
              </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" className="shadow-lg bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30">
              Load More Videos
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeVideoModal}
        >
          <div 
            className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Video Player */}
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            {/* Video Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {selectedVideo.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {selectedVideo.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">
                  {selectedVideo.category}
                </span>
                <span>{selectedVideo.duration}</span>
                <span>{new Date(selectedVideo.date).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
