"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Podcasts: React.FC = () => {
  const [selectedPodcast, setSelectedPodcast] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openPodcastModal = (podcast: any) => {
    setSelectedPodcast(podcast);
    setIsModalOpen(true);
  };

  const closePodcastModal = () => {
    setSelectedPodcast(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closePodcastModal();
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

  const podcasts = [
    {
      id: 1,
      title: "UPC: Breaking Feudalism, Building a Republic",
      description: "A deep dive into Uganda's political history with Joseph Ochieno from UPC, exploring the party's vision for building a modern republic.",
      youtubeId: "-hfxM9BFBa4",
      thumbnail: "/videos/UPC-Breaking-Feudalism-Building-a-Republic.png",
      duration: "15:30",
      category: "Policy Digest Podcast",
      date: "2025-05-06",
      guest: "Joseph Ochieno (UPC)"
    },
    {
      id: 2,
      title: "Dr. Obote's Common Man's Charter",
      description: "An insightful analysis of Dr. Milton Obote's Common Man's Charter and its impact on Uganda's development trajectory.",
      youtubeId: "doboz00R5t8",
      thumbnail: "/videos/Dr.-Obotes-Common-Mans-Charter.png",
      duration: "12:45",
      category: "Historical Analysis",
      date: "2025-05-04",
      guest: "Policy Expert"
    },
    {
      id: 3,
      title: "Building Uganda's Silicon Valley",
      description: "A comprehensive look at Uganda's tech ecosystem and the potential for creating a thriving innovation hub in East Africa.",
      youtubeId: "aVCnJfWW480",
      thumbnail: "/videos/Building-Ugands-Silicon-Valley.png",
      duration: "18:20",
      category: "Technology & Development",
      date: "2025-05-02",
      guest: "Tech Industry Leader"
    },
    {
      id: 4,
      title: "Women's Movement in Uganda: A Legacy of Courage",
      description: "A powerful conversation with Ms. Akiteng Isabella about the women's movement in Uganda and its lasting impact on society.",
      youtubeId: "T5lrqFImjeY",
      thumbnail: "/videos/Womens-Movement-in-Uganda-A-Legacy-of-Courage.png",
      duration: "22:15",
      category: "Social Justice",
      date: "2025-04-28",
      guest: "Ms. Akiteng Isabella"
    },
    {
      id: 5,
      title: "The Political Economy of UMEME's Exit",
      description: "An economist from CSBAG discusses the implications of UMEME's exit from Uganda's electricity sector.",
      youtubeId: "luSlo0n0PO8",
      thumbnail: "/videos/The-Political-Economy-of-UMEMEs-Exit.png",
      duration: "25:30",
      category: "Economic Analysis",
      date: "2025-04-25",
      guest: "CSBAG Economist"
    },
    {
      id: 6,
      title: "Decolonising Philanthropy",
      description: "A thought-provoking discussion with Eshban Kwesiga about reimagining philanthropy in the African context.",
      youtubeId: "qMw1VIaQoV8",
      thumbnail: "/videos/Decolonising-Philantropy.png",
      duration: "20:45",
      category: "Development",
      date: "2025-04-22",
      guest: "Eshban Kwesiga"
    },
    {
      id: 7,
      title: "Harnessing Population Dynamics for Peace and Development",
      description: "Exploring how population dynamics in East and Southern Africa can be leveraged for sustainable peace and development.",
      youtubeId: "HWwyYl0aTgE",
      thumbnail: "/videos/Harnessing-Population-Dynamics-for-Peace-and-Development-in-East-and-Southern-Africa.png",
      duration: "28:10",
      category: "Demographics",
      date: "2025-04-20",
      guest: "Demographics Expert"
    },
    {
      id: 8,
      title: "Sexual and Reproductive Health in Uganda",
      description: "A critical examination of sexual and reproductive health policies and their implementation in Uganda.",
      youtubeId: "GtWuQOey7Hg",
      thumbnail: "/videos/Sexual-and-Reproductive-Health-in-Uganda.png",
      duration: "24:35",
      category: "Public Health",
      date: "2025-04-18",
      guest: "Health Policy Expert"
    },
    {
      id: 9,
      title: "Regional Unrest and Stability",
      description: "Analyzing regional conflicts and their impact on stability in East Africa and the broader region.",
      youtubeId: "QLkVDcndNHs",
      thumbnail: "/videos/Regional-Unrest--scaled.png",
      duration: "26:20",
      category: "Regional Security",
      date: "2025-04-15",
      guest: "Security Analyst"
    }
  ];

  const categories = ["All", "Policy Digest Podcast", "Historical Analysis", "Technology & Development", "Social Justice", "Economic Analysis", "Development", "Demographics", "Public Health", "Regional Security"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPodcasts = selectedCategory === "All" 
    ? podcasts 
    : podcasts.filter(podcast => podcast.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero/podcasts-hero.jpg')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-4xl">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Policy Digest Podcast
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
            >
              In-depth conversations with thought leaders, policymakers, and experts shaping Uganda's future
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Badge className="bg-primary/20 text-primary border border-primary/30 px-4 py-2 text-sm rounded-md">
                Policy Analysis
              </Badge>
              <Badge className="bg-secondary/20 text-secondary border border-secondary/30 px-4 py-2 text-sm rounded-md">
                Expert Interviews
              </Badge>
              <Badge className="bg-accent/20 text-accent border border-accent/30 px-4 py-2 text-sm rounded-md">
                Public Discourse
              </Badge>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
              <Badge
                variant={category === 'All' ? 'default' : 'secondary'}
                className={`px-4 py-2 text-sm cursor-pointer transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30'
                    : 'bg-secondary/20 text-secondary border border-secondary/30 hover:bg-secondary/30'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Podcasts Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPodcasts.map((podcast, index) => (
            <motion.div
              key={podcast.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative h-96 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm">
              <img
                src={podcast.thumbnail}
                alt={podcast.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 cursor-pointer" onClick={() => openPodcastModal(podcast)}>
                  <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-primary/90 text-white px-2 py-1 rounded text-xs">{podcast.category}</span>
                  <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">{podcast.duration}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{podcast.title}</h3>
                <p className="text-white/90 text-sm mb-3 line-clamp-2">{podcast.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/70">{new Date(podcast.date).toLocaleDateString()}</span>
                  <Button size="sm" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 rounded-md px-4 py-2" onClick={() => openPodcastModal(podcast)}>
                    Listen Now
                  </Button>
                </div>
              </div>
            </Card>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20" style={{background: 'linear-gradient(to right, rgb(30 64 175), rgb(245 158 11), rgb(16 185 129), rgb(239 68 68))'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Stay Updated with Policy Insights
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-12 max-w-4xl mx-auto"
          >
            Subscribe to our podcast for the latest policy analysis, expert interviews, and in-depth discussions on Uganda's development journey.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 shadow-lg">
              Subscribe on YouTube
            </Button>
            <Button size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 shadow-lg">
              Follow on Social Media
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Podcast Modal */}
      {isModalOpen && selectedPodcast && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={closePodcastModal}>
          <div className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={closePodcastModal}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedPodcast.youtubeId}?autoplay=1&rel=0`}
                title={selectedPodcast.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">{selectedPodcast.title}</h3>
              <p className="text-muted-foreground mb-4">{selectedPodcast.description}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full">{selectedPodcast.category}</span>
                <span>{selectedPodcast.duration}</span>
                <span>{new Date(selectedPodcast.date).toLocaleDateString()}</span>
              </div>
              {selectedPodcast.guest && (
                <p className="text-sm text-muted-foreground">
                  <strong>Guest:</strong> {selectedPodcast.guest}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Podcasts;
