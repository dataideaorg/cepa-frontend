"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const Gallery: React.FC = () => {
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
                          className="relative h-64 overflow-hidden hover:shadow-xl transition-all duration-300 group bg-white/20 border border-white/30 backdrop-blur-sm"
                        >
                        <div 
                          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                          style={{ backgroundImage: `url(${image.src})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="text-sm font-semibold mb-1 line-clamp-1">{image.title}</h3>
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
            Stay Connected
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Subscribe to our channels to get notified about new multimedia content and stay updated with our latest work.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 shadow-lg">
              <Link href="/resources#newsletters">
                Subscribe to Newsletter
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white/20 text-white border border-white/30 hover:bg-white/30 shadow-lg">
              <Link href="/get-involved">
                Get Involved
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
